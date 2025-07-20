//!native
import { Controller, OnRender, OnStart } from "@flamework/core";

import Signal from "@rbxts/signal";
import Maid from "@rbxts/maid";
import { Angles } from "shared/angles";
import { MathUtils } from "shared/utils/mathUtils";

import { Workspace, Players, RunService, UserInputService, ContextActionService, ReplicatedStorage } from "@rbxts/services";
import { Limits, Viewmodel } from "shared/types";
import { MovementAnimationController } from "./movementAnimationController";

const HEAD_ACCESSORY_TYPES: Array<Enum.AccessoryType> = [
	Enum.AccessoryType.Face,
	Enum.AccessoryType.Eyebrow,
	Enum.AccessoryType.Eyelash,
	Enum.AccessoryType.Hair,
	Enum.AccessoryType.Hat
];

const LERP_WEIGHT = 60;

const CAMERA_OFFSET = 0.8;

enum CameraView {
	FirstPerson,
	ThirdPerson
}

@Controller()
export class CameraController implements OnStart,OnRender {
    player: Player = Players.LocalPlayer;
    character: Model | undefined;

    viewmodel: Viewmodel | undefined;

    humanoid: Humanoid | undefined;

	rootPart: Part | undefined;

	head: Part | undefined;
	torso: Part | undefined;
	rightArm: Part | undefined;
	leftArm: Part | undefined;
	rightLeg: Part | undefined;
	leftLeg: Part | undefined;
	
	rootJoint: Motor6D | undefined;
	neck: Motor6D | undefined;
	rightShoulder: Motor6D | undefined;
	leftShoulder: Motor6D | undefined;
	rightHip: Motor6D | undefined;
	leftHip: Motor6D | undefined;

    camera: Camera | undefined;
	currentView: CameraView = CameraView.FirstPerson;
	offset: CFrame = new CFrame();

    updateHeadTransparency: Signal<() => void> = new Signal();

    rayParams: RaycastParams = new RaycastParams();

	rootYaw: number = 0;

	rawRotation: Angles = new Angles();
	rotation: Angles = new Angles();

	cameraLerpWeight: number = 3;

	pitchLimit: Limits<number> = new Limits(-70,70);
	yawLimit: number = 30;

	forwardCameraOffset: number = 0;

	toHeadAlpha = 0;

	headTransparency = 1;

	playerMaid: Maid = new Maid();
	characterMaid: Maid = new Maid();

	constructor(private movementAnimController: MovementAnimationController) {}

    onStart(): void {
		this.rayParams.FilterDescendantsInstances = [];
        this.rayParams.CollisionGroup = "Player";
        this.rayParams.RespectCanCollide = true;
        this.rayParams.IgnoreWater = true;
        this.rayParams.FilterType = Enum.RaycastFilterType.Exclude;

        UserInputService.MouseBehavior = Enum.MouseBehavior.LockCenter;
		UserInputService.MouseIconEnabled = false;

		ContextActionService.BindAction("MouseMove",(a,s,t) => this.handleAction(a,s,t),false,Enum.UserInputType.MouseMovement);
		ContextActionService.BindAction("CycleView",(a,s,t) => this.handleAction(a,s,t),false,Enum.KeyCode.X);

		this.playerMaid.GiveTask(this.player.CharacterAdded.Connect((character) => this.onCharacterAdd(character)));
		this.playerMaid.GiveTask(this.player.Destroying.Connect(() => this.cleanup()));
    }

    onRender(frameTime: number): void {
        if (this.camera === undefined || this.character === undefined) return;
		if (this.humanoid === undefined || this.rootPart === undefined) return;
		if (this.head === undefined || this.torso === undefined) return;
		if (this.leftArm === undefined || this.rightArm === undefined) return;
		if (this.leftLeg === undefined || this.rightLeg === undefined) return;
		if (!this.areJointsInitialized()) return;

		const lerpWeight = 1 - math.pow(0.5,LERP_WEIGHT * frameTime);
		const rootLerpWeight = 1 - math.pow(0.5,15 * frameTime);
		const offsetLerpWeight = 1 - math.pow(0.5,20 * frameTime);

		switch(this.currentView) {
			case CameraView.FirstPerson:
				this.offset = this.offset.Lerp(new CFrame(),lerpWeight);
				break;
			case CameraView.ThirdPerson:
				this.offset = this.offset.Lerp(new CFrame(2,0,4),lerpWeight);
				break;
		}
		
		this.rotation = this.rotation.Lerp(this.rawRotation,math.pow(this.cameraLerpWeight * frameTime,0.5));

		const flatCFrame = CFrame.Angles(0,this.rotation.yaw,0);
		const flatLookVector = flatCFrame.LookVector;
		const flatRightVector = flatCFrame.RightVector;
		const flatUpVector = flatCFrame.UpVector;

		const headCFrame = new CFrame(this.head.CFrame.Position);

		let pitchWeight = -math.map(this.rotation.pitch,math.rad(this.pitchLimit.min),math.rad(this.pitchLimit.max),-CAMERA_OFFSET,CAMERA_OFFSET);

		const headRayLength = this.head.Size.Z + 0.1;
		const headRay = Workspace.Raycast(headCFrame.Position,flatLookVector.mul(headRayLength),this.rayParams);

		if (headRay) {
			const wallWeight = headRay.Distance / headRayLength;
			pitchWeight = math.abs(pitchWeight * wallWeight / 1.5);
		}

		this.forwardCameraOffset = MathUtils.lerp(this.forwardCameraOffset,pitchWeight,offsetLerpWeight);

		const cameraAngles = CFrame.Angles(0,this.rotation.yaw,0).mul(CFrame.Angles(this.rotation.pitch,0,0));

		const cameraCFrame = headCFrame
								.mul(cameraAngles)
								.mul(this.offset)
								.add(flatLookVector.mul(0.1 + this.forwardCameraOffset))
								.add(flatUpVector.mul((this.head.Size.Y * 0.45) - math.abs(this.forwardCameraOffset) / 4));
		
		const headRot = this.head.CFrame.ToEulerAnglesXYZ();

		const realFPCFrame = this.head.CFrame
			.mul(CFrame.Angles(
				0,
				(headRot[1] + this.rotation.yaw) % math.pi * 2,
				0
			))
			.mul(CFrame.Angles(
				this.rotation.pitch,
				0,
				0
			));

		//const toHeadLerpWeight = 1 - math.pow(0.5,10 * frameTime);
		const toHeadLerpWeightFast = 1 - math.pow(0.5,20 * frameTime);

		if (this.movementAnimController.isPlaying("LandHard") && this.currentView === CameraView.FirstPerson) {
			this.toHeadAlpha = math.lerp(this.toHeadAlpha,1,toHeadLerpWeightFast);
		} else {
			this.toHeadAlpha = math.lerp(this.toHeadAlpha,0,toHeadLerpWeightFast);
		}

		// Do everything here

		if (this.viewmodel !== undefined) {
			if (this.rightShoulder !== undefined && this.leftShoulder !== undefined) {
				if (this.currentView === CameraView.FirstPerson && !this.movementAnimController.isPlaying("LandHard")) {
					this.rightShoulder.Part0 = this.viewmodel.Torso;
					this.leftShoulder.Part0 = this.viewmodel.Torso;
				} else {
					this.rightShoulder.Part0 = this.torso;
					this.leftShoulder.Part0 = this.torso;
				}
			}

			this.viewmodel.PivotTo(cameraCFrame);
		}

		this.camera.CFrame = cameraCFrame.Lerp(realFPCFrame,this.toHeadAlpha);

		if (this.humanoid.MoveDirection.Magnitude <= 0.1) {
			const cameraYawDiff = math.deg(MathUtils.angleDiffRad(this.getYaw(),this.rootYaw));

			let newRootYaw = this.rootYaw;
		
			if (cameraYawDiff > this.yawLimit) {
				newRootYaw = this.rotation.yaw - math.rad(this.yawLimit);
			} else if (cameraYawDiff < -this.yawLimit) {
				newRootYaw = this.rotation.yaw + math.rad(this.yawLimit);
			}
			this.rootYaw = newRootYaw;
		} else {
			const forwardDot = math.clamp(flatLookVector.Dot(this.humanoid.MoveDirection),-1,1);
			let moveAngle = math.map(
				math.clamp(math.acos(math.clamp(flatRightVector.Dot(this.humanoid.MoveDirection),-1,1)) - math.pi / 2,-90,90),
				-90,90,
				-45,45
			);
			if (forwardDot < -0.75) {
				moveAngle *= -1;
			}
			//print(math.deg(moveAngle));
			const newRootYaw = this.rotation.yaw + moveAngle;
			this.rootYaw = MathUtils.angleLerp(this.rootYaw,newRootYaw,rootLerpWeight);
		}
		
		
		this.rootYaw %= math.pi * 2;

		this.rootPart.CFrame = new CFrame(this.rootPart.CFrame.Position).mul(CFrame.Angles(0,this.rootYaw,0));
    }

    private areJointsInitialized() {
		return this.rootJoint !== undefined && this.neck !== undefined && this.rightShoulder !== undefined && this.leftShoulder !== undefined && this.rightHip !== undefined && this.leftHip !== undefined;
	}

	private isBodyPart(name: string) {
		return (name.match("right")[0] !== undefined || name.match("left")[0] !== undefined) && (name.match("leg")[0] !== undefined || name.match("arm")[0] !== undefined);
	}

	private handleDescendant(instance: Instance) {
		if (this.character === undefined) return;

		if (instance.IsA("BasePart") || instance.IsA("Decal")) {
			const accessory = instance.FindFirstAncestorOfClass("Accessory");
			if (instance === this.head || (accessory !== undefined && HEAD_ACCESSORY_TYPES.includes(accessory.AccessoryType)) || instance.IsA("Decal")) {
				instance.LocalTransparencyModifier = this.headTransparency;
				this.characterMaid.GiveTask(instance.GetPropertyChangedSignal("LocalTransparencyModifier").Connect(() => instance.LocalTransparencyModifier = this.headTransparency));
				this.characterMaid.GiveTask(this.updateHeadTransparency.Connect(() => instance.LocalTransparencyModifier = this.headTransparency));
			}
			if (instance.IsA("BasePart")) instance.CastShadow = false;
		}
	}

	private mouseMoved(mouseDelta: Vector2) {
		this.rawRotation.yaw -= math.rad(mouseDelta.X) * 0.4;
		this.rawRotation.pitch -= math.rad(mouseDelta.Y) * 0.4;
		this.rawRotation.pitch = math.clamp(this.rawRotation.pitch,math.rad(this.pitchLimit.min),math.rad(this.pitchLimit.max));
		
		this.rawRotation.yaw %= math.pi * 2;
	}

	private cycleView() {
		switch(this.currentView) {
			case CameraView.FirstPerson:
				this.currentView = CameraView.ThirdPerson;
				this.headTransparency = 0;
				break;
			case CameraView.ThirdPerson:
				this.currentView = CameraView.FirstPerson;
				this.headTransparency = 1;
				break;
		}
		this.updateHeadTransparency.Fire();
	}

	private handleAction(actionName: string,state: Enum.UserInputState,input: InputObject) {
		if (actionName === "MouseMove") this.mouseMoved(new Vector2(input.Delta.X,input.Delta.Y));
		if (actionName === "CycleView" && state === Enum.UserInputState.Begin) this.cycleView();
	}

    private onCharacterAdd(character: Model) {
		this.rawRotation.pitch = 0;
		this.rawRotation.yaw = 0;
		this.rawRotation.roll = 0;

		this.character = character;
		
		this.rayParams.AddToFilter(character);

		this.humanoid = this.character.WaitForChild("Humanoid") as Humanoid;

		this.rootPart = this.character.WaitForChild("HumanoidRootPart") as Part;

		this.head = this.character.WaitForChild("Head") as Part;
		this.torso = this.character.WaitForChild("Torso") as Part;

		this.rightArm = this.character.WaitForChild("Right Arm") as Part;
		this.leftArm = this.character.WaitForChild("Left Arm") as Part;

		this.rightLeg = this.character.WaitForChild("Right Leg") as Part;
		this.leftLeg = this.character.WaitForChild("Left Leg") as Part;


		this.rootJoint = this.rootPart.WaitForChild("RootJoint") as Motor6D;
		
		this.neck = this.torso.WaitForChild("Neck") as Motor6D;
		this.rightShoulder = this.torso.WaitForChild("Right Shoulder") as Motor6D;
		this.leftShoulder = this.torso.WaitForChild("Left Shoulder") as Motor6D;
		this.rightHip = this.torso.WaitForChild("Right Hip") as Motor6D;
		this.leftHip = this.torso.WaitForChild("Left Hip") as Motor6D;

		this.character.GetDescendants().forEach((instance) => this.handleDescendant(instance));

		this.characterMaid.GiveTask(this.character.DescendantAdded.Connect((instance) => this.handleDescendant(instance)));

		this.camera = new Instance("Camera");
		this.camera.Name = "PlayerCamera";

		task.wait(0.1);

		this.camera.CameraType = Enum.CameraType.Scriptable;
		this.camera.FieldOfView = 90;
		this.camera.Parent = this.character;

		Workspace.CurrentCamera = this.camera;

		this.viewmodel = ReplicatedStorage.Assets.Viewmodel.Clone();
		this.viewmodel.Parent = this.camera;

		this.rightShoulder.Part0 = this.viewmodel.Torso;
		this.leftShoulder.Part0 = this.viewmodel.Torso;

		this.characterMaid.GiveTask(this.viewmodel);
		this.characterMaid.GiveTask(this.character.Destroying.Connect(() => this.cleanupCharacter()));
	}

	private cleanupCharacter() {
		this.characterMaid.DoCleaning();
	}

	private cleanup() {
		this.playerMaid.Destroy();
		this.characterMaid.Destroy();
	}

    getPitch() {
		return this.rotation.pitch;
	}

	getYaw() {
		return this.rotation.yaw;
	}
}