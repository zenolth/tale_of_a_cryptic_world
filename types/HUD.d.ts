type HUD = ScreenGui & {
	Rake: Folder & {
		Heartbeats: Sound;
		Chasing: Sound;
		Horrors: Folder & {
			Horror3: Sound & {
				DistortionSoundEffect: DistortionSoundEffect;
			};
			Horror2: Sound & {
				DistortionSoundEffect: DistortionSoundEffect;
			};
			Horror1: Sound & {
				DistortionSoundEffect: DistortionSoundEffect;
			};
		};
	};
	BottomLeft: Frame & {
		Weapons: Frame & {
			UIPadding: UIPadding;
			Inside: Frame & {
				WeaponImage: ImageLabel;
				UIStroke: UIStroke;
				UIPadding: UIPadding;
			};
		};
		UIPadding: UIPadding;
		UIAspectRatioConstraint: UIAspectRatioConstraint;
	};
	Ambience: Folder & {
		DayThemes: Folder & {
			D1: Sound;
		};
		Night: Folder & {
			N1: Sound;
			N2: Sound;
			N3: Sound;
			N5: Sound;
			N4: Sound;
			N6: Sound;
		};
	};
	TopLeft: Frame & {
		UIPadding: UIPadding;
		UIAspectRatioConstraint: UIAspectRatioConstraint;
		Health: Frame & {
			UIPadding: UIPadding;
			Inside: Frame & {
				UIStroke: UIStroke;
				UIPadding: UIPadding;
				Bar: Frame;
			};
		};
	};
	AlphaWarning: TextLabel & {
		UIAspectRatioConstraint: UIAspectRatioConstraint;
	};
	Main: LocalScript;
	BottomRight: Frame & {
		UIAspectRatioConstraint: UIAspectRatioConstraint;
		UIPadding: UIPadding;
	};
	Frame: Frame & {
		UICorner: UICorner;
		UIStroke: UIStroke;
		UIAspectRatioConstraint: UIAspectRatioConstraint;
	};
	TopRight: Frame & {
		UIAspectRatioConstraint: UIAspectRatioConstraint;
		UIPadding: UIPadding;
	};
	Crosshair: ImageLabel & {
		UIAspectRatioConstraint: UIAspectRatioConstraint;
	};
}
