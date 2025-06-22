interface ReplicatedStorage extends Instance {
	Stats: Folder & {
		Energy: Frame & {
			UICorner: UICorner;
			UIStroke: UIStroke;
			UIAspectRatioConstraint: UIAspectRatioConstraint;
			Fill: Frame & {
				UICorner: UICorner;
				UIGradient: UIGradient;
			};
		};
		Health: Frame & {
			UICorner: UICorner;
			UIStroke: UIStroke;
			UIAspectRatioConstraint: UIAspectRatioConstraint;
			Fill: Frame & {
				UICorner: UICorner;
				UIGradient: UIGradient;
			};
		};
	};
	TS: Folder & {
		angles: ModuleScript;
	};
	Animations: Folder & {
		Fireaxe: Folder & {
			Swing: Animation;
			Idle: Animation;
			StrongSwing: Animation;
		};
		FlareGun: Folder & {
			Idle: Animation;
		};
	};
	Utilities: Folder & {
		Util: ModuleScript;
		VectorUtil: ModuleScript;
	};
	Packages: Folder & {
		Ragdoll: ModuleScript;
		HaltonSequencer: ModuleScript;
		Packet: ModuleScript & {
			Task: ModuleScript;
			Types: ModuleScript & {
				NumberF24: ModuleScript;
				Boolean1: ModuleScript;
				Vector3S16: ModuleScript;
				NumberU8: ModuleScript;
				NumberU16: ModuleScript;
				UDim2: ModuleScript;
				Vector3F32: ModuleScript;
				Boolean8: ModuleScript;
				Buffer: ModuleScript;
				NumberS8: ModuleScript;
				NumberU32: ModuleScript;
				NumberF64: ModuleScript;
				Color3: ModuleScript;
				Region3: ModuleScript;
				NumberU24: ModuleScript;
				NumberF32: ModuleScript;
				Vector3F24: ModuleScript;
				CFrameF32U8: ModuleScript;
				Nil: ModuleScript;
				Vector2S16: ModuleScript;
				Vector2F32: ModuleScript;
				Characters: ModuleScript;
				NumberS16: ModuleScript;
				Any: ModuleScript;
				UDim: ModuleScript;
				NumberRange: ModuleScript;
				String: ModuleScript;
				Vector2F24: ModuleScript;
				Static: ModuleScript;
				Instance: ModuleScript;
				EnumItem: ModuleScript;
				ColorSequence: ModuleScript;
				NumberF16: ModuleScript;
				NumberS24: ModuleScript;
				Rect: ModuleScript;
				BrickColor: ModuleScript;
				CFrameF32U16: ModuleScript;
				CFrameF24U8: ModuleScript;
				NumberS32: ModuleScript;
				NumberU4: ModuleScript;
				NumberSequence: ModuleScript;
			};
			Cursor: ModuleScript;
			Signal: ModuleScript;
		};
		SimplePath: ModuleScript;
		FootstepModule: ModuleScript & {
			FootstepSounds: Folder & {
				Wood: Folder & {
					wood_08: Sound;
					wood_13: Sound;
					wood_14: Sound;
					wood_15: Sound;
					wood_06: Sound;
					wood_03: Sound;
					wood_05: Sound;
					wood_11: Sound;
					wood_10: Sound;
					wood_09: Sound;
					wood_04: Sound;
					wood_02: Sound;
					wood_07: Sound;
					wood_12: Sound;
					wood_01: Sound;
				};
				Glass: Folder & {
					glass_07: Sound;
					glass_02: Sound;
					glass_04: Sound;
					glass_06: Sound;
					glass_08: Sound;
					glass_01: Sound;
					glass_05: Sound;
					glass_03: Sound;
				};
				Gravel: Folder & {
					gravel_08: Sound;
					gravel_04: Sound;
					gravel_06: Sound;
					gravel_03: Sound;
					gravel_10: Sound;
					gravel_09: Sound;
					gravel_05: Sound;
					gravel_02: Sound;
					gravel_01: Sound;
					gravel_07: Sound;
				};
				Bass: Folder & {
					bass_05: Sound;
					bass_04: Sound;
					bass_09: Sound;
					bass_06: Sound;
					bass_01: Sound;
					bass_03: Sound;
					bass_10: Sound;
					bass_08: Sound;
					bass_07: Sound;
					bass_02: Sound;
				};
				Metal_Solid: Folder & {
					metal_solid_10: Sound;
					metal_solid_04: Sound;
					metal_solid_08: Sound;
					metal_solid_16: Sound;
					metal_solid_15: Sound;
					metal_solid_09: Sound;
					metal_solid_05: Sound;
					metal_solid_13: Sound;
					metal_solid_06: Sound;
					metal_solid_14: Sound;
					metal_solid_12: Sound;
					metal_solid_01: Sound;
					metal_solid_11: Sound;
					metal_solid_03: Sound;
					metal_solid_02: Sound;
					metal_solid_07: Sound;
				};
				Carpet: Folder & {
					carpet_13: Sound;
					carpet_12: Sound;
					carpet_06: Sound;
					carpet_04: Sound;
					carpet_01: Sound;
					carpet_05: Sound;
					carpet_11: Sound;
					carpet_10: Sound;
					carpet_09: Sound;
					carpet_02: Sound;
					carpet_07: Sound;
					carpet_08: Sound;
					carpet_14: Sound;
					carpet_03: Sound;
				};
				Metal_Auto: Folder & {
					metal_auto_04: Sound;
					metal_auto_06: Sound;
					metal_auto_02: Sound;
					metal_auto_05: Sound;
					metal_auto_03: Sound;
					metal_auto_01: Sound;
				};
				Metal_Chainlink: Folder & {
					metal_chainlink_03: Sound;
					metal_chainlink_01: Sound;
					metal_chainlink_06: Sound;
					metal_chainlink_07: Sound;
					metal_chainlink_04: Sound;
					metal_chainlink_05: Sound;
					metal_chainlink_08: Sound;
					metal_chainlink_02: Sound;
				};
				Snow: Folder & {
					snow_02: Sound;
					snow_04: Sound;
					snow_06: Sound;
					snow_12: Sound;
					snow_11: Sound;
					snow_07: Sound;
					snow_09: Sound;
					snow_08: Sound;
					snow_05: Sound;
					snow_03: Sound;
					snow_10: Sound;
					snow_01: Sound;
				};
				Metal_Grate: Folder & {
					metal_grate_10: Sound;
					metal_grate_09: Sound;
					metal_grate_04: Sound;
					metal_grate_07: Sound;
					metal_grate_12: Sound;
					metal_grate_03: Sound;
					metal_grate_05: Sound;
					metal_grate_01: Sound;
					metal_grate_02: Sound;
					metal_grate_13: Sound;
					metal_grate_11: Sound;
					metal_grate_06: Sound;
					metal_grate_08: Sound;
					metal_grate_14: Sound;
				};
				Ladder: Folder & {
					ladder_01: Sound;
					ladder_09: Sound;
					ladder_10: Sound;
					ladder_05: Sound;
					ladder_02: Sound;
					ladder_07: Sound;
					ladder_12: Sound;
					ladder_03: Sound;
					ladder_11: Sound;
					ladder_08: Sound;
					ladder_06: Sound;
					ladder_04: Sound;
				};
				Mud: Folder & {
					mud_06: Sound;
					mud_07: Sound;
					mud_04: Sound;
					mud_01: Sound;
					mud_08: Sound;
					mud_02: Sound;
					mud_05: Sound;
					mud_03: Sound;
					mud_09: Sound;
				};
				Rubber: Folder & {
					rubber_07: Sound;
					rubber_01: Sound;
					rubber_03: Sound;
					rubber_05: Sound;
					rubber_08: Sound;
					rubber_06: Sound;
					rubber_04: Sound;
					rubber_02: Sound;
				};
				Dirt: Folder & {
					dirt_11: Sound;
					dirt_04: Sound;
					dirt_05: Sound;
					dirt_01: Sound;
					dirt_13: Sound;
					dirt_08: Sound;
					dirt_14: Sound;
					dirt_12: Sound;
					dirt_06: Sound;
					dirt_02: Sound;
					dirt_09: Sound;
					dirt_10: Sound;
					dirt_03: Sound;
					dirt_07: Sound;
				};
				Sand: Folder & {
					sand_04: Sound;
					sand_06: Sound;
					sand_03: Sound;
					sand_02: Sound;
					sand_07: Sound;
					sand_11: Sound;
					sand_01: Sound;
					sand_12: Sound;
					sand_10: Sound;
					sand_05: Sound;
					sand_09: Sound;
					sand_08: Sound;
				};
				Concrete: Folder & {
					concrete_16: Sound;
					concrete_17: Sound;
					concrete_04: Sound;
					concrete_02: Sound;
					concrete_06: Sound;
					concrete_15: Sound;
					concrete_12: Sound;
					concrete_01: Sound;
					concrete_09: Sound;
					concrete_08: Sound;
					concrete_11: Sound;
					concrete_03: Sound;
					concrete_10: Sound;
					concrete_05: Sound;
					concrete_07: Sound;
					concrete_14: Sound;
					concrete_13: Sound;
				};
				Grass: Folder & {
					grass_03: Sound;
					grass_04: Sound;
					grass_10: Sound;
					grass_07: Sound;
					grass_11: Sound;
					grass_13: Sound;
					grass_06: Sound;
					grass_12: Sound;
					grass_09: Sound;
					grass_02: Sound;
					grass_05: Sound;
					grass_01: Sound;
					grass_08: Sound;
				};
				Slosh: Folder & {
					slosh_06: Sound;
					slosh_04: Sound;
					slosh_01: Sound;
					slosh_03: Sound;
					slosh_02: Sound;
					slosh_05: Sound;
				};
				Tile: Folder & {
					tile_07: Sound;
					tile_05: Sound;
					tile_02: Sound;
					tile_06: Sound;
					tile_14: Sound;
					tile_13: Sound;
					tile_04: Sound;
					tile_09: Sound;
					tile_03: Sound;
					tile_08: Sound;
					tile_01: Sound;
					tile_10: Sound;
					tile_12: Sound;
					tile_11: Sound;
				};
			};
		};
		LegController: ModuleScript & {
			Dependencies: Folder & {
				InverseKinematics: ModuleScript;
				Trove: ModuleScript;
			};
		};
		Sweeper: ModuleScript;
		MergeTables: ModuleScript;
		Signal: ModuleScript & {
			["jest.config"]: ModuleScript;
			PackageLink: PackageLink;
			createSignal: ModuleScript;
			types: ModuleScript;
			createReadableSignal: ModuleScript;
			__tests__: Folder & {
				["createReadableSignal.spec"]: ModuleScript;
				["createSignal.spec"]: ModuleScript;
			};
		};
		ClientCast: ModuleScript & {
			ClientHandler: LocalScript;
			Signal: ModuleScript;
			ClientConnection: ModuleScript;
		};
		PoissonDiscSampling: ModuleScript;
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				maid: Folder & {
					Maid: ModuleScript;
				};
				services: ModuleScript;
				["compiler-types"]: Folder & {
					types: Folder;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
			};
		};
	};
	PlayerAnimations: Folder & {
		idle: Animation;
		climb: Animation;
		jump: Animation;
		fall: Animation;
		run: Animation;
		walk: Animation;
	};
	Viewmodel: Model & {
		Torso: Part;
		Head: Part & {
			Torso: Weld;
		};
	};
	Assets: Folder & {
		Collider: Model & {
			Body: Part & {
				LadderSensor: ControllerPartSensor;
				GroundSensor: ControllerPartSensor;
			};
		};
		ControllerManager: ControllerManager & {
			GroundController: GroundController;
			ClimbController: ClimbController;
			AirController: AirController;
		};
	};
	Framework: Folder & {
		Classes: Folder & {
			PlayerServerMovement: ModuleScript;
		};
		Config: ModuleScript;
		Animations: ModuleScript;
		Packets: ModuleScript;
		ServerModules: Folder & {
			PlayerMovementModule: ModuleScript;
			WorldModule: ModuleScript;
		};
		ClientModules: Folder & {
			AnimationModule: ModuleScript;
			CharacterControllerModule: ModuleScript;
			CameraModule: ModuleScript;
		};
		Types: ModuleScript;
	};
	SurvivorSense: MeshPart;
	ZFramework: Folder & {
		Module: ModuleScript;
		Common: ModuleScript;
		Engine: ModuleScript;
		Classes: Folder & {
			Example: ModuleScript;
			Object: ModuleScript;
			Example2: ModuleScript;
		};
		PackageLink: PackageLink;
		HOWTOUSE: Script;
		HOWTOINSTALL: Script;
		Client: Folder & {
			ExampleModule: ModuleScript;
			HelloModule: ModuleScript;
		};
		Types: ModuleScript;
		Server: Folder;
	};
	Tools: Folder & {
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
			MainClient: LocalScript;
		};
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
		Fireaxe: Tool & {
			Hitbox: RemoteEvent;
			MainClient: LocalScript;
			MainPart: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			MainServer: Script;
		};
	};
	CircularProgress: ScreenGui & {
		Progress: Frame & {
			Frame1: Frame & {
				ImageLabel: ImageLabel & {
					UIGradient: UIGradient;
				};
			};
			Frame2: Frame & {
				ImageLabel: ImageLabel & {
					UIGradient: UIGradient;
				};
			};
			Percentage: NumberValue & {
				ProgressScript: LocalScript & {
					ColorOfPercentPart: Color3Value;
					ImageTrans: NumberValue;
					ImageId: StringValue;
					ColorOfMissingPart: Color3Value;
					ImageColor: Color3Value;
					TransOfPercentPart: NumberValue;
					FlipProgress: BoolValue;
					MissingPartType: StringValue;
					TransOfMissingPart: NumberValue;
				};
			};
		};
	};
}
