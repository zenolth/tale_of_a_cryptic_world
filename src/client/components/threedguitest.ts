import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import screenGen from "@rbxts/screen3d";

@Component({tag: "3dguitest"})
export class ThreeDGuiTest extends BaseComponent<{},test> implements OnStart {
    onStart(): void {
        print("a");
        const screen3D = new screenGen(this.instance,5);
        const component3D = screen3D.GetComponent3D(this.instance.Frame);
        component3D.Enable();
        component3D.offset = CFrame.Angles(0,math.rad(10),0);
    }
}