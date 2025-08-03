import { Controller, Modding, OnStart } from "@flamework/core";
import { RunService } from "@rbxts/services";

export interface OnRenderStep {
    renderStepName: string;
    renderStepPriority: number;
    onRenderStep(frameTime: number): void;
}

@Controller()
export class RenderStepController implements OnStart {
    onStart(): void {
        Modding.onListenerAdded<OnRenderStep>(o => RunService.BindToRenderStep(o.renderStepName,o.renderStepPriority,ft => o.onRenderStep(ft)));
        Modding.onListenerRemoved<OnRenderStep>(o => RunService.UnbindFromRenderStep(o.renderStepName));
    }
}