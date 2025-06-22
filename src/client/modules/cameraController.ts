import { Workspace, Players, RunService, UserInputService, ContextActionService } from "@rbxts/services";
import Maid from "@rbxts/maid";
import { Angles } from "shared/angles";
import { MathUtils } from "shared/mathUtils";

const HEAD_ACCESSORY_TYPES: Array<Enum.AccessoryType> = [
	Enum.AccessoryType.Face,
	Enum.AccessoryType.Eyebrow,
	Enum.AccessoryType.Eyelash,
	Enum.AccessoryType.Hair,
	Enum.AccessoryType.Hat
];

interface CharacterInstances {
	Humanoid: Humanoid | undefined,

	RootPart: Part | undefined,

	Head: Part | undefined,
	Torso: Part | undefined,
	RightArm: Part | undefined,
	LeftArm: Part | undefined,
	RightLeg: Part | undefined,
	LeftLeg: Part | undefined
}

interface JointInstances {
	RootJoint: Motor6D | undefined,
	Neck: Motor6D | undefined,

	RightShoulder: Motor6D | undefined,
	LeftShoulder: Motor6D | undefined,

	RightHip: Motor6D | undefined,
	LeftHip: Motor6D | undefined
}

export default class CameraController implements CharacterInstances,JointInstances {
	Player: Player;
	Character: Model | undefined;

	Humanoid: Humanoid | undefined;

	RootPart: Part | undefined;

	Head: Part | undefined;
	Torso: Part | undefined;
	RightArm: Part | undefined;
	LeftArm: Part | undefined;
	RightLeg: Part | undefined;
	LeftLeg: Part | undefined;
	
	RootJoint: Motor6D | undefined;
	Neck: Motor6D | undefined;
	RightShoulder: Motor6D | undefined;
	LeftShoulder: Motor6D | undefined;
	RightHip: Motor6D | undefined;
	LeftHip: Motor6D | undefined;

	Camera: Camera | undefined;

	RootYaw: number = 0;

	RawRotation: Angles = new Angles();
	Rotation: Angles = new Angles();

	CameraLerpWeight: number = 3;

	PitchLimit: [number,number] = [-70,70];
	YawLimit: number = 40;

	PlayerMaid: Maid = new Maid();
	CharacterMaid: Maid = new Maid();

	constructor() {
		this.Player = Players.LocalPlayer;

		UserInputService.MouseBehavior = Enum.MouseBehavior.LockCenter;
		UserInputService.MouseIconEnabled = false;

		ContextActionService.BindAction("MouseMove",(actionName,state,input) => this.HandleAction(actionName,state,input),false,Enum.UserInputType.MouseMovement);

		this.PlayerMaid.GiveTask(RunService.PreRender.Connect((frameTime) => this.Update(frameTime)));
		this.PlayerMaid.GiveTask(this.Player.CharacterAdded.Connect((character) => this.OnCharacterAdd(character)));
		this.PlayerMaid.GiveTask(this.Player.Destroying.Connect(() => this.Cleanup()));
	}

	GetPitch() {
		return this.Rotation.Pitch;
	}

	GetYaw() {
		return this.Rotation.Yaw;
	}

	private AreJointsInitialized() {
		return this.RootJoint !== undefined && this.Neck !== undefined && this.RightShoulder !== undefined && this.LeftShoulder !== undefined && this.RightHip !== undefined && this.LeftHip !== undefined;
	}

	private IsBodyPart(name: string) {
		return (name.match("right")[0] !== undefined || name.match("left")[0] !== undefined) && (name.match("leg")[0] !== undefined || name.match("arm")[0] !== undefined)
	}

	private HandleDescendant(instance: Instance) {
		if (this.Character === undefined) return;

		if (instance.IsA("BasePart") || instance.IsA("Decal")) {
			let accessory = instance.FindFirstAncestorOfClass("Accessory");
			if (instance === this.Head || (accessory !== undefined && HEAD_ACCESSORY_TYPES.includes(accessory.AccessoryType)) || instance.IsA("Decal")) {
				instance.LocalTransparencyModifier = 1;
				this.CharacterMaid.GiveTask(instance.GetPropertyChangedSignal("LocalTransparencyModifier").Connect(() => instance.LocalTransparencyModifier = 1));
			}
		}
	}

	private MouseMoved(mouseDelta: Vector2) {
		this.RawRotation.Yaw -= math.rad(mouseDelta.X * 0.4);
		this.RawRotation.Pitch -= math.rad(mouseDelta.Y * 0.4);
		this.RawRotation.Pitch = math.clamp(this.RawRotation.Pitch,math.rad(this.PitchLimit[0]),math.rad(this.PitchLimit[1]));
		
		this.RawRotation.Yaw %= math.pi * 2
	}

	private HandleAction(actionName: string,state: Enum.UserInputState,input: InputObject) {
		if (actionName === "MouseMove") {
			this.MouseMoved(new Vector2(input.Delta.X,input.Delta.Y));
		}
	}

	private Update(frameTime: number) {
		if (this.Camera === undefined || this.Character === undefined) return;
		if (this.Humanoid === undefined || this.RootPart === undefined) return;
		if (this.Head === undefined || this.Torso === undefined) return;
		if (this.LeftArm === undefined || this.RightArm === undefined) return;
		if (this.LeftLeg === undefined || this.RightLeg === undefined) return;
		if (!this.AreJointsInitialized()) return;
		
		this.Rotation = this.Rotation.Lerp(this.RawRotation,math.pow(this.CameraLerpWeight * frameTime,0.5));

		let flatCFrame = CFrame.Angles(0,this.Rotation.Yaw,0);
		let flatLookVector = flatCFrame.LookVector;
		let flatUpVector = flatCFrame.UpVector;

		let headCFrame = new CFrame(this.Head.CFrame.Position);

		let pitchWeight = -math.map(this.Rotation.Pitch,math.rad(this.PitchLimit[0]),math.rad(this.PitchLimit[1]),-0.8,0.8);

		let cameraCFrame = headCFrame
								.mul(CFrame.Angles(0,this.Rotation.Yaw,0)
								.mul(CFrame.Angles(this.Rotation.Pitch,0,0)))
								.add(flatLookVector.mul(0.1 + pitchWeight))
								.add(flatUpVector.mul((this.Head.Size.Y * 0.45) - math.abs(pitchWeight) / 4));

		// Do everything here

		this.Camera.CFrame = cameraCFrame;

		let cameraYawDiff = math.deg(MathUtils.AngleDiffRad(this.GetYaw(),this.RootYaw));
		
		if (cameraYawDiff > this.YawLimit) {
			this.RootYaw = this.Rotation.Yaw - math.rad(this.YawLimit);
		} else if (cameraYawDiff < -this.YawLimit) {
			this.RootYaw = this.Rotation.Yaw + math.rad(this.YawLimit);
		}

		this.RootYaw %= math.pi * 2;

		this.RootPart.CFrame = new CFrame(this.RootPart.CFrame.Position).mul(CFrame.Angles(0,this.RootYaw,0));
	}

	private OnCharacterAdd(character: Model) {
		this.RawRotation.Pitch = 0;
		this.RawRotation.Yaw = 0;
		this.RawRotation.Roll = 0;

		this.Character = character;


		this.Humanoid = this.Character.WaitForChild("Humanoid") as Humanoid;

		this.RootPart = this.Character.WaitForChild("HumanoidRootPart") as Part;

		this.Head = this.Character.WaitForChild("Head") as Part;
		this.Torso = this.Character.WaitForChild("Torso") as Part;

		this.RightArm = this.Character.WaitForChild("Right Arm") as Part;
		this.LeftArm = this.Character.WaitForChild("Left Arm") as Part;

		this.RightLeg = this.Character.WaitForChild("Right Leg") as Part;
		this.LeftLeg = this.Character.WaitForChild("Left Leg") as Part;


		this.RootJoint = this.RootPart.WaitForChild("RootJoint") as Motor6D;
		
		this.Neck = this.Torso.WaitForChild("Neck") as Motor6D;
		this.RightShoulder = this.Torso.WaitForChild("Right Shoulder") as Motor6D;
		this.LeftShoulder = this.Torso.WaitForChild("Left Shoulder") as Motor6D;
		this.RightHip = this.Torso.WaitForChild("Right Hip") as Motor6D;
		this.LeftHip = this.Torso.WaitForChild("Left Hip") as Motor6D;


		this.Character.GetDescendants().forEach((instance) => this.HandleDescendant(instance));

		this.CharacterMaid.GiveTask(this.Character.DescendantAdded.Connect((instance) => this.HandleDescendant(instance)));

		this.Camera = new Instance("Camera");
		this.Camera.Name = "PlayerCamera";

		task.wait(0.1)

		this.Camera.CameraType = Enum.CameraType.Scriptable;
		this.Camera.FieldOfView = 90;
		this.Camera.Parent = this.Character;

		Workspace.CurrentCamera = this.Camera;

		this.CharacterMaid.GiveTask(this.Character.Destroying.Connect(() => this.CleanupCharacter()));
	}

	private CleanupCharacter() {
		this.CharacterMaid.DoCleaning();
	}

	private Cleanup() {
		this.PlayerMaid.Destroy();
		this.CharacterMaid.Destroy();
	}
}
