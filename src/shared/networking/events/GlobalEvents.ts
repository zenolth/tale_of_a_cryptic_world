//!native
//!optimize 2

import { Networking } from "@flamework/networking";

interface ClientToServerEvents {
    syncProperty: Networking.Unreliable<(id: string,propertyName: string,newValue: any) => void>;
}

interface ServerToClientEvents {
    syncProperty(): void
}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents,ServerToClientEvents>();