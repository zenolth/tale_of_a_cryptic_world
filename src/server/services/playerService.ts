//!native
//!optimize 2

import { Dependency, OnStart, Service } from "@flamework/core";

import { OnPlayerJoined, OnPlayerRemoving } from "./playerEvents";

import { Events } from "server/networking";

import { Components } from "@flamework/components";
import { PlayerComponent } from "server/components/playerComponent";

@Service()
export class PlayerService implements OnStart,OnPlayerJoined, OnPlayerRemoving {
    private components = Dependency<Components>();

    onStart(): void {
        Events.characterChangeState.connect(async (player,state) => {
            const playerComponent = this.components.getComponent<PlayerComponent>(player);
            playerComponent?.changeState(state);
        });
    }

    onPlayerJoined(player: Player): void {
        this.components.addComponent<PlayerComponent>(player);
    }

    onPlayerRemoving(player: Player): void {
        this.components.removeComponent<PlayerComponent>(player);
    }
}