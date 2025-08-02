//!native
//!optimize 2

import { Controller, OnRender, OnStart } from "@flamework/core";

import Maid from "@rbxts/maid";
import { Players } from "@rbxts/services";

import { loadAnimation } from "shared/utils/animUtils";

type AnimationName = "Idle" | "Walk" | "Run" | "Jump" | "Fall" | "Land" | "LandHard";

const ANIMATION_IDS: Map<AnimationName,string> = new Map([
    ["Idle","rbxassetid://87696746402134"],
    ["Walk","rbxassetid://96338035304134"],
    ["Run","rbxassetid://96669465675101"],
    ["Jump","rbxassetid://124135786838696"],
    ["Fall","rbxassetid://96272788299974"],
    ["Land","rbxassetid://75390025973868"],
    ["LandHard","rbxassetid://124031876573046"]
]);

@Controller()
export class MovementAnimationController implements OnStart,OnRender {
    player: Player = Players.LocalPlayer;
    character: Model | undefined;

    humanoid: Humanoid | undefined;
    animator: Animator | undefined;

    fallVelocity: Vector3 = Vector3.zero;

    tracks: Map<AnimationName,AnimationTrack> = new Map();

    playerMaid: Maid = new Maid();
    characterMaid: Maid = new Maid();

    onStart(): void {
        this.playerMaid.GiveTask(this.player.CharacterAdded.Connect((character) => this.onCharacterAdd(character)));
        this.playerMaid.GiveTask(this.player.Destroying.Connect(() => this.cleanup()));
    }

    onRender(frameTime: number): void {
        if (this.humanoid === undefined || this.humanoid.RootPart === undefined) return;

        const state = this.humanoid.GetState();

        switch (state) {
            case Enum.HumanoidStateType.Running:
                if (this.humanoid.MoveDirection.Magnitude > 0.1) {
                    if (this.humanoid.WalkSpeed > 17) {
                        this.play("Run",0.1);
                    } else {
                        this.play("Walk",0.1);
                    }
                } else {
                    this.play("Idle",0.1);
                }
                break;
            case Enum.HumanoidStateType.Freefall:
                this.fallVelocity = this.humanoid.RootPart.AssemblyLinearVelocity;
                this.play("Fall",0.1);
                break;
        }
    }

    private play(name: AnimationName,fadeTime: number = 0) {
        const track = this.tracks.get(name);
        if (track !== undefined && !track.Looped) {
            track.Play(fadeTime);
        }

        this.tracks.forEach((track,trackName) => {
            if (!track.Looped) {
                return;
            }
            if (trackName === name) {
                if (!track.IsPlaying) track.Play(fadeTime);
            } else {
                if (track.IsPlaying) track.Stop(fadeTime);
            }
        });
    }

    public isPlaying(name: AnimationName) {
        if (!this.tracks.has(name)) return false;
        return this.tracks.get(name)?.IsPlaying;
    }

    public getTrack(name: AnimationName) {
        return this.tracks.get(name);
    }

    private onStateChange(previousState: Enum.HumanoidStateType,state: Enum.HumanoidStateType) {
        if (state === Enum.HumanoidStateType.Landed) {
            const yVelocity = math.abs(this.fallVelocity.Y);
            if (yVelocity > 40 && yVelocity < 60) {
                this.play("Land");
            } else if (yVelocity >= 60) {
                this.play("LandHard");
            }
            return;
        }

        if (state === Enum.HumanoidStateType.Jumping) this.play("Jump");
    }

    private onCharacterAdd(character: Model) {
        this.character = character;

        this.humanoid = this.character.WaitForChild("Humanoid") as Humanoid;
        this.animator = this.humanoid.WaitForChild("Animator") as Animator;

        ANIMATION_IDS.forEach((id,name) => {
            this.tracks.set(name,loadAnimation(this.animator as Animator,id));
            const track = this.tracks.get(name);
            if (track !== undefined)
                this.characterMaid.GiveTask(track);
        });

        /*this.CharacterMaid.GiveTask(this.Humanoid.Running.Connect((speed) => {
            if (speed > 0) {
                this.Play("Walk",0.5);
            } else {
                this.Play("Idle",0.5);
            }
        }));*/

        this.characterMaid.GiveTask(this.humanoid.StateChanged.Connect((o,n) => this.onStateChange(o,n)));

        this.characterMaid.GiveTask(this.character.Destroying.Connect(() => this.cleanupCharacter()));
    }

    private cleanupCharacter() {
        this.characterMaid.Destroy();
    }

    private cleanup() {
        this.cleanupCharacter();
        this.playerMaid.Destroy();
    }
}