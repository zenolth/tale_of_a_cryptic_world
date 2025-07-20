//!native
import { Modding, OnStart, Service } from "@flamework/core";
import { Players } from "@rbxts/services";

export interface OnPlayerJoined {
    onPlayerJoined(player: Player): void;
}

export interface OnPlayerRemoving {
    onPlayerRemoving(player: Player): void;
}

@Service()
export class PlayerEvents implements OnStart {
    private joinListeners = new Set<OnPlayerJoined>();
    private removeListeners = new Set<OnPlayerRemoving>();

    onStart(): void {
        Modding.onListenerAdded<OnPlayerJoined>((o) => this.joinListeners.add(o));
        Modding.onListenerRemoved<OnPlayerJoined>((o) => this.joinListeners.delete(o));

        Modding.onListenerAdded<OnPlayerRemoving>((o) => this.removeListeners.add(o));
        Modding.onListenerRemoved<OnPlayerRemoving>((o) => this.removeListeners.delete(o));

        Players.PlayerAdded.Connect((p) => this.onPlayerJoined(p));
        Players.PlayerRemoving.Connect((p) => this.onPlayerRemoved(p));

        for (const player of Players.GetPlayers()) {
            this.onPlayerJoined(player);
        }
    }

    private onPlayerJoined(player: Player) {
        for (const listener of this.joinListeners) {
            listener.onPlayerJoined(player);
        }
    }

    private onPlayerRemoved(player: Player) {
        for (const listener of this.removeListeners) {
            listener.onPlayerRemoving(player);
        }
    }
}