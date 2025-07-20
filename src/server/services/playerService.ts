//!native
import { Dependency, Service } from "@flamework/core";

import { OnPlayerJoined, OnPlayerRemoving } from "./playerEvents";

import { Components } from "@flamework/components";
import { PlayerComponent } from "server/components/playerComponent";

@Service()
export class PlayerService implements OnPlayerJoined, OnPlayerRemoving {
    private components = Dependency<Components>();

    onPlayerJoined(player: Player): void {
        this.components.addComponent<PlayerComponent>(player);
    }

    onPlayerRemoving(player: Player): void {
        this.components.removeComponent<PlayerComponent>(player);
    }
}