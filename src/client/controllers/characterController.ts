//!native
//!optimize 2

import { Controller, OnRender, OnStart } from "@flamework/core";

import Maid from "@rbxts/maid";
import { Workspace, Players, UserInputService, ContextActionService } from "@rbxts/services";
import { Events } from "client/networking";
import { ColliderShape, MovementManager } from "shared/types";

type Inputs = {
    [input: string]: boolean,
    forward: boolean,
    backward: boolean,
    left: boolean,
    right: boolean,
    jump: boolean,
    crouch: boolean
};

type FloorInfo = {
    material: Enum.Material,
    normal: Vector3
};

const DEFAULT_HEIGHT = 3.2;
const CROUCH_HEIGHT = 1.6;

@Controller()
export class CharacterController implements OnStart,OnRender {
    camera: Camera | undefined;
    player: Player = Players.LocalPlayer;
    character: Model | undefined;

    colliderShape: ColliderShape | undefined;

    humanoid: Humanoid | undefined;
    rootPart: Part | undefined;

    manager: MovementManager | undefined;
    groundSensor: ControllerPartSensor | undefined;

    previousGroundResult: RaycastResult | undefined;

    rayParams: RaycastParams = new RaycastParams();

    inputs: Inputs = {
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false,
        crouch: false
    };

    floor: FloorInfo = {
        material: Enum.Material.Air,
        normal: Vector3.yAxis
    };
    
    playerMaid: Maid = new Maid();
    characterMaid: Maid = new Maid();

    onStart(): void {
        this.camera = Workspace.CurrentCamera;

        this.rayParams.FilterDescendantsInstances = [];
        this.rayParams.CollisionGroup = "Player";
        this.rayParams.RespectCanCollide = true;
        this.rayParams.IgnoreWater = true;
        this.rayParams.FilterType = Enum.RaycastFilterType.Exclude;


        ContextActionService.BindAction("forward",(a,s,i) => this.onAction(a,s,i),false,Enum.KeyCode.W);
        ContextActionService.BindAction("backward",(a,s,i) => this.onAction(a,s,i),false,Enum.KeyCode.S);

        ContextActionService.BindAction("left",(a,s,i) => this.onAction(a,s,i),false,Enum.KeyCode.A);
        ContextActionService.BindAction("right",(a,s,i) => this.onAction(a,s,i),false,Enum.KeyCode.D);

        ContextActionService.BindAction("jump",(a,s,i) => this.onAction(a,s,i),false,Enum.KeyCode.Space);
        ContextActionService.BindAction("crouch",(a,s,i) => this.onAction(a,s,i),false,Enum.KeyCode.LeftControl,Enum.KeyCode.C);


        this.playerMaid.GiveTask(this.player.CharacterAdded.Connect((character) => this.onCharacterAdd(character)));
        this.playerMaid.GiveTask(Workspace.GetPropertyChangedSignal("CurrentCamera").Connect(() => this.camera = Workspace.CurrentCamera));
        this.playerMaid.GiveTask(this.player.Destroying.Connect(() => this.cleanup()));
    }

    onRender(frameTime: number): void {
        if (this.humanoid === undefined || this.manager === undefined || this.rootPart === undefined || this.character === undefined || this.colliderShape === undefined) return;
        
        this.humanoid.Health = math.clamp(this.humanoid.Health,0,this.humanoid.MaxHealth);
        
        if (this.humanoid.Health <= 0) return;

        if (UserInputService.IsKeyDown(Enum.KeyCode.LeftShift)) {
            this.humanoid.WalkSpeed = 21;
        } else {
            this.humanoid.WalkSpeed = 14.28;
        }

        this.manager.BaseMoveSpeed = this.humanoid.WalkSpeed;
        this.manager.GroundController.GroundOffset = (this.getHeight() / 2) + this.colliderShape.Body.RootWeld.C1.Y;

        this.updateMoveDirection();
        this.updateSensors();

        if (this.inputs.jump === true && this.floor.material !== Enum.Material.Air) {
            this.inputs.jump = false;
            this.changeState(Enum.HumanoidStateType.Jumping);
            this.rootPart.ApplyImpulse(Vector3.yAxis.mul(this.humanoid.JumpPower));
        }

        let height = DEFAULT_HEIGHT;

        if (this.inputs.crouch === true || this.floor.material === Enum.Material.Air) {
            height = CROUCH_HEIGHT;
        }
        const oldSize = this.colliderShape.Body.Size;
        this.colliderShape.Body.Size = new Vector3(height,oldSize.Y,oldSize.Z);

        if (this.rootPart.CFrame.Position.Y <= Workspace.FallenPartsDestroyHeight) this.humanoid.Health = -math.huge;
    }

    changeState(state: Enum.HumanoidStateType) {
        this.humanoid?.ChangeState(state);
        Events.characterChangeState.fire(state);
    }

    private onAction(name: string,state: Enum.UserInputState,input: InputObject) {
        if (this.inputs[name] === undefined) return;
        if (state === Enum.UserInputState.Begin) {
            this.inputs[name] = true;
        }
        if (state === Enum.UserInputState.End) {
            this.inputs[name] = false;
        }
    }

    private getForwardDirection() {
        if (this.camera === undefined) return Vector3.zero;
        const dir = this.camera.CFrame.LookVector;
        return new Vector3(dir.X,0,dir.Z).Unit;
    }

    private getRightDirection() {
        if (this.camera === undefined) return Vector3.zero;
        const dir = this.camera.CFrame.RightVector;
        return new Vector3(dir.X,0,dir.Z).Unit;
    }

    getLegPosition() {
        if (this.rootPart === undefined) return Vector3.zero;
        return this.rootPart.CFrame.Position.sub(Vector3.yAxis.mul(1.5));
    }

    private getMovementDirection() {
        let direction = Vector3.zero;
        if (this.inputs.forward) direction = direction.add(this.getForwardDirection());
        if (this.inputs.backward) direction = direction.sub(this.getForwardDirection());
        if (this.inputs.right) direction = direction.add(this.getRightDirection());
        if (this.inputs.left) direction = direction.sub(this.getRightDirection());
        return direction.Magnitude > 0 ? direction.Unit : Vector3.zero;
    }

    private updateMoveDirection() {
        if (this.humanoid === undefined || this.manager === undefined || this.rootPart === undefined) return;

        const wishDir = this.getMovementDirection();

        this.humanoid.Move(wishDir,false);
        this.manager.MovingDirection = wishDir;

        if (wishDir.Magnitude > 0) {
            this.manager.FacingDirection = wishDir;
        } else {
            this.manager.FacingDirection = this.rootPart.CFrame.LookVector;
        }

        this.manager.AirController.MoveMaxForce = this.rootPart.AssemblyLinearVelocity.Magnitude * this.manager.BaseMoveSpeed;
    }

    private getHeight() {
        if (this.colliderShape === undefined) return 0;
        return this.colliderShape.Body.Size.X + this.colliderShape.Legs.Size.Y;
    }

    private castGround(): RaycastResult | undefined {
        if (this.rootPart === undefined) return undefined;
        if (this.colliderShape === undefined) return undefined;

        /*const originCFrame = this.rootPart.CFrame;
        const direction = originCFrame.UpVector.mul(-1).mul(this.rootPart.Size.Y);
        return Workspace.Blockcast(originCFrame,this.rootPart.Size,direction,this.rayParams);*/

        const origin = this.colliderShape.Body.CFrame.Position;
        const radius = this.colliderShape.Legs.Size.Y / 2 - 0.01;
        const direction = Vector3.yAxis.mul(-1).mul((this.getHeight() / 2) + 0.02);

        return Workspace.Spherecast(origin,radius,direction,this.rayParams);
    }

    private updateSensors() {
        if (this.humanoid === undefined || this.rootPart === undefined || this.manager === undefined) return;
        if (this.groundSensor === undefined) return;

        const groundResult = this.castGround();

        if (groundResult !== undefined) {
            this.groundSensor.SensedPart = groundResult.Instance;
            this.groundSensor.HitNormal = groundResult.Normal;
            this.groundSensor.HitFrame = new CFrame(groundResult.Position);

            if (this.previousGroundResult !== undefined) {
                this.changeState(Enum.HumanoidStateType.Running);
            } else {
                this.changeState(Enum.HumanoidStateType.Landed);
            }
            this.manager.ActiveController = this.manager.GroundController;

            this.floor.material = groundResult.Material;
            this.floor.normal = groundResult.Normal;
        } else {
            this.groundSensor.SensedPart = undefined;
            this.groundSensor.HitNormal = Vector3.yAxis;
            this.groundSensor.HitFrame = new CFrame(this.rootPart.CFrame.Position);

            if (this.rootPart.AssemblyLinearVelocity.Y < 0) this.changeState(Enum.HumanoidStateType.Freefall);
            this.manager.ActiveController = this.manager.AirController;

            this.floor.material = Enum.Material.Air;
            this.floor.normal = Vector3.yAxis;
        }

        this.previousGroundResult = groundResult;
    }

    private onCharacterAdd(character: Model) {
        this.character = character;

        this.humanoid = character.WaitForChild("Humanoid") as Humanoid;
        this.rootPart = character.WaitForChild("HumanoidRootPart") as Part;

        this.colliderShape = this.character.WaitForChild("Collider") as ColliderShape;

        this.rayParams.AddToFilter(character);

        this.manager = this.character.WaitForChild("ControllerManager") as MovementManager;
        this.groundSensor = this.manager.GroundSensor as ControllerPartSensor;

        this.characterMaid.GiveTask(this.character.Destroying.Connect(() => this.cleanupCharacter()));
        this.characterMaid.GiveTask(this.humanoid.HealthChanged.Connect(health => {
            if (health <= 0) this.changeState(Enum.HumanoidStateType.Dead);
        }));
    }

    private cleanupCharacter() {
        this.characterMaid.Destroy();
        if (this.humanoid !== undefined) this.humanoid.Health = -math.huge;
    }

    private cleanup() {
        this.cleanupCharacter();
        this.playerMaid.Destroy();
    }
}