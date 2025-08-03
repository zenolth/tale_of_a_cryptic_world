import { BaseComponent, Component } from "@flamework/components";
import { Flamework, OnStart } from "@flamework/core";
import screenGen from "@rbxts/screen3d";



@Component({
    tag: "hud",
    instanceGuard: Flamework.createGuard<any>()
})
export class HUDComponent extends BaseComponent<{},HUD> implements OnStart {
    onStart(): void {
        print("Hud loaded.");
        const screen3D = new screenGen(this.instance,5);
        const topLeft = screen3D.GetComponent3D(this.instance.TopLeft);
        const topRight = screen3D.GetComponent3D(this.instance.TopRight);
        const bottomLeft = screen3D.GetComponent3D(this.instance.BottomLeft);
        const bottomRight = screen3D.GetComponent3D(this.instance.BottomRight);
        
        topLeft.Enable();
        topLeft.offset = CFrame.Angles(0,math.rad(5),0);

        topRight.Enable();
        topRight.offset = CFrame.Angles(0,math.rad(-5),0);

        bottomLeft.Enable();
        bottomLeft.offset = CFrame.Angles(0,math.rad(5),0);

        bottomRight.Enable();
        bottomRight.offset = CFrame.Angles(0,math.rad(-5),0);
        
        /*component3D.Enable();
        component3D.offset = CFrame.Angles(0,math.rad(10),0);*/
    }
}