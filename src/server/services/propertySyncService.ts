//!native
//!optimize 2

import { OnStart, Service } from "@flamework/core";
import { Events } from "server/networking";
import { InstanceIdentificationService } from "./instanceIdentificationService";
import { setInstanceProperty } from "shared/utils/evilUtils";


@Service()
export class PropertySyncService implements OnStart {
    constructor(private instanceIdService: InstanceIdentificationService) { }

    onStart(): void {
        Events.syncProperty.connect((player,id,propertyName,newValue) => {
            //print(`${propertyName}: ${newValue}`);
            const instance = this.instanceIdService.getInstance(id);
            if (instance === undefined) return;
            try {
                setInstanceProperty(instance,propertyName as keyof Instance,newValue);
            } finally {

            }
        });
    }
}