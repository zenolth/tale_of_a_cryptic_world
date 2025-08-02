interface Workspace extends Model {
	PlayerAnims: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
			Animator: Animator;
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Shoulder"]: Motor6D;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			HandleJoint: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		AnimSaves: ObjectValue & {
			PlayerRun: KeyframeSequence;
			PlayerIdle: KeyframeSequence;
			PlayerClimb: KeyframeSequence;
			PlayerWalk: KeyframeSequence;
		};
	};
	HudTest: Part;
	FirstPersonArms: Model & {
		["FirstPersonArms(R6)"]: LocalScript;
		["FirstPersonArms(R15)"]: LocalScript;
	};
	MenuBox: Model & {
		Views: Folder & {
			Cam2: Part;
			Cam3: Part;
			Cam1: Part;
		};
		Rake: Model & {
			LeftLowerArm: MeshPart & {
				LeftElbow: Motor6D;
			};
			LeftFoot: MeshPart & {
				["Sphere.0083"]: WeldConstraint;
				["Blood 2"]: Decal;
				["Blood fake v2"]: Decal;
				LeftAnkle: Motor6D;
				["Sphere.008"]: MeshPart;
			};
			RightHand: MeshPart & {
				["Blood Splatter"]: Decal;
				RightClaws: MeshPart;
				RightWrist: Motor6D;
				["Images/granny blood"]: Decal;
				RightClaws3: WeldConstraint;
			};
			HumanoidRootPart: Part;
			RightLowerLeg: MeshPart & {
				RightKnee: Motor6D;
			};
			LeftUpperLeg: MeshPart & {
				LeftHip: Motor6D;
			};
			LeftLowerLeg: MeshPart & {
				LeftKnee: Motor6D;
			};
			Monster: Humanoid & {
				Animator: Animator;
			};
			LowerTorso: MeshPart & {
				Root: Motor6D;
			};
			Head: MeshPart & {
				Head5: WeldConstraint;
				Neck: Motor6D;
				Pain2: Sound;
				Sphere13: WeldConstraint;
				Sphere9: WeldConstraint;
				Sphere11: WeldConstraint;
				Scream: Sound;
				Pain1: Sound;
				Mesh: MeshPart & {
					["Blood Splatter"]: Decal;
					["Blood Handprint"]: Decal;
					["Blood Splatter - Transparent"]: Decal;
				};
				Pain3: Sound;
			};
			UpperTorso: MeshPart & {
				Waist: Motor6D;
				["Images/blood splatter"]: Decal;
				["Blood fake "]: Decal;
			};
			LeftUpperArm: MeshPart & {
				blood8: Decal;
				["blood splatter1"]: Decal;
				LeftShoulder: Motor6D;
			};
			RightLowerArm: MeshPart & {
				RightElbow: Motor6D;
			};
			LeftHand: MeshPart & {
				["Blood 6"]: Decal;
				Blood: Decal;
				LeftWrist: Motor6D;
				["Blood 7"]: Decal;
				["Sphere.011"]: MeshPart;
				["Sphere.0115"]: WeldConstraint;
				["Images/wound1"]: Decal;
			};
			Animation: Animation;
			RightUpperArm: MeshPart & {
				RightShoulder: Motor6D;
			};
			RightUpperLeg: MeshPart & {
				RightHip: Motor6D;
			};
			RightFoot: MeshPart & {
				["Sphere.0141"]: WeldConstraint;
				["Sphere.014"]: MeshPart;
				RightAnkle: Motor6D;
			};
		};
	};
	PlrAnims: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			roblox: Decal;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		AnimSaves: ObjectValue & {
			LandHard: KeyframeSequence;
			Idle: KeyframeSequence;
			Jump: KeyframeSequence;
			Land: KeyframeSequence;
			Fall: KeyframeSequence;
			Run: KeyframeSequence;
			Walk: KeyframeSequence;
		};
		["Body Colors"]: BodyColors;
		Animate: LocalScript & {
			idle: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			jump: StringValue & {
				JumpAnim: Animation;
			};
			sit: StringValue & {
				SitAnim: Animation;
			};
			run: StringValue & {
				RunAnim: Animation;
			};
			toolnone: StringValue & {
				ToolNoneAnim: Animation;
			};
			ScaleDampeningPercent: NumberValue;
			PlayEmote: BindableFunction;
			fall: StringValue & {
				FallAnim: Animation;
			};
			climb: StringValue & {
				ClimbAnim: Animation;
			};
			walk: StringValue & {
				WalkAnim: Animation;
			};
		};
	};
	Baseplate: Part;
	Sound: Sound;
	Light: Part & {
		SpotLight: SpotLight;
	};
	FireaxeAnims: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Fireaxe: Tool & {
			MainPart: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			roblox: Decal;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			HandleJoint: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		AnimSaves: Model & {
			SwingOld: KeyframeSequence;
			IdleOld: KeyframeSequence & {
				Keyframe: Keyframe & {
					HumanoidRootPart: Pose & {
						Null: IntValue;
						Torso: Pose & {
							Null: IntValue;
							["Right Arm"]: Pose & {
								MainPart: Pose;
							};
							["Left Arm"]: Pose;
						};
					};
				};
			};
			EquipOld: KeyframeSequence;
		};
	};
	Scene: Model & {
		["Cube.002"]: MeshPart & {
			SurfaceAppearance: SurfaceAppearance;
		};
		["Cube.001"]: MeshPart & {
			SurfaceAppearance: SurfaceAppearance;
			Weld: Weld;
		};
		["Cube.003"]: MeshPart & {
			SurfaceAppearance: SurfaceAppearance;
			Weld: Weld;
		};
	};
	RakeDummyOld: Model & {
		LeftLowerArm: MeshPart & {
			LeftElbow: Motor6D;
		};
		LeftFoot: MeshPart & {
			LeftAnkle: Motor6D;
			["Sphere.0083"]: WeldConstraint;
			["Sphere.008"]: MeshPart;
		};
		AnimSaves: Model & {
			CoolPose: KeyframeSequence & {
				Keyframe: Keyframe & {
					HumanoidRootPart: Pose & {
						Null: IntValue;
						LowerTorso: Pose & {
							UpperTorso: Pose & {
								LeftUpperArm: Pose & {
									LeftLowerArm: Pose & {
										LeftHand: Pose;
									};
								};
								RightUpperArm: Pose & {
									RightLowerArm: Pose & {
										RightHand: Pose;
									};
								};
								Head: Pose;
							};
							RightUpperLeg: Pose & {
								RightLowerLeg: Pose & {
									RightFoot: Pose;
								};
							};
							LeftUpperLeg: Pose & {
								LeftLowerLeg: Pose & {
									LeftFoot: Pose;
								};
							};
						};
					};
				};
			};
			Idle: KeyframeSequence & {
				RakeDummyAnimationRigData: AnimationRigData;
			};
			Runnin: KeyframeSequence;
			attack1: KeyframeSequence;
			attack2: KeyframeSequence;
			backstab: KeyframeSequence;
			Walk: KeyframeSequence;
		};
		RightHand: MeshPart & {
			RightClaws3: WeldConstraint;
			RightWrist: Motor6D;
			RightClaws: MeshPart;
		};
		HumanoidRootPart: Part;
		RightLowerLeg: MeshPart & {
			RightKnee: Motor6D;
		};
		LeftUpperLeg: MeshPart & {
			LeftHip: Motor6D;
		};
		LeftLowerLeg: MeshPart & {
			LeftKnee: Motor6D;
		};
		Monster: Humanoid & {
			Animator: Animator;
		};
		LowerTorso: MeshPart & {
			Root: Motor6D;
		};
		Head: MeshPart & {
			Mesh: MeshPart & {
				Weld: Weld;
			};
			Scream: Sound;
			Neck: Motor6D;
			Pain1: Sound;
			Pain2: Sound;
			Pain3: Sound;
		};
		UpperTorso: MeshPart & {
			Waist: Motor6D;
		};
		LeftUpperArm: MeshPart & {
			LeftShoulder: Motor6D;
		};
		RightLowerArm: MeshPart & {
			RightElbow: Motor6D;
		};
		LeftHand: MeshPart & {
			LeftWrist: Motor6D;
			["Sphere.011"]: MeshPart;
			["Sphere.0115"]: WeldConstraint;
		};
		RightUpperArm: MeshPart & {
			RightShoulder: Motor6D;
		};
		RightUpperLeg: MeshPart & {
			RightHip: Motor6D;
		};
		RightFoot: MeshPart & {
			["Sphere.0141"]: WeldConstraint;
			["Sphere.014"]: MeshPart;
			RightAnkle: Motor6D;
		};
	};
	RakeDummy: Model & {
		LeftLowerArm: MeshPart & {
			LeftElbow: Motor6D;
		};
		LeftFoot: MeshPart & {
			LeftAnkle: Motor6D;
			["Sphere.008"]: MeshPart & {
				Weld: Weld;
			};
		};
		AnimSaves: ObjectValue;
		RightHand: MeshPart & {
			RightClaws: MeshPart & {
				Weld: Weld;
			};
			RightWrist: Motor6D;
		};
		HumanoidRootPart: Part;
		RightLowerLeg: MeshPart & {
			RightKnee: Motor6D;
		};
		LeftUpperLeg: MeshPart & {
			LeftHip: Motor6D;
		};
		LeftLowerLeg: MeshPart & {
			LeftKnee: Motor6D;
		};
		Monster: Humanoid & {
			Animator: Animator;
		};
		LowerTorso: MeshPart & {
			Root: Motor6D;
		};
		Head: MeshPart & {
			Mesh: MeshPart & {
				Weld: Weld;
			};
			Scream: Sound;
			Neck: Motor6D;
			Pain1: Sound;
			Pain2: Sound;
			Pain3: Sound;
		};
		UpperTorso: MeshPart & {
			Waist: Motor6D;
		};
		LeftUpperArm: MeshPart & {
			LeftShoulder: Motor6D;
		};
		RightLowerArm: MeshPart & {
			RightElbow: Motor6D;
		};
		LeftHand: MeshPart & {
			LeftWrist: Motor6D;
			["Sphere.011"]: MeshPart & {
				Weld: Weld;
			};
		};
		RightUpperArm: MeshPart & {
			RightShoulder: Motor6D;
		};
		RightUpperLeg: MeshPart & {
			RightHip: Motor6D;
		};
		RightFoot: MeshPart & {
			RightAnkle: Motor6D;
			["Sphere.014"]: MeshPart & {
				Weld: Weld;
			};
		};
	};
	plane: Model;
	FlareGunAnims: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			roblox: Decal;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			HandleJoint: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Flare gun"]: Tool & {
			Hammer: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Barrel: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			MainPart: MeshPart & {
				Hammer: Motor6D;
				Barrel: Motor6D;
				SurfaceAppearance: SurfaceAppearance;
				Ammo: Motor6D;
				Trigger: Motor6D;
			};
			Trigger: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Ammo: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
		};
		AnimSaves: Model & {
			idle: KeyframeSequence;
		};
		["Body Colors"]: BodyColors;
		Animate: LocalScript & {
			idle: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			jump: StringValue & {
				JumpAnim: Animation;
			};
			sit: StringValue & {
				SitAnim: Animation;
			};
			run: StringValue & {
				RunAnim: Animation;
			};
			toolnone: StringValue & {
				ToolNoneAnim: Animation;
			};
			ScaleDampeningPercent: NumberValue;
			PlayEmote: BindableFunction;
			fall: StringValue & {
				FallAnim: Animation;
			};
			climb: StringValue & {
				ClimbAnim: Animation;
			};
			walk: StringValue & {
				WalkAnim: Animation;
			};
		};
	};
	Camera: Camera;
	walkanimationyoufuckhead: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Shoulder"]: Motor6D;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		AnimSaves: Model & {
			vault: KeyframeSequence;
			idle: KeyframeSequence;
			jump: KeyframeSequence;
			land: KeyframeSequence;
			fall: KeyframeSequence;
			run: KeyframeSequence;
			walk: KeyframeSequence;
		};
	};
	FireaxeAnimsaNew: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Fireaxe: Tool & {
			MainPart: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			roblox: Decal;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			HandleJoint: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		AnimSaves: ObjectValue & {
			Equip: KeyframeSequence;
			Swingspecial: KeyframeSequence & {
				EndSwing: Keyframe & {
					Null: IntValue;
					HumanoidRootPart: Pose & {
						Null: IntValue;
						Torso: Pose & {
							Head: Pose & {
								Null: IntValue;
							};
							Null: IntValue;
							["Right Arm"]: Pose & {
								Null: IntValue;
								MainPart: Pose & {
									Null: IntValue;
								};
							};
							["Left Arm"]: Pose & {
								Null: IntValue;
							};
						};
					};
				};
				StartSwing: Keyframe & {
					HumanoidRootPart: Pose & {
						Null: IntValue;
						Torso: Pose & {
							["Left Leg"]: Pose & {
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
							["Right Arm"]: Pose & {
								MainPart: Pose & {
									Ease: Folder & {
										Params: Folder & {
											Direction: StringValue;
										};
										Type: StringValue;
									};
								};
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
							["Left Arm"]: Pose & {
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
							Ease: Folder & {
								Params: Folder & {
									Direction: StringValue;
								};
								Type: StringValue;
							};
							Head: Pose & {
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
							["Right Leg"]: Pose & {
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
						};
					};
				};
			};
			Idle: KeyframeSequence;
			Swing1: KeyframeSequence & {
				EndSwing: Keyframe & {
					Null: IntValue;
					HumanoidRootPart: Pose & {
						Null: IntValue;
						Torso: Pose & {
							Head: Pose & {
								Null: IntValue;
							};
							Null: IntValue;
							["Right Arm"]: Pose & {
								Null: IntValue;
								MainPart: Pose & {
									Null: IntValue;
								};
							};
							["Left Arm"]: Pose & {
								Null: IntValue;
							};
						};
					};
				};
				StartSwing: Keyframe & {
					HumanoidRootPart: Pose & {
						Null: IntValue;
						Torso: Pose & {
							Head: Pose & {
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
							Ease: Folder & {
								Params: Folder & {
									Direction: StringValue;
								};
								Type: StringValue;
							};
							["Right Arm"]: Pose & {
								MainPart: Pose & {
									Ease: Folder & {
										Params: Folder & {
											Direction: StringValue;
										};
										Type: StringValue;
									};
								};
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
							["Left Arm"]: Pose & {
								Ease: Folder & {
									Params: Folder & {
										Direction: StringValue;
									};
									Type: StringValue;
								};
							};
						};
					};
				};
			};
		};
		["Body Colors"]: BodyColors;
		Animate: LocalScript & {
			idle: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			jump: StringValue & {
				JumpAnim: Animation;
			};
			sit: StringValue & {
				SitAnim: Animation;
			};
			run: StringValue & {
				RunAnim: Animation;
			};
			toolnone: StringValue & {
				ToolNoneAnim: Animation;
			};
			ScaleDampeningPercent: NumberValue;
			PlayEmote: BindableFunction;
			fall: StringValue & {
				FallAnim: Animation;
			};
			climb: StringValue & {
				ClimbAnim: Animation;
			};
			walk: StringValue & {
				WalkAnim: Animation;
			};
		};
	};
	["cat breakdancing meme"]: Model & {
		["Left Leg"]: Part;
		Humanoid: Humanoid & {
			Animator: Animator;
		};
		["Right Leg"]: Part;
		Head: Part & {
			Mesh: SpecialMesh;
			["Face W, R"]: Decal;
		};
		Torso: Part & {
			["Left Shoulder"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			Neck: Motor6D;
			["Right Hip"]: Motor6D;
			["Left Hip"]: Motor6D;
		};
		HumanoidRootPart: Part & {
			["Root Hip"]: Motor6D;
		};
		["Right Arm"]: Part;
		["Left Arm"]: Part;
		AnimSaves: Model & {
			main_breakdance: KeyframeSequence;
			solo_kickdance: KeyframeSequence;
			solo_breakdance: KeyframeSequence;
			["Automatic Save"]: KeyframeSequence;
		};
	};
	KrissVector: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			roblox: Decal;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			HandleJoint: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		AnimSaves: ObjectValue;
		KrissVector: Tool & {
			Trigger: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			MainPart: MeshPart & {
				Stock: Motor6D;
				EmptyRoundThing: Motor6D;
				SurfaceAppearance: SurfaceAppearance;
				Mag: Motor6D;
				Charging: Motor6D;
				Trigger: Motor6D;
			};
			Stock: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			EmptyRoundThing: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Mag: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Charging: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
				ChargingHandle: Motor6D;
			};
			ChargingHandle: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
		};
		["Body Colors"]: BodyColors;
	};
	SpawnLocation: SpawnLocation & {
		Decal: Decal;
	};
	World: Folder & {
		Skybox: Folder;
		Trees: Folder;
		Buildings: Folder;
		Spawns: Folder;
		CaveParts: Folder;
		Bodies: Folder;
		CaveBounds: Folder;
		Bounds: Folder;
	};
}
