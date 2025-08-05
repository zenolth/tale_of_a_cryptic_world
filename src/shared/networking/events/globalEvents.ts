//!native
//!optimize 2

import { Networking } from "@flamework/networking";

interface ClientToServerEvents {
    syncProperty: Networking.Unreliable<(id: string,propertyName: string,newValue: any) => void>;
    characterChangeState: Networking.Unreliable<(state: Enum.HumanoidStateType) => void>
}

interface ServerToClientEvents {
    syncProperty(): void
}

export const GLOBAL_EVENTS = Networking.createEvent<ClientToServerEvents,ServerToClientEvents>();