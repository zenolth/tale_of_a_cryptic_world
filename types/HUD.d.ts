type HUD = ScreenGui & {
	TopLeft: Frame & {
		UIPadding: UIPadding;
		UIAspectRatioConstraint: UIAspectRatioConstraint;
		Health: Frame & {
			UIGradient: UIGradient;
			UIPadding: UIPadding;
			Inside: Frame & {
				UIStroke: UIStroke;
				UIPadding: UIPadding;
				Bar: Frame;
			};
		};
	};
	BottomRight: Frame & {
		AlphaWarning: TextLabel;
		Weapons: Frame & {
			UIGradient: UIGradient;
			UIPadding: UIPadding;
			Inside: Frame & {
				UIStroke: UIStroke;
				UIPadding: UIPadding;
				Icon: ImageLabel;
			};
		};
		UIPadding: UIPadding;
		UIAspectRatioConstraint: UIAspectRatioConstraint;
	};
	Main: LocalScript;
	BottomLeft: Frame & {
		Equipment: Frame & {
			UIGradient: UIGradient;
			UIPadding: UIPadding;
			Inside: Frame & {
				UIStroke: UIStroke;
				UIPadding: UIPadding;
				Icon: ImageLabel;
			};
		};
		UIPadding: UIPadding;
		UIAspectRatioConstraint: UIAspectRatioConstraint;
	};
	TopRight: Frame & {
		UIAspectRatioConstraint: UIAspectRatioConstraint;
		UIPadding: UIPadding;
	};
	Frame: Frame & {
		UICorner: UICorner;
		UIStroke: UIStroke;
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
}
