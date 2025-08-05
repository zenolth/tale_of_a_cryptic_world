//!native
//!optimize 2

import { Controller, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import { Events } from "client/networking";
import { getInstanceProperty } from "shared/utils/evilUtils";

const SYNCABLE_PROPERTIES = new Set(["Size","C0","C1","WalkSpeed","Health"]);
const SYNCABLE_CLASSES: Set<keyof Instances> = new Set(["Camera","Humanoid"]);

@Controller()
export class PropertySyncController implements OnStart {
    player: Player = Players.LocalPlayer;

    connectedIds: Set<string> = new Set();

    //characterMaid: Maid = new Maid();

    onStart(): void {
        this.player.CharacterAdded.Connect(m => this.onCharacterAdded(m));
    }

    handleInstance(instance: Instance) {
        //if (instance.IsA("BasePart") && instance.Anchored === false) return;
        (instance as Instance & ChangedSignal).Changed.Connect(propertyName => {
            if (!SYNCABLE_PROPERTIES.has(propertyName) || !SYNCABLE_CLASSES.has(instance.ClassName as keyof Instances)) return;
            Events.syncProperty(instance.GetAttribute("UUID") as string,propertyName,getInstanceProperty(instance,propertyName as keyof Instance));
        });
    }

    onCharacterAdded(character: Model) {
        this.connectedIds.clear();

        for (const instance of character.GetDescendants()) {
            if (instance.GetAttribute("UUID") === undefined) continue;
            this.connectedIds.add(instance.GetAttribute("UUID") as string);
            this.handleInstance(instance);
        }

        character.DescendantAdded.Connect(instance => {
            if (instance.GetAttribute("UUID") === undefined) return;
            if (this.connectedIds.has(instance.GetAttribute("UUID") as string)) return;
            this.connectedIds.add(instance.GetAttribute("UUID") as string);
            this.handleInstance(instance);
        });
    }
}