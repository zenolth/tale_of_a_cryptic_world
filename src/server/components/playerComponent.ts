//!native
import { BaseComponent, Component } from "@flamework/components";
import { OnPhysics, OnStart } from "@flamework/core";
import Maid from "@rbxts/maid";
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { ColliderShape, MovementManager } from "shared/types";

@Component()
export class PlayerComponent extends BaseComponent<{},Player> implements OnStart,OnPhysics {
    private character: Model | undefined;

    private colliderShape: ColliderShape | undefined;

    private movementManager: MovementManager | undefined;

    private groundSensor: ControllerPartSensor | undefined;
    private climbSensor: ControllerPartSensor | undefined;

    private humanoid: Humanoid | undefined;
    private rootPart: Part | undefined;

    private maid: Maid = new Maid();
    private characterMaid: Maid = new Maid();

    onStart(): void {
        this.maid.GiveTask(this.instance.CharacterAdded.Connect((c) => this.onCharacterAdd(c)));
    }

    onPhysics(frameTime: number, time: number): void {
        if (this.colliderShape === undefined) return;
        const height = this.colliderShape.Body.Size.X / 2;
        this.colliderShape.Body.EyesWeld.C1 = new CFrame(0,-height,0);
        this.colliderShape.Body.LegsWeld.C1 = new CFrame(0,height,0);
    }

    private givePartOwnership(part: BasePart) {
        try {
            if (part.Anchored === false && part.IsDescendantOf(Workspace)) part.SetNetworkOwner(this.instance);
        } finally {

        }
    }

    private handleInstance(instance: Instance) {
        if (instance.IsA("BasePart")) {
            this.givePartOwnership(instance);
            this.characterMaid.GiveTask(instance.GetPropertyChangedSignal("Anchored").Connect(() => {
                this.givePartOwnership(instance);
            }));
        }
    }

    private onCharacterAdd(character: Model) {
        this.character = character;

        this.humanoid = character.WaitForChild("Humanoid") as Humanoid;
        this.rootPart = character.WaitForChild("HumanoidRootPart") as Part;

        this.humanoid.EvaluateStateMachine = false;
        this.humanoid.BreakJointsOnDeath = true;
        this.humanoid.RequiresNeck = true;

        this.humanoid.AutoRotate = false;

        this.colliderShape = ReplicatedStorage.Assets.Collider.Clone();
        this.colliderShape.Parent = this.character;
        
        this.colliderShape.Body.RootWeld.Part1 = this.rootPart;

        this.colliderShape.Body.RootWeld.C0 = CFrame.Angles(0,0,math.pi / 2);
        this.colliderShape.Body.RootWeld.C1 = new CFrame(0,-0.48,0);

        this.movementManager = ReplicatedStorage.Assets.ControllerManager.Clone();

        this.groundSensor = new Instance("ControllerPartSensor");
        this.groundSensor.Name = "GroundSensor";
        this.groundSensor.SensorMode = Enum.SensorMode.Floor;
        this.groundSensor.UpdateType = Enum.SensorUpdateType.Manual;
        this.groundSensor.Parent = this.rootPart;

        this.climbSensor = new Instance("ControllerPartSensor");
        this.climbSensor.Name = "ClimbSensor";
        this.climbSensor.SensorMode = Enum.SensorMode.Ladder;
        this.climbSensor.UpdateType = Enum.SensorUpdateType.Manual;
        this.climbSensor.Parent = this.rootPart;

        this.movementManager.GroundSensor = this.groundSensor;
        this.movementManager.ClimbSensor = this.climbSensor;

        this.movementManager.RootPart = this.rootPart;

        this.movementManager.Parent = this.character;

        for (const i of this.character.GetDescendants()) {
            this.handleInstance(i);
        }

        this.characterMaid.GiveTask(this.character.DescendantAdded.Connect((i) => this.handleInstance(i)));
        this.characterMaid.GiveTask(this.colliderShape);
        this.characterMaid.GiveTask(this.character.Destroying.Connect(() => this.cleanupCharacter()));
    }

    cleanupCharacter() {
        this.characterMaid.DoCleaning();
    }

    Destroy() {
        this.cleanupCharacter();
        this.maid.DoCleaning();
    }
}