interface ServerStorage extends Instance {
	Trader: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
		};
		["Right Leg"]: Part & {
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
		BrownFloofHair: Accessory & {
			Handle: Part & {
				HairAttachment: Attachment;
				TouchInterest: TouchTransmitter;
				Mesh: SpecialMesh;
				AccessoryWeld: Weld;
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
			ProximityPrompt: ProximityPrompt;
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Accessory (Rucksack Backpack)"]: Accessory & {
			Handle: Part & {
				BodyBackAttachment: Attachment;
				TouchInterest: TouchTransmitter;
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Body Colors"]: BodyColors;
		Hood: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				TouchInterest: TouchTransmitter;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		Pants: Pants;
		["Black Cascade MaskAccessory"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				TouchInterest: TouchTransmitter;
				AccessoryWeld: Weld;
				FaceCenterAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		Shirt: Shirt;
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
	Assets: Folder & {
		OldTrees: Folder & {
			Tree3: MeshPart;
			Tree1: MeshPart;
			Tree2: MeshPart;
			Tree4: MeshPart;
		};
		Trees: Folder & {
			Tree1: Model & {
				Base: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
				Leaves: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
			};
			Tree2: Model & {
				Base: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
			};
			FallenTree1: Model & {
				FallenTree: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
			};
		};
		Foliage: Folder;
		RakeDummy: Model & {
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
			AnimSaves: Model & {
				Idle: KeyframeSequence & {
					RakeDummyAnimationRigData: AnimationRigData;
				};
				Runnin: KeyframeSequence & {
					RakeDummyAnimationRigData: AnimationRigData;
				};
				Attack1: KeyframeSequence;
				Walk: KeyframeSequence & {
					RakeDummyAnimationRigData: AnimationRigData;
				};
				Attack2: KeyframeSequence;
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
				Sphere13: WeldConstraint;
				Sphere9: WeldConstraint;
				Neck: Motor6D;
				Head5: WeldConstraint;
				Mesh: MeshPart & {
					["Blood Splatter"]: Decal;
					["Blood Handprint"]: Decal;
					["Blood Splatter - Transparent"]: Decal;
				};
				Sphere11: WeldConstraint;
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
		Mine: Model & {
			Main: Script;
			InitialPoses: Folder & {
				leg3b_Initial: CFrameValue;
				leg2a_Original: CFrameValue;
				body_Original: CFrameValue;
				leg2b_Original: CFrameValue;
				leg1b_Composited: CFrameValue;
				leg3a_Original: CFrameValue;
				["combine_mine01.qc_skeleton_Initial"]: CFrameValue;
				leg1b_Initial: CFrameValue;
				leg3b_Composited: CFrameValue;
				combine_mine01_reference_Original: CFrameValue;
				body_Composited: CFrameValue;
				combine_mine01_reference_Composited: CFrameValue;
				leg3a_Initial: CFrameValue;
				leg2a_Initial: CFrameValue;
				leg2b_Initial: CFrameValue;
				leg1a_Composited: CFrameValue;
				body_Initial: CFrameValue;
				leg3b_Original: CFrameValue;
				combine_mine01_reference_Initial: CFrameValue;
				leg1b_Original: CFrameValue;
				leg2a_Composited: CFrameValue;
				leg3a_Composited: CFrameValue;
				["combine_mine01.qc_skeleton_Composited"]: CFrameValue;
				["combine_mine01.qc_skeleton_Original"]: CFrameValue;
				leg1a_Initial: CFrameValue;
				leg1a_Original: CFrameValue;
				leg2b_Composited: CFrameValue;
			};
			Mine: MeshPart & {
				body: Bone & {
					leg3a: Bone & {
						leg3b: Bone;
					};
					leg1a: Bone & {
						leg1b: Bone;
					};
					leg2a: Bone & {
						leg2b: Bone;
					};
				};
			};
		};
		Rig: Model & {
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
		Mountains: Folder & {
			MountainVar2: Model & {
				MountainVar2: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
			};
			MountainVar1: Model & {
				MountainVar1: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
			};
		};
		Buildings: Folder & {
			WatchTower: Model & {
				["Plastic Crate"]: MeshPart;
				["Bucket Tools"]: MeshPart;
				["Extrasmall Crate"]: MeshPart;
				["Take-Out"]: MeshPart;
				Base: Model & {
					Base: Part;
					Base2: Part;
				};
				Light: Model & {
					Lamp: Part & {
						ASD1: ParticleEmitter;
						PointLight: PointLight;
						Mesh: SpecialMesh;
						ASD2: ParticleEmitter;
					};
					MeshPart: MeshPart & {
						PointLight: PointLight;
					};
				};
				["Concrete Bags 3"]: Model & {
					Pallet: MeshPart;
					["Concrete Bags"]: MeshPart;
				};
				Phone: MeshPart;
				PlasticCrate_Red: Model;
				Railings: Model;
				["Drawer 1"]: MeshPart;
				Radio: MeshPart;
				["Glass Bottle 1"]: MeshPart;
				["Construction Plywood Stack"]: MeshPart;
				Truss: Part & {
					A: Attachment;
					PathfindingLink: PathfindingLink;
					B: Attachment;
				};
				["Leaning Plywood"]: MeshPart;
				Bed: MeshPart;
				Colliders: Model & {
					Part: Part;
				};
			};
			Cabin: Model & {
				Door: Model & {
					Main: Script;
					OpenPosition: Part;
					ClosePosition: Part;
					DoorModel: Model & {
						MainPart: UnionOperation & {
							Union1: WeldConstraint;
							Part6: WeldConstraint;
							Part8: WeldConstraint;
							Part10: WeldConstraint;
							Union3: WeldConstraint;
							Union5: WeldConstraint;
							Part11: WeldConstraint;
							Union4: WeldConstraint;
							Part7: WeldConstraint;
							Part12: WeldConstraint;
							Union2: WeldConstraint;
							Part9: WeldConstraint;
						};
					};
					ActivationPart: Part;
				};
				Model: Model;
			};
			Tower: Model & {
				CeilingLight: Model & {
					Light1: Part & {
						Mesh: BlockMesh;
					};
					Base: Part & {
						PointLight: PointLight;
					};
					Light2: Part & {
						Mesh: BlockMesh;
					};
				};
				LightSwitch: Model & {
					Part: Part & {
						OnSound: Sound;
						OffSound: Sound;
					};
					Button: Part & {
						ProximityPrompt: ProximityPrompt;
					};
				};
				Floor: Part;
				ShoeRack: Model;
				MeshPart: MeshPart;
				LightSwitchScript: Script;
				Table: Model;
				Chair: Model;
				Microwave: MeshPart;
				Desk: Model;
				Trashbin: MeshPart;
				Papers: Part & {
					Mesh: SpecialMesh;
				};
				Couch: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
				DeskLamp: Model & {
					Union: UnionOperation;
					Bulb: Part & {
						Mesh: SpecialMesh;
						SpotLight: SpotLight;
					};
					Element: Part & {
						Mesh: SpecialMesh;
						SpotLight: SpotLight;
					};
				};
			};
		};
		CSProtocols: Folder;
		["Forest Pack Optimized"]: Folder & {
			Sounds: Folder & {
				ForestAmbienceVar2: Sound;
				ForestAmbienceVar1: Sound;
			};
			Misc: Folder & {
				CumulusFieldSkybox: Sky;
				PlainSky: Sky;
			};
			Game_Name: Folder & {
				["Sounds/Scripts"]: Folder & {
					Sounds: Folder & {
						Nature: Folder & {
							Misc: Folder;
							Waterfall: Folder;
							Ambient: Folder;
							Animals: Folder;
						};
						Weather: Folder & {
							Rain: Folder;
							Thunder: Folder;
							Misc: Folder;
						};
					};
					Scripts: Folder;
				};
				["Meshes/Parts/Unions"]: Folder & {
					StaticMeshes: Folder & {
						ArtificialConstruction: Folder & {
							Sidewalks: Folder & {
								Block: Folder;
								Edge: Folder;
								Corner: Folder;
							};
							Decoration: Folder & {
								Decals: Folder & {
									StreetWear: Folder;
									Misc: Folder;
									Manholes: Folder;
									Crosswalks: Folder;
								};
								Misc: Folder;
							};
							Buildings: Folder & {
								House: Folder;
								Resteraunt: Folder;
								Appartment: Folder;
								OfficeBuilding: Folder;
							};
							Roads: Folder & {
								Straight: Folder;
								Turns: Folder;
								Intersection: Folder;
							};
						};
						Terrain: Folder & {
							Icebergs: Folder & {
								SmallIcebergs: Folder;
								MediumIcebergs: Folder & {
									MediumIcebergVar1: Model & {
										["Medium Moss Boulder 01"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
								LargeIcebergs: Folder;
							};
							Misc: Folder & {
								SnowPiles: Folder & {
									SnowPile: Model & {
										SnowPile: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
							};
							Mountains: Folder;
							Boulders: Folder & {
								MediumBoulders: Folder & {
									MediumMossBoulderVar0: Model & {
										["Medium Moss Boulder 01"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									MediumMossBoulderSnowyVar0: Model & {
										["Medium Moss Boulder 01"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
								SmallBoulders: Folder;
								LargeBoulders: Folder & {
									LargeBoulderVar0: Model & {
										LargeBoulder01: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									LargeBoulderVar1: Model & {
										LargeBoulder01: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									LargeBoulderVar2: Model & {
										["Meshes/Medium Boulder 01"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
							};
							Rocks: Folder & {
								RockGroups: Folder & {
									RockGroupVar0: Model & {
										SmallRockGrp02: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									RockGroupVar1: Model & {
										SmallRockGrp03: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
								SingleRocks: Folder & {
									RockVar1: Model & {
										["Small Rock 01"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									RockVar0: Model & {
										Rock01: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
							};
						};
						Vegitation: Folder & {
							Trees: Folder & {
								DogWoodTrees: Folder & {
									Alive: Folder & {
										DogWoodTreeVar0: Model & {
											["Meshes/Dogwood Trees 01_Leaf"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder & {
										DeadDogWoodTreeVar0: Model & {
											["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
								MapleLeafTrees: Folder & {
									Alive: Folder & {
										MapleLeafTreeVar0: Model & {
											OuterLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder & {
										DeadMapleLeafTreeVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
								BroadLeafTrees: Folder & {
									Alive: Folder & {
										BroadLeafTreeVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Leaf: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder & {
										DeadBroadLeafTreeVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
								PalmTrees: Folder & {
									Alive: Folder & {
										PalmtreeVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										PalmtreeVar1: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder;
								};
								BeechwoodTrees: Folder & {
									Alive: Folder & {
										BeechwoodSapplingVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Leaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										BeechwoodTreeVar1: Model & {
											Leaf: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										BeechwoodTreeVar2: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Leaf: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										BeechwoodTreeVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Leaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										BeechwoodTreeVar3: Model & {
											Leaf: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder & {
										DeadBeechwoodTreeVar5: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadBeechwoodTreeVar1: Model & {
											Soil: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadBeechwoodSapplingVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadBeechwoodTreeVar2: Model & {
											Soil: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadBeechwoodTreeVar4: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadBeechwoodTreeVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadBeechwoodTreeVar3: Model & {
											Soil: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
								JapanWoodTrees: Folder & {
									Alive: Folder & {
										JapanwoodTreeVar1: Model & {
											["Meshes/Dogwood Trees 01_Leaf"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										JapanwoodTreeVar0: Model & {
											["Meshes/Dogwood Trees 01_Leaf"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder & {
										DeadJapanwoodTreeVar1: Model & {
											["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadJapanwoodTreeVar0: Model & {
											["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
								PinewoodTrees: Folder & {
									Alive: Folder & {
										PineTreeVar0: Model & {
											OuterLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											DogwoodTree_Var01: Model & {
												["Meshes/Dogwood Trees 01_Leaf"]: MeshPart & {
													SurfaceAppearance: SurfaceAppearance;
												};
												["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
													SurfaceAppearance: SurfaceAppearance;
												};
											};
											Soil: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder;
								};
								OakwoodTrees: Folder & {
									Alive: Folder;
									Dead: Folder;
								};
								RedwoodTrees: Folder & {
									Alive: Folder & {
										RedwoodTreeVar1: Model & {
											InnerLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											OuterLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										RedwoodTreeVar2: Model & {
											OuterLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
												Weld: Weld;
											};
											DogwoodTree_Var01: Model & {
												["Meshes/Dogwood Trees 01_Leaf"]: MeshPart & {
													SurfaceAppearance: SurfaceAppearance;
												};
												["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
													SurfaceAppearance: SurfaceAppearance;
												};
											};
											Soil: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										RedwoodTreeVar0: Model & {
											Soil: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											OuterLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder & {
										DeadRedwoodTreeVar1: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadRedwoodTreeVar2: Model & {
											Soil: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
												Weld: Weld;
											};
											DogwoodTree_Var01: Model & {
												["Meshes/Dogwood Trees 01_Trunk"]: MeshPart & {
													SurfaceAppearance: SurfaceAppearance;
												};
											};
										};
										DeadRedwoodTreeSnowyVar0: Model & {
											Anchor: Part;
											Redwood_Trees_Snowy01_Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
							};
							Misc: Folder;
							Clovers: Folder & {
								CloverPatches: Folder & {
									CloverPatchVar2: Model & {
										["Clover Patch"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									CloverPatchVar1: Model & {
										["Clover Patch"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									CloverPatchVar0: Model & {
										["Clover Patch"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									CloverPatchVar3: Model & {
										["Clover Patch"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
								SingleClovers: Folder;
							};
							Flowers: Folder & {
								WildFlowers: Folder & {
									WildFlowerVar1: Model & {
										Flower: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									WildFlowerVar2: Model & {
										Flower: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									WildFlowerVar0: Model & {
										Flower: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									WildFlowerVar3: Model & {
										Flower: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
								FlowerBushes: Folder & {
									FlowerBushVar0: Model & {
										Leaves: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
										Trunk: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									FlowerBushVar1: Model & {
										Leaf: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
										Trunk: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
							};
							Debris: Folder & {
								Misc: Folder;
								TreeStumps: Folder & {
									TreeStumpVar0: Model & {
										Stump: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
								["Sticks/Branches"]: Folder & {
									Sticks: Folder & {
										StickVar2: Model & {
											Stick03: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										StickVar4: Model & {
											Stick05: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										StickVar5: Model & {
											Stick06: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										StickVar3: Model & {
											Stick04: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										StickVar0: Model & {
											Stick01: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Branches: Folder & {
										BranchVar0: Model & {
											Branch: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
								FallenTrees: Folder & {
									FallenTreeVar0: Model & {
										FallenTree: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
									FallenTreeVar1: Model & {
										FallenTree: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
								LeafPatches: Folder & {
									DenseLeafPatchVar0: Model & {
										["Dense Leaf patch"]: MeshPart & {
											SurfaceAppearance: SurfaceAppearance;
										};
									};
								};
							};
							["Bushes/Shrubs"]: Folder & {
								Bushes: Folder & {
									Alive: Folder & {
										BushVar1: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Leaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										BushVar0: Model & {
											Trunk: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
											Leaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder;
								};
								Ferns: Folder & {
									Alive: Folder & {
										FernVar0: Model & {
											Fern_OuterLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										FernVar2: Model & {
											Leaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										FernVar1: Model & {
											FernLeavesOuter: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
									Dead: Folder & {
										DeadFernVar0: Model & {
											Fern_OuterLeaves: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
										DeadFernVar1: Model & {
											FernLeavesOuter: MeshPart & {
												SurfaceAppearance: SurfaceAppearance;
											};
										};
									};
								};
							};
						};
					};
					ParticleMeshes: Folder & {
						Beams: Folder & {
							RiverFlowVar1: Model & {
								WaterFoam: Beam;
								FoamStart: Part & {
									FoamStart: Attachment;
								};
								FoamStop: Part & {
									FoamStop: Attachment;
								};
							};
						};
						Misc: Folder;
						Trails: Folder;
						Particles: Folder & {
							["ParticleEffect-LeavesFalling01"]: Model & {
								["ParticlFX-BeechwoodLeaves"]: Part & {
									ParticleEmitter: ParticleEmitter;
								};
							};
							FireParticleVar0: Model & {
								Flurries: Part & {
									Aight: ParticleEmitter;
									RF: ParticleEmitter;
								};
								FirePart: Part & {
									Fire2: ParticleEmitter;
									Attachment2: Attachment;
									Fire1: ParticleEmitter;
									Attachment: Attachment & {
										Smoke: ParticleEmitter;
									};
									["Fire crackling"]: Sound;
								};
								FirePart2: Part & {
									Fire1: ParticleEmitter;
									Fire2: ParticleEmitter;
								};
							};
							WaterSplashVar0: Model & {
								RockSplash: Part & {
									Mist: ParticleEmitter;
									MainSplash: ParticleEmitter;
								};
							};
						};
						Billboards: Folder & {
							VolumetricLightVar0: Model & {
								VolumetricLight: Part & {
									LightBillboard: BillboardGui & {
										VLImage: ImageLabel;
									};
								};
							};
						};
					};
					MotionMeshes: Folder & {
						TweenedMeshes: Folder & {
							Misc: Folder;
						};
						["Animals/Insects"]: Folder & {
							Hawks: Folder & {
								Idle: Folder;
								FlightPath2: Folder & {
									Hawk_FlightPath02: Model & {
										GEO_RedtailHawk_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													RightArm1_LoResClavical: Bone & {
														RightArm1_LoResUpperArm: Bone & {
															RightArm1_LoResLowerArm: Bone & {
																RightArm1_LoResHand: Bone;
															};
														};
													};
													RightLeg1_LoResUpperLeg: Bone & {
														RightLeg1_LoResLowerLeg: Bone & {
															RightLeg1_LoResFoot: Bone;
														};
													};
													Neck: Bone & {
														Head: Bone;
													};
													Tail: Bone;
													LeftArm1_LoResClavical: Bone & {
														LeftArm1_LoResUpperArm: Bone & {
															LeftArm1_LoResLowerArm: Bone & {
																LeftArm1_LoResHand: Bone;
															};
														};
													};
													LeftLeg1_LoResUpperLeg: Bone & {
														LeftLeg1_LoResLowerLeg: Bone & {
															LeftLeg1_LoResFoot: Bone;
														};
													};
												};
											};
											SurfaceAppearance: SurfaceAppearance;
										};
										InitialPoses: Folder & {
											GEO_RedtailHawk_01_Composited: CFrameValue;
											LeftLeg1_LoResToe_end_Composited: CFrameValue;
											Tail_Composited: CFrameValue;
											RightLeg1_LoResUpperLeg_Composited: CFrameValue;
											RightLeg1_LoResLowerLeg_Composited: CFrameValue;
											RightLeg1_LoResToe_end_Initial: CFrameValue;
											LeftLeg1_LoResToe_Composited: CFrameValue;
											LeftArm1_LoResClavical_Initial: CFrameValue;
											LeftLeg1_LoResFoot_Composited: CFrameValue;
											Neck_Initial: CFrameValue;
											RightArm1_LoResUpperArm_Composited: CFrameValue;
											RightLeg1_LoResUpperLeg_Original: CFrameValue;
											RightLeg1_LoResFoot_Original: CFrameValue;
											LeftLeg1_LoResToe_end_Initial: CFrameValue;
											Head_Initial: CFrameValue;
											LeftLeg1_LoResUpperLeg_Original: CFrameValue;
											LeftArm1_LoResClavical_Original: CFrameValue;
											LeftLeg1_LoResLowerLeg_Original: CFrameValue;
											RightLeg1_LoResToe_end_Original: CFrameValue;
											RightLeg1_LoResToe_Initial: CFrameValue;
											LeftArm1_LoResHand_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											Head_Composited: CFrameValue;
											Body_Initial: CFrameValue;
											LeftArm1_LoResLowerArm_Initial: CFrameValue;
											LeftLeg1_LoResUpperLeg_Composited: CFrameValue;
											LeftLeg1_LoResFoot_Original: CFrameValue;
											LeftArm1_LoResClavical_Composited: CFrameValue;
											RightLeg1_LoResToe_end_Composited: CFrameValue;
											Root_Original: CFrameValue;
											RightArm1_LoResClavical_Original: CFrameValue;
											LeftLeg1_LoResLowerLeg_Initial: CFrameValue;
											LeftLeg1_LoResToe_Original: CFrameValue;
											Body_Original: CFrameValue;
											RightArm1_LoResUpperArm_Original: CFrameValue;
											LeftLeg1_LoResLowerLeg_Composited: CFrameValue;
											LeftLeg1_LoResFoot_Initial: CFrameValue;
											RightArm1_LoResUpperArm_Initial: CFrameValue;
											RightArm1_LoResClavical_Initial: CFrameValue;
											Body_Composited: CFrameValue;
											RightArm1_LoResHand_Initial: CFrameValue;
											Tail_Initial: CFrameValue;
											LeftArm1_LoResHand_Composited: CFrameValue;
											RightArm1_LoResLowerArm_Original: CFrameValue;
											LeftLeg1_LoResToe_end_Original: CFrameValue;
											LeftLeg1_LoResUpperLeg_Initial: CFrameValue;
											RightLeg1_LoResUpperLeg_Initial: CFrameValue;
											LeftArm1_LoResUpperArm_Initial: CFrameValue;
											Tail_Original: CFrameValue;
											Head_Original: CFrameValue;
											Neck_Original: CFrameValue;
											LeftArm1_LoResLowerArm_Original: CFrameValue;
											RightLeg1_LoResLowerLeg_Initial: CFrameValue;
											RightLeg1_LoResFoot_Initial: CFrameValue;
											RightArm1_LoResLowerArm_Initial: CFrameValue;
											GEO_RedtailHawk_01_Initial: CFrameValue;
											RightLeg1_LoResToe_Original: CFrameValue;
											LeftArm1_LoResUpperArm_Composited: CFrameValue;
											LeftArm1_LoResLowerArm_Composited: CFrameValue;
											LeftArm1_LoResUpperArm_Original: CFrameValue;
											RightLeg1_LoResToe_Composited: CFrameValue;
											RightArm1_LoResHand_Composited: CFrameValue;
											GEO_RedtailHawk_01_Original: CFrameValue;
											RightArm1_LoResLowerArm_Composited: CFrameValue;
											RightLeg1_LoResFoot_Composited: CFrameValue;
											RightLeg1_LoResLowerLeg_Original: CFrameValue;
											Neck_Composited: CFrameValue;
											RightArm1_LoResClavical_Composited: CFrameValue;
											LeftArm1_LoResHand_Original: CFrameValue;
											Root_Composited: CFrameValue;
											RightArm1_LoResHand_Original: CFrameValue;
											LeftLeg1_LoResToe_Initial: CFrameValue;
										};
										AnimationController: AnimationController & {
											Animator: Animator;
										};
									};
								};
								FlightPath1: Folder & {
									Hawk_FlightPath01: Model & {
										GEO_RedtailHawk_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													RightArm1_LoResClavical: Bone & {
														RightArm1_LoResUpperArm: Bone & {
															RightArm1_LoResLowerArm: Bone & {
																RightArm1_LoResHand: Bone;
															};
														};
													};
													RightLeg1_LoResUpperLeg: Bone & {
														RightLeg1_LoResLowerLeg: Bone & {
															RightLeg1_LoResFoot: Bone;
														};
													};
													Neck: Bone & {
														Head: Bone;
													};
													Tail: Bone;
													LeftArm1_LoResClavical: Bone & {
														LeftArm1_LoResUpperArm: Bone & {
															LeftArm1_LoResLowerArm: Bone & {
																LeftArm1_LoResHand: Bone;
															};
														};
													};
													LeftLeg1_LoResUpperLeg: Bone & {
														LeftLeg1_LoResLowerLeg: Bone & {
															LeftLeg1_LoResFoot: Bone;
														};
													};
												};
											};
											SurfaceAppearance: SurfaceAppearance;
										};
										InitialPoses: Folder & {
											GEO_RedtailHawk_01_Composited: CFrameValue;
											LeftLeg1_LoResToe_end_Composited: CFrameValue;
											Tail_Composited: CFrameValue;
											RightLeg1_LoResUpperLeg_Composited: CFrameValue;
											RightLeg1_LoResLowerLeg_Composited: CFrameValue;
											RightLeg1_LoResToe_end_Initial: CFrameValue;
											LeftLeg1_LoResToe_Composited: CFrameValue;
											LeftArm1_LoResClavical_Initial: CFrameValue;
											LeftLeg1_LoResFoot_Composited: CFrameValue;
											Neck_Initial: CFrameValue;
											RightArm1_LoResUpperArm_Composited: CFrameValue;
											RightLeg1_LoResUpperLeg_Original: CFrameValue;
											RightLeg1_LoResFoot_Original: CFrameValue;
											LeftLeg1_LoResToe_end_Initial: CFrameValue;
											Head_Initial: CFrameValue;
											LeftLeg1_LoResUpperLeg_Original: CFrameValue;
											LeftArm1_LoResClavical_Original: CFrameValue;
											LeftLeg1_LoResLowerLeg_Original: CFrameValue;
											RightLeg1_LoResToe_end_Original: CFrameValue;
											RightLeg1_LoResToe_Initial: CFrameValue;
											LeftArm1_LoResHand_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											Head_Composited: CFrameValue;
											Body_Initial: CFrameValue;
											LeftArm1_LoResLowerArm_Initial: CFrameValue;
											LeftLeg1_LoResUpperLeg_Composited: CFrameValue;
											LeftLeg1_LoResFoot_Original: CFrameValue;
											LeftArm1_LoResClavical_Composited: CFrameValue;
											RightLeg1_LoResToe_end_Composited: CFrameValue;
											Root_Original: CFrameValue;
											RightArm1_LoResClavical_Original: CFrameValue;
											LeftLeg1_LoResLowerLeg_Initial: CFrameValue;
											LeftLeg1_LoResToe_Original: CFrameValue;
											Body_Original: CFrameValue;
											RightArm1_LoResUpperArm_Original: CFrameValue;
											LeftLeg1_LoResLowerLeg_Composited: CFrameValue;
											LeftLeg1_LoResFoot_Initial: CFrameValue;
											RightArm1_LoResUpperArm_Initial: CFrameValue;
											RightArm1_LoResClavical_Initial: CFrameValue;
											Body_Composited: CFrameValue;
											RightArm1_LoResHand_Initial: CFrameValue;
											Tail_Initial: CFrameValue;
											LeftArm1_LoResHand_Composited: CFrameValue;
											RightArm1_LoResLowerArm_Original: CFrameValue;
											LeftLeg1_LoResToe_end_Original: CFrameValue;
											LeftLeg1_LoResUpperLeg_Initial: CFrameValue;
											RightLeg1_LoResUpperLeg_Initial: CFrameValue;
											LeftArm1_LoResUpperArm_Initial: CFrameValue;
											Tail_Original: CFrameValue;
											Head_Original: CFrameValue;
											Neck_Original: CFrameValue;
											LeftArm1_LoResLowerArm_Original: CFrameValue;
											RightLeg1_LoResLowerLeg_Initial: CFrameValue;
											RightLeg1_LoResFoot_Initial: CFrameValue;
											RightArm1_LoResLowerArm_Initial: CFrameValue;
											GEO_RedtailHawk_01_Initial: CFrameValue;
											RightLeg1_LoResToe_Original: CFrameValue;
											LeftArm1_LoResUpperArm_Composited: CFrameValue;
											LeftArm1_LoResLowerArm_Composited: CFrameValue;
											LeftArm1_LoResUpperArm_Original: CFrameValue;
											RightLeg1_LoResToe_Composited: CFrameValue;
											RightArm1_LoResHand_Composited: CFrameValue;
											GEO_RedtailHawk_01_Original: CFrameValue;
											RightArm1_LoResLowerArm_Composited: CFrameValue;
											RightLeg1_LoResFoot_Composited: CFrameValue;
											RightLeg1_LoResLowerLeg_Original: CFrameValue;
											Neck_Composited: CFrameValue;
											RightArm1_LoResClavical_Composited: CFrameValue;
											LeftArm1_LoResHand_Original: CFrameValue;
											Root_Composited: CFrameValue;
											RightArm1_LoResHand_Original: CFrameValue;
											LeftLeg1_LoResToe_Initial: CFrameValue;
										};
										AnimationController: AnimationController & {
											Animator: Animator;
										};
									};
								};
							};
							Butterflies: Folder & {
								Idle: Folder & {
									Butterfly_Idle01: Model & {
										AnimationController: AnimationController & {
											Animator: Animator;
										};
										GEO_Butterfly_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													RightWing: Bone;
													LeftWing: Bone;
												};
											};
										};
										InitialPoses: Folder & {
											RightWing_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											RightWing_Original: CFrameValue;
											Body_Original: CFrameValue;
											Body_Initial: CFrameValue;
											RightWing_Composited: CFrameValue;
											LeftWing_Composited: CFrameValue;
											LeftWing_Original: CFrameValue;
											LeftWing_Initial: CFrameValue;
											GEO_Butterfly_01_Composited: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Butterfly_01_Original: CFrameValue;
											Root_Composited: CFrameValue;
											GEO_Butterfly_01_Initial: CFrameValue;
											Body_Composited: CFrameValue;
										};
									};
								};
								FlightPath2: Folder & {
									Butterfly_FlightPath01: Model & {
										AnimationController: AnimationController & {
											Animator: Animator;
										};
										GEO_Butterfly_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													RightWing: Bone;
													LeftWing: Bone;
												};
											};
										};
										InitialPoses: Folder & {
											RightWing_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											RightWing_Original: CFrameValue;
											Body_Original: CFrameValue;
											Body_Initial: CFrameValue;
											RightWing_Composited: CFrameValue;
											LeftWing_Composited: CFrameValue;
											LeftWing_Original: CFrameValue;
											LeftWing_Initial: CFrameValue;
											GEO_Butterfly_01_Composited: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Butterfly_01_Original: CFrameValue;
											Root_Composited: CFrameValue;
											GEO_Butterfly_01_Initial: CFrameValue;
											Body_Composited: CFrameValue;
										};
									};
								};
								FlightPath1: Folder & {
									Butterfly_FlightPath02: Model & {
										AnimationController: AnimationController & {
											Animator: Animator;
										};
										GEO_Butterfly_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													RightWing: Bone;
													LeftWing: Bone;
												};
											};
										};
										InitialPoses: Folder & {
											RightWing_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											RightWing_Original: CFrameValue;
											Body_Original: CFrameValue;
											Body_Initial: CFrameValue;
											RightWing_Composited: CFrameValue;
											LeftWing_Composited: CFrameValue;
											LeftWing_Original: CFrameValue;
											LeftWing_Initial: CFrameValue;
											GEO_Butterfly_01_Composited: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Butterfly_01_Original: CFrameValue;
											Root_Composited: CFrameValue;
											GEO_Butterfly_01_Initial: CFrameValue;
											Body_Composited: CFrameValue;
										};
									};
								};
							};
							Dragonflies: Folder & {
								Idle: Folder & {
									Dragonfly_IdleFlight01: Model & {
										AnimationController: AnimationController & {
											Animator: Animator;
										};
										GEO_Dragonfly_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													LeftWing2: Bone;
													RightWing2: Bone;
													RightWing1: Bone;
													LeftWing1: Bone;
													Tail1: Bone & {
														Tail2: Bone & {
															Tail3: Bone;
														};
													};
												};
											};
											SurfaceAppearance: SurfaceAppearance;
										};
										InitialPoses: Folder & {
											LeftWing1_Initial: CFrameValue;
											Tail3_Initial: CFrameValue;
											Body_Original: CFrameValue;
											Tail2_Composited: CFrameValue;
											LeftWing1_Composited: CFrameValue;
											GEO_Dragonfly_01_Original: CFrameValue;
											Tail3_Original: CFrameValue;
											Tail3_Composited: CFrameValue;
											RightWing2_Original: CFrameValue;
											Tail1_Original: CFrameValue;
											LeftWing2_Original: CFrameValue;
											Tail1_Composited: CFrameValue;
											RightWing1_Composited: CFrameValue;
											GEO_Dragonfly_01_Initial: CFrameValue;
											GEO_Dragonfly_01_Composited: CFrameValue;
											Root_Original: CFrameValue;
											Root_Initial: CFrameValue;
											Tail1_Initial: CFrameValue;
											Tail2_Initial: CFrameValue;
											Body_Initial: CFrameValue;
											RightWing1_Initial: CFrameValue;
											RightWing2_Initial: CFrameValue;
											RightWing2_Composited: CFrameValue;
											LeftWing2_Composited: CFrameValue;
											RightWing1_Original: CFrameValue;
											LeftWing1_Original: CFrameValue;
											Body_Composited: CFrameValue;
											Root_Composited: CFrameValue;
											LeftWing2_Initial: CFrameValue;
											Tail2_Original: CFrameValue;
										};
									};
									Dragonfly_IdleFlight02: Model & {
										AnimationController: AnimationController & {
											Animator: Animator;
										};
										GEO_Dragonfly_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													LeftWing2: Bone;
													RightWing2: Bone;
													RightWing1: Bone;
													LeftWing1: Bone;
													Tail1: Bone & {
														Tail2: Bone & {
															Tail3: Bone;
														};
													};
												};
											};
											SurfaceAppearance: SurfaceAppearance;
										};
										InitialPoses: Folder & {
											LeftWing1_Initial: CFrameValue;
											Tail3_Initial: CFrameValue;
											Body_Original: CFrameValue;
											Tail2_Composited: CFrameValue;
											LeftWing1_Composited: CFrameValue;
											GEO_Dragonfly_01_Original: CFrameValue;
											Tail3_Original: CFrameValue;
											Tail3_Composited: CFrameValue;
											RightWing2_Original: CFrameValue;
											Tail1_Original: CFrameValue;
											LeftWing2_Original: CFrameValue;
											Tail1_Composited: CFrameValue;
											RightWing1_Composited: CFrameValue;
											GEO_Dragonfly_01_Initial: CFrameValue;
											GEO_Dragonfly_01_Composited: CFrameValue;
											Root_Original: CFrameValue;
											Root_Initial: CFrameValue;
											Tail1_Initial: CFrameValue;
											Tail2_Initial: CFrameValue;
											Body_Initial: CFrameValue;
											RightWing1_Initial: CFrameValue;
											RightWing2_Initial: CFrameValue;
											RightWing2_Composited: CFrameValue;
											LeftWing2_Composited: CFrameValue;
											RightWing1_Original: CFrameValue;
											LeftWing1_Original: CFrameValue;
											Body_Composited: CFrameValue;
											Root_Composited: CFrameValue;
											LeftWing2_Initial: CFrameValue;
											Tail2_Original: CFrameValue;
										};
									};
								};
								FlightPath2: Folder;
								FlightPath1: Folder & {
									Dragonfly_Flight01: Model & {
										AnimationController: AnimationController & {
											Animator: Animator;
										};
										GEO_Dragonfly_01: MeshPart & {
											Root: Bone & {
												Body: Bone & {
													LeftWing2: Bone;
													RightWing2: Bone;
													RightWing1: Bone;
													LeftWing1: Bone;
													Tail1: Bone & {
														Tail2: Bone & {
															Tail3: Bone;
														};
													};
												};
											};
											SurfaceAppearance: SurfaceAppearance;
										};
										InitialPoses: Folder & {
											LeftWing1_Initial: CFrameValue;
											Tail3_Initial: CFrameValue;
											Body_Original: CFrameValue;
											Tail2_Composited: CFrameValue;
											LeftWing1_Composited: CFrameValue;
											GEO_Dragonfly_01_Original: CFrameValue;
											Tail3_Original: CFrameValue;
											Tail3_Composited: CFrameValue;
											RightWing2_Original: CFrameValue;
											Tail1_Original: CFrameValue;
											LeftWing2_Original: CFrameValue;
											Tail1_Composited: CFrameValue;
											RightWing1_Composited: CFrameValue;
											GEO_Dragonfly_01_Initial: CFrameValue;
											GEO_Dragonfly_01_Composited: CFrameValue;
											Root_Original: CFrameValue;
											Root_Initial: CFrameValue;
											Tail1_Initial: CFrameValue;
											Tail2_Initial: CFrameValue;
											Body_Initial: CFrameValue;
											RightWing1_Initial: CFrameValue;
											RightWing2_Initial: CFrameValue;
											RightWing2_Composited: CFrameValue;
											LeftWing2_Composited: CFrameValue;
											RightWing1_Original: CFrameValue;
											LeftWing1_Original: CFrameValue;
											Body_Composited: CFrameValue;
											Root_Composited: CFrameValue;
											LeftWing2_Initial: CFrameValue;
											Tail2_Original: CFrameValue;
										};
									};
								};
							};
							Fishes: Folder & {
								SwimPath2: Folder & {
									Fish_Jump02: Model & {
										GEO_Fish_01: MeshPart & {
											Root: Bone & {
												spine1: Bone & {
													spine2: Bone & {
														spine3: Bone & {
															spine4: Bone & {
																spine5: Bone & {
																	spine6: Bone;
																};
															};
														};
													};
												};
											};
										};
										InitialPoses: Folder & {
											spine3_Original: CFrameValue;
											spine3_Composited: CFrameValue;
											GEO_Fish_01_Composited: CFrameValue;
											spine2_Initial: CFrameValue;
											spine6_Initial: CFrameValue;
											spine2_Original: CFrameValue;
											Root_Composited: CFrameValue;
											spine4_Composited: CFrameValue;
											spine6_Composited: CFrameValue;
											spine1_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											spine5_Initial: CFrameValue;
											spine5_Original: CFrameValue;
											spine5_Composited: CFrameValue;
											spine4_Initial: CFrameValue;
											spine4_Original: CFrameValue;
											spine6_Original: CFrameValue;
											spine2_Composited: CFrameValue;
											GEO_Fish_01_Original: CFrameValue;
											spine1_Original: CFrameValue;
											spine3_Initial: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Fish_01_Initial: CFrameValue;
											spine1_Composited: CFrameValue;
										};
										AnimationController: AnimationController & {
											Animator: Animator;
										};
									};
								};
								SwimPath1: Folder & {
									Fish_Jump01: Model & {
										GEO_Fish_01: MeshPart & {
											Root: Bone & {
												spine1: Bone & {
													spine2: Bone & {
														spine3: Bone & {
															spine4: Bone & {
																spine5: Bone & {
																	spine6: Bone;
																};
															};
														};
													};
												};
											};
										};
										InitialPoses: Folder & {
											spine3_Original: CFrameValue;
											spine3_Composited: CFrameValue;
											GEO_Fish_01_Composited: CFrameValue;
											spine2_Initial: CFrameValue;
											spine6_Initial: CFrameValue;
											spine2_Original: CFrameValue;
											Root_Composited: CFrameValue;
											spine4_Composited: CFrameValue;
											spine6_Composited: CFrameValue;
											spine1_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											spine5_Initial: CFrameValue;
											spine5_Original: CFrameValue;
											spine5_Composited: CFrameValue;
											spine4_Initial: CFrameValue;
											spine4_Original: CFrameValue;
											spine6_Original: CFrameValue;
											spine2_Composited: CFrameValue;
											GEO_Fish_01_Original: CFrameValue;
											spine1_Original: CFrameValue;
											spine3_Initial: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Fish_01_Initial: CFrameValue;
											spine1_Composited: CFrameValue;
										};
										AnimationController: AnimationController & {
											Animator: Animator;
										};
									};
								};
								Idle: Folder & {
									Fish_IdleSwim02: Model & {
										GEO_Fish_01: MeshPart & {
											Root: Bone & {
												spine1: Bone & {
													spine2: Bone & {
														spine3: Bone & {
															spine4: Bone & {
																spine5: Bone & {
																	spine6: Bone;
																};
															};
														};
													};
												};
											};
										};
										InitialPoses: Folder & {
											spine3_Original: CFrameValue;
											spine3_Composited: CFrameValue;
											GEO_Fish_01_Composited: CFrameValue;
											spine2_Initial: CFrameValue;
											spine6_Initial: CFrameValue;
											spine2_Original: CFrameValue;
											Root_Composited: CFrameValue;
											spine4_Composited: CFrameValue;
											spine6_Composited: CFrameValue;
											spine1_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											spine5_Initial: CFrameValue;
											spine5_Original: CFrameValue;
											spine5_Composited: CFrameValue;
											spine4_Initial: CFrameValue;
											spine4_Original: CFrameValue;
											spine6_Original: CFrameValue;
											spine2_Composited: CFrameValue;
											GEO_Fish_01_Original: CFrameValue;
											spine1_Original: CFrameValue;
											spine3_Initial: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Fish_01_Initial: CFrameValue;
											spine1_Composited: CFrameValue;
										};
										AnimationController: AnimationController & {
											Animator: Animator;
										};
									};
									Fish_IdleSwim01: Model & {
										GEO_Fish_01: MeshPart & {
											Root: Bone & {
												spine1: Bone & {
													spine2: Bone & {
														spine3: Bone & {
															spine4: Bone & {
																spine5: Bone & {
																	spine6: Bone;
																};
															};
														};
													};
												};
											};
										};
										InitialPoses: Folder & {
											spine3_Original: CFrameValue;
											spine3_Composited: CFrameValue;
											GEO_Fish_01_Composited: CFrameValue;
											spine2_Initial: CFrameValue;
											spine6_Initial: CFrameValue;
											spine2_Original: CFrameValue;
											Root_Composited: CFrameValue;
											spine4_Composited: CFrameValue;
											spine6_Composited: CFrameValue;
											spine1_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											spine5_Initial: CFrameValue;
											spine5_Original: CFrameValue;
											spine5_Composited: CFrameValue;
											spine4_Initial: CFrameValue;
											spine4_Original: CFrameValue;
											spine6_Original: CFrameValue;
											spine2_Composited: CFrameValue;
											GEO_Fish_01_Original: CFrameValue;
											spine1_Original: CFrameValue;
											spine3_Initial: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Fish_01_Initial: CFrameValue;
											spine1_Composited: CFrameValue;
										};
										AnimationController: AnimationController & {
											Animator: Animator;
										};
									};
									Fish_IdleSwim03: Model & {
										GEO_Fish_01: MeshPart & {
											Root: Bone & {
												spine1: Bone & {
													spine2: Bone & {
														spine3: Bone & {
															spine4: Bone & {
																spine5: Bone & {
																	spine6: Bone;
																};
															};
														};
													};
												};
											};
										};
										InitialPoses: Folder & {
											spine3_Original: CFrameValue;
											spine3_Composited: CFrameValue;
											GEO_Fish_01_Composited: CFrameValue;
											spine2_Initial: CFrameValue;
											spine6_Initial: CFrameValue;
											spine2_Original: CFrameValue;
											Root_Composited: CFrameValue;
											spine4_Composited: CFrameValue;
											spine6_Composited: CFrameValue;
											spine1_Initial: CFrameValue;
											Root_Initial: CFrameValue;
											spine5_Initial: CFrameValue;
											spine5_Original: CFrameValue;
											spine5_Composited: CFrameValue;
											spine4_Initial: CFrameValue;
											spine4_Original: CFrameValue;
											spine6_Original: CFrameValue;
											spine2_Composited: CFrameValue;
											GEO_Fish_01_Original: CFrameValue;
											spine1_Original: CFrameValue;
											spine3_Initial: CFrameValue;
											Root_Original: CFrameValue;
											GEO_Fish_01_Initial: CFrameValue;
											spine1_Composited: CFrameValue;
										};
										AnimationController: AnimationController & {
											Animator: Animator;
										};
									};
								};
							};
						};
					};
				};
			};
			Scripts: Folder & {
				DynamicExposure: LocalScript;
				WindControllerLargeVegitation: LocalScript & {
					WindShake: ModuleScript & {
						Settings: ModuleScript;
						Octree: ModuleScript & {
							OctreeRegionUtils: ModuleScript;
							OctreeNode: ModuleScript;
						};
					};
				};
				WindControllerSmallVegitation: LocalScript & {
					WindLines: ModuleScript;
					WindShake: ModuleScript & {
						Settings: ModuleScript;
						Octree: ModuleScript & {
							OctreeRegionUtils: ModuleScript;
							OctreeNode: ModuleScript;
						};
					};
				};
				LagFreeSettings: Script;
				Optimize: Script;
			};
		};
		Props: Folder & {
			["1"]: Folder & {
				["Light Sconce 2"]: MeshPart;
				["Paint Bucket"]: MeshPart;
				["Aluminium Ladder"]: MeshPart;
				["Oil Drum 001c"]: MeshPart;
				Tire001a: MeshPart;
				["Tonfa/Nightstick"]: Part & {
					Mesh: SpecialMesh;
				};
				concrete_barrier001a: MeshPart;
				["Books 2"]: MeshPart;
				["Coffee Mug 2"]: MeshPart;
				canister01a: MeshPart;
				metalladder001: MeshPart;
				powerbox02a: MeshPart;
				Frontloader: Model & {
					Frontloader: Model & {
						["Frontloader Wheels"]: MeshPart;
						["Frontloader Base"]: MeshPart;
					};
					Model: Model & {
						["Frontloader Rear"]: MeshPart;
						["Frontloader Glass"]: MeshPart;
					};
				};
				beam01c: MeshPart;
				["Oil Drum 001f"]: MeshPart;
				["Acunit 1"]: MeshPart;
				["Radiator 01a"]: MeshPart;
				["Oil Drum 001d"]: MeshPart;
				water_machinery4: MeshPart;
				["Warehouse Shelf 1"]: MeshPart;
				driftwood_clump_03a: MeshPart;
				driftwood_02a: MeshPart;
				RhododendronVar02: Model & {
					Trunk: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					Leaves: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
				};
				driftwood_clump_02a: MeshPart;
				["Floodlight 1"]: MeshPart;
				["Juice Pump"]: Model & {
					Tube: MeshPart;
					Bubbles: Part & {
						Bubbles: ParticleEmitter;
						PointLight: PointLight;
					};
					hev_machine: MeshPart;
					Tinting: MeshPart;
					Case: MeshPart;
				};
				tree_deciduous_01a: MeshPart;
				Bush: MeshPart;
				["Blank Mesh"]: MeshPart;
				["Cooling Tank"]: MeshPart;
				["Ac Vent 4"]: MeshPart;
				["Urban Vines 2"]: Part & {
					Mesh: SpecialMesh;
					Decal: Decal;
				};
				["Coffee Mug 1"]: MeshPart;
				Tirestack: Model & {
					Pallet: MeshPart;
					Tirestack: MeshPart;
				};
				["Satellite Dish"]: MeshPart;
				Machete: Part & {
					Mesh: SpecialMesh;
				};
				beam01d: MeshPart;
				["Wood Pallet"]: MeshPart;
				Projector: MeshPart;
				door01_left: MeshPart;
				Katana: Part & {
					Mesh: SpecialMesh;
				};
				["Concrete Bags 1"]: Model & {
					Pallet: MeshPart;
					["Concrete Bags"]: MeshPart;
				};
				water_machinery2: MeshPart;
				Centrifuge: MeshPart;
				driftwood_01a: MeshPart;
				reciever01b: MeshPart;
				ibeam01a: MeshPart;
				canal_cap001: MeshPart;
				beam01b: MeshPart;
				water_machinery1: MeshPart;
				["Construction Plywood Stack"]: MeshPart;
				["Water Heater"]: MeshPart;
				["Port-A-Potty"]: Model & {
					["Outhouse 2"]: MeshPart;
					["Outhouse Door 1"]: MeshPart;
				};
				Toolbox: MeshPart;
				["Warehouse Shelf 3"]: MeshPart;
				["Water Pump"]: Model & {
					generator: MeshPart;
				};
				["Newspaper Dispensers"]: MeshPart;
				Baseball_Bat: Part & {
					Mesh: SpecialMesh;
				};
				["Bucket Tools"]: MeshPart;
				Leaves: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
				FernLeavesOuter: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
				["Food Pile 2"]: MeshPart;
				Scaffolding: Model & {
					Railing: MeshPart;
					["Front Plywood"]: MeshPart;
					["Walking Plywood"]: MeshPart;
				};
				["Telephone Pole 2"]: MeshPart;
				["Paint Roller"]: MeshPart;
				["Oil Drum 001g"]: MeshPart;
				["Meshes/controlroomconsole01"]: MeshPart;
				Fern_OuterLeaves: MeshPart & {
					SurfaceAppearance: SurfaceAppearance;
				};
				reciever01a: MeshPart;
				Radio: MeshPart;
				["Concrete Wall 1-140"]: MeshPart;
				Phone: MeshPart;
				["Fridge 3"]: MeshPart;
				["Lower Garage Boxes"]: MeshPart;
				canal_bars002: MeshPart;
				Rusty: MeshPart;
				["Fire Alarm Ceiling"]: MeshPart;
				Cinderblock: UnionOperation;
				["Large Vent 1"]: MeshPart;
				Golf_Club: Part & {
					Mesh: SpecialMesh;
				};
				Grass: MeshPart;
				Eletric_Guitar: Part & {
					Mesh: SpecialMesh;
				};
				["Oil Drum 001a"]: MeshPart;
				["Stool "]: MeshPart;
				["Concrete Bags 3"]: Model & {
					Pallet: MeshPart;
					["Concrete Bags"]: MeshPart;
				};
				["Trash Can"]: MeshPart;
				citizenradio: MeshPart;
				["Electrical Box 1"]: MeshPart;
				["Electric Box 2"]: MeshPart;
				metalladder002b: MeshPart;
				["Metal Shelves"]: MeshPart;
				Clipboard: Part & {
					Mesh: SpecialMesh;
				};
				["Paper Towel Dispenser"]: MeshPart;
				["Coffee Mug 3"]: MeshPart;
				Crowbar: Part & {
					Mesh: SpecialMesh;
				};
				["Books 1"]: MeshPart;
				["Oil Drum 001e"]: MeshPart;
				["Vending Machine"]: MeshPart;
				Frying_Pan: Part & {
					Mesh: SpecialMesh;
				};
				metalladder002: MeshPart;
				water_spigot: MeshPart;
				["Emergency Light 1"]: MeshPart;
				Pallet: MeshPart;
				FireAxe: Part & {
					Mesh: SpecialMesh;
				};
				Cricket_Bat: Part & {
					Mesh: SpecialMesh;
				};
				["Leaning Plywood"]: MeshPart;
				["Extrasmall Crate"]: MeshPart;
				floodlight_generator_pose01: MeshPart;
				["Ceiling Light"]: MeshPart;
				dockplank01a: MeshPart;
				substation_circuitbreaker01a: MeshPart;
				["Pipeset 08d Corner 128d 001a"]: MeshPart;
			};
			["2"]: Folder & {
				["Cupboard "]: MeshPart;
				Kennel: MeshPart;
				["Plastic Crate"]: MeshPart;
				["Canister 1"]: MeshPart;
				wood_crate001a: MeshPart & {
					["wood_crate001a-to-wood_crate001a Strong Joint"]: ManualWeld;
				};
				Entity_metalladder002: Model & {
					MeshPart: MeshPart;
				};
				Wheelbarrow: MeshPart;
				Entity_exterior_fence002c: Model;
				["Binder Green"]: MeshPart;
				Couch: Model & {
					MeshPart: MeshPart;
				};
				["Chair 2"]: MeshPart;
				["Blue Barrel "]: MeshPart;
				["Lab Recive 1"]: MeshPart;
				["Milk Carton 2"]: MeshPart;
				["Metal Pot 1"]: MeshPart;
				["Clock "]: MeshPart & {
					Decal: Decal;
				};
				["Couch 1"]: MeshPart;
				Entity_exterior_fence003a: Model;
				["Table 1"]: MeshPart;
				Entity_exterior_fence01b: Model;
				["Shoe "]: MeshPart;
				wood_crate001a_damagedmax: MeshPart;
				Stove02: MeshPart;
				["Console 1"]: MeshPart;
				["Milk Carton 1"]: MeshPart;
				["Jar 1"]: MeshPart;
				["Console 3"]: MeshPart;
				HealthKit: MeshPart;
				["Traffic Cone"]: MeshPart;
				Entity_benchoutdoor01a: Model & {
					MeshPart: MeshPart;
				};
				["Metal Pot 2"]: MeshPart;
				["Binder Gray"]: MeshPart;
				["K Sink"]: MeshPart;
				Entity_chair_kleiner03a: Model & {
					Seat: Seat;
					MeshPart: MeshPart;
				};
				["Take-Out"]: MeshPart;
				Toilet: MeshPart;
				["Monitor 3"]: MeshPart;
				["Couch 2"]: MeshPart;
				["Cinder Block"]: MeshPart;
				["Binder Blue"]: MeshPart;
				pushcart01a: MeshPart;
				["Plastic Bucket"]: MeshPart;
				["TV "]: MeshPart;
				["Radiator 1"]: MeshPart;
				trashdumpster01a: MeshPart;
				metalbucket01a: MeshPart;
				["Stool "]: MeshPart;
				["Wood Pallet"]: MeshPart;
				["Console 2"]: MeshPart;
				["Cooling Tank"]: MeshPart;
				["Lab Recive 2"]: MeshPart;
				["Container 1"]: MeshPart & {
					Skin1: IntValue;
					Skin0: IntValue;
					Skin2: IntValue;
				};
				popcan: MeshPart;
				PlasticCrate_Red: Model;
				trainstation_post001: MeshPart;
				["Binder Red"]: MeshPart;
				oildrum001_explosive: MeshPart;
				["Vending Machine"]: MeshPart;
				oildrum001: MeshPart & {
					Skin2: IntValue;
					Skin0: IntValue;
					Skin5: IntValue;
					Skin4: IntValue;
					Skin3: IntValue;
					Skin1: IntValue;
				};
				["Vending Door"]: MeshPart;
				["Glass Jug"]: MeshPart;
				["Hula Doll"]: MeshPart;
				["Glass Bottle 1"]: MeshPart;
				Shovel: MeshPart;
				Entity_clock01: Model & {
					MeshPart: MeshPart;
				};
				["Metal Bucket 2"]: MeshPart;
				Watermelon: MeshPart;
				["Drawer 1"]: MeshPart;
				Cactus: MeshPart;
				wood_crate002a: MeshPart;
				["Plastic Bottle 3"]: MeshPart;
				["Cash Reg"]: MeshPart;
				oven: MeshPart;
				Bed: MeshPart;
			};
		};
	};
	Flashlight: Model & {
		Body: UnionOperation & {
			Light: Weld;
		};
		Light: Part & {
			LightBeam: Beam;
			LightAttachment: Attachment & {
				SpotLight: SpotLight;
				BeamEnd: Attachment;
			};
		};
	};
	UIPresets: Folder;
	__Rojo_SessionLock: ObjectValue;
	["Simple Thing"]: Model & {
		Lights: Frame & {
			L: TextButton & {
				Lights: LocalScript;
				Reverse: Sound & {
					SetVolumeRev: NumberValue;
					SetVolume: NumberValue;
					SetRev: NumberValue;
					SetPitch: NumberValue;
				};
			};
		};
		light1: Model & {
			Part: Part & {
				Attachment: Attachment;
			};
			light1: Part & {
				Attachment: Attachment;
			};
		};
		light2: Model & {
			Part: Part & {
				Attachment: Attachment;
			};
			light1: Part & {
				light: Beam;
				Attachment: Attachment;
			};
		};
	};
	["Flare Gun Animations"]: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription & {
				AccessoryDescription: AccessoryDescription;
			};
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh & {
				HatAttachment: Vector3Value;
				NeckRigAttachment: Vector3Value;
				HairAttachment: Vector3Value;
				FaceFrontAttachment: Vector3Value;
				FaceCenterAttachment: Vector3Value;
				AvatarPartScaleType: StringValue;
			};
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
		AnimSaves: Model & {
			["Automatic Save"]: KeyframeSequence;
			Fire: KeyframeSequence;
			Idle: KeyframeSequence & {
				Keyframe: Keyframe & {
					HumanoidRootPart: Pose & {
						Null: IntValue;
						Torso: Pose & {
							Null: IntValue;
							["Right Arm"]: Pose & {
								MainPart: Pose & {
									Trigger: Pose;
									Barrel: Pose;
									Ammo: Pose;
									Hammer: Pose;
								};
							};
						};
					};
				};
			};
			Reload: KeyframeSequence;
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
	Rig: Model & {
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
			Body: Weld;
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
		Flashlight: Model & {
			Body: UnionOperation & {
				Light: Weld;
			};
			Light: Part & {
				LightAttachment: Attachment & {
					SpotLight: SpotLight;
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
	TagList: Folder & {
		menuEarth: Configuration;
		Glass: Configuration;
		Ladder: Configuration;
		Plank: Configuration;
	};
	Faceless: Model & {
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
		Behavior: Script;
		RightHand: MeshPart & {
			["Blood Splatter"]: Decal;
			RightClaws: MeshPart;
			RightWrist: Motor6D;
			["Images/granny blood"]: Decal;
			RightClaws3: WeldConstraint;
		};
		HumanoidRootPart: Part;
		AI: Script;
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
		Config: Configuration & {
			StalkRange: NumberValue;
			RunSpeed: NumberValue;
			StunChance: NumberValue;
			AdditionalStopChaseRange: NumberValue;
			AttackCooldown: NumberValue;
			State: NumberValue;
			ClosestCave: ObjectValue;
			IsStunned: BoolValue;
			CanStalk: BoolValue;
			Target: ObjectValue;
			ChaseRange: NumberValue;
			WalkSpeed: NumberValue;
			Damage: NumberValue;
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
		Foosteps: Script;
		UpperTorso: MeshPart & {
			Waist: Motor6D;
			["Images/blood splatter"]: Decal;
			["Blood fake "]: Decal;
		};
		RightUpperArm: MeshPart & {
			RightShoulder: Motor6D;
		};
		StunEvent: BindableEvent;
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
		Animations: Folder & {
			Attack1: Animation;
			Scream: Animation;
			Attack2: Animation;
		};
		Animate: Script & {
			point: StringValue & {
				PointAnim: Animation;
			};
			climb: StringValue & {
				ClimbAnim: Animation;
			};
			cheer: StringValue & {
				CheerAnim: Animation;
			};
			dance3: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation3: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			toolnone: StringValue & {
				ToolNoneAnim: Animation;
			};
			dance: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation3: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			swimidle: StringValue & {
				SwimIdle: Animation;
			};
			fall: StringValue & {
				FallAnim: Animation;
			};
			pose: StringValue & {
				PoseAnim: Animation & {
					Weight: NumberValue;
				};
			};
			laugh: StringValue & {
				LaughAnim: Animation;
			};
			idle: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			jump: StringValue & {
				["!ID!"]: Animation;
			};
			sit: StringValue & {
				SitAnim: Animation;
			};
			run: StringValue & {
				RunAnim: Animation;
			};
			swim: StringValue & {
				Swim: Animation;
			};
			wave: StringValue & {
				WaveAnim: Animation;
			};
			toolslash: StringValue & {
				ToolSlashAnim: Animation;
			};
			dance2: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation3: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			toollunge: StringValue & {
				ToolLungeAnim: Animation;
			};
			walk: StringValue & {
				WalkAnim: Animation;
			};
		};
		RightFoot: MeshPart & {
			["Sphere.0141"]: WeldConstraint;
			["Sphere.014"]: MeshPart;
			RightAnkle: Motor6D;
		};
		RightUpperLeg: MeshPart & {
			RightHip: Motor6D;
		};
		Animate2: Script & {
			idle: Animation;
			jump: Animation;
			climb: Animation;
			fall: Animation;
			run: Animation;
			walk: Animation;
		};
	};
	MoonAnimator2Saves: Folder & {
		["Flare gun"]: Folder & {
			Fire: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
			Idle: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
			Reload: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
		};
		Rake: Folder & {
			Idle: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
			Attack1: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
			Walk: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
			Run: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
			Attack2: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
		};
		["Stun Baton"]: Folder & {
			Idle: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
			Swing1: StringValue & {
				["1"]: Folder & {
					Rig: Folder;
				};
			};
		};
	};
	Model: Model & {
		["Car Battery"]: Model & {
			["Car Battery"]: MeshPart;
		};
		Sign: Part & {
			SurfaceGui: SurfaceGui & {
				SIGN: TextLabel;
			};
		};
		StunStickAnimsR6: Model & {
			["Left Leg"]: Part & {
				LeftFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				Animator: Animator;
				HumanoidDescription: HumanoidDescription & {
					AccessoryDescription: AccessoryDescription;
				};
			};
			["Right Leg"]: Part & {
				RightFootAttachment: Attachment;
			};
			Head: Part & {
				HatAttachment: Attachment;
				HairAttachment: Attachment;
				FaceFrontAttachment: Attachment;
				face: Decal;
				Mesh: SpecialMesh & {
					HatAttachment: Vector3Value;
					NeckRigAttachment: Vector3Value;
					HairAttachment: Vector3Value;
					FaceFrontAttachment: Vector3Value;
					FaceCenterAttachment: Vector3Value;
					AvatarPartScaleType: StringValue;
				};
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
			AnimSaves: Model & {
				Idle: KeyframeSequence & {
					Keyframe: Keyframe & {
						HumanoidRootPart: Pose & {
							Torso: Pose & {
								["Right Arm"]: Pose & {
									MainPart: Pose;
								};
							};
						};
					};
				};
				Swing1: KeyframeSequence;
			};
			["Stun Baton"]: Tool & {
				MainPart: MeshPart;
			};
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
		Tower: Model & {
			Union: UnionOperation;
			Truss: TrussPart & {
				Top: Attachment;
				Bottom2: Attachment;
				PathfindingLink: PathfindingLink;
				Top2: Attachment;
				Link2: PathfindingLink;
				Bottom: Attachment;
			};
			Colliders: Model;
		};
		Door: Part;
	};
	Soldier: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
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
		["Body Colors"]: BodyColors;
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Operator Ballistic Vest V2"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				BodyFrontAttachment: Attachment;
				TouchInterest: TouchTransmitter;
				Mesh: SpecialMesh;
				AccessoryWeld: Weld;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		Shirt: Shirt;
		Pants: Pants;
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		["Tactical Pouches V.2Accessory"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				TouchInterest: TouchTransmitter;
				AccessoryWeld: Weld;
				WaistFrontAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Black Neck Scarf"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				TouchInterest: TouchTransmitter;
				AccessoryWeld: Weld;
				FaceCenterAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Meshes/NVGROLLEDBACKAccessory"]: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				TouchInterest: TouchTransmitter;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
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
		["Meshes/6b47CoveredAccessory"]: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				TouchInterest: TouchTransmitter;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
	};
	Modes: Folder & {
		CrypticPursuit: ModuleScript;
	};
	RBX_ANIMSAVES: Model & {
		PlayerAnims: ObjectValue;
		PlrAnims: ObjectValue;
		RakeDummy: ObjectValue & {
			["Automatic Save"]: KeyframeSequence & {
				RakeDummyAnimationRigData: AnimationRigData;
				Keyframe: Keyframe & {
					HumanoidRootPart: Pose & {
						LowerTorso: Pose & {
							UpperTorso: Pose & {
								RightUpperArm: Pose & {
									RightLowerArm: Pose;
								};
							};
						};
					};
				};
			};
		};
		FireaxeAnimsaNew: ObjectValue;
		KrissVector: ObjectValue & {
			["Automatic Save"]: KeyframeSequence & {
				Keyframe: Keyframe & {
					RightUpperArm: Pose;
				};
			};
		};
		Rig: ObjectValue;
	};
	["Treadmills reake"]: Folder & {
		Head: Model & {
			Part: Part & {
				ParticleEmitter: ParticleEmitter;
			};
			Model: Model & {
				["Sphere.003"]: MeshPart & {
					["Blood Splatter"]: Decal;
					["Blood Handprint"]: Decal;
					["Blood Splatter - Transparent"]: Decal;
				};
			};
		};
		Part: Part;
		["Sphere.011"]: MeshPart;
		["Sphere.004"]: MeshPart;
		["Sphere.015"]: MeshPart & {
			["blood splatter1"]: Decal;
			blood8: Decal;
		};
		["Sphere.002"]: MeshPart;
		["Sphere.035"]: MeshPart & {
			["Blood fake "]: Decal;
			["Images/blood splatter"]: Decal;
		};
		["Sphere.009"]: MeshPart;
		["Sphere.016"]: MeshPart;
		["Sphere.005"]: MeshPart;
	};
}
