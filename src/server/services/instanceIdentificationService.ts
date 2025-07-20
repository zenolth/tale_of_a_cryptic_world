//!native
import { OnStart, Service } from "@flamework/core";
import { HttpService } from "@rbxts/services";

@Service()
export class InstanceIdentificationService implements OnStart {
    private instances: Map<string,Instance> = new Map();

    onStart(): void {
        for (const instance of game.GetDescendants()) {
            this.onInstanceAdded(instance);
        }
        game.DescendantAdded.Connect(i => this.onInstanceAdded(i));
        game.DescendantRemoving.Connect(i => this.onInstanceAdded(i));
    }

    public getInstance(id: string) {
        if (!this.instances.has(id)) { // very spooky edge-case
            for (const instance of game.GetDescendants()) {
                if (instance.GetAttribute("UUID") === id) return instance;
            }
        }
        return this.instances.get(id);
    }

    private onInstanceAdded(instance: Instance) {
        let newId = HttpService.GenerateGUID(false);
        while (this.instances.has(newId)) newId = HttpService.GenerateGUID(false);
        this.instances.set(newId,instance);
        instance.SetAttribute("UUID",newId);
    }

    private onInstanceRemoved(instance: Instance) {
        const idAttr = instance.GetAttribute("UUID");
        if (idAttr === undefined) return;
        const id = idAttr as string;
        if (this.instances.has(id)) {
            this.instances.delete(id);
        }
    }
}