import { BaseComponent, Component } from "@flamework/components";
import { Flamework, OnRender, OnStart } from "@flamework/core";
import screenGen from "@rbxts/screen3d";
import { CameraController } from "client/controllers/cameraController";
import { CharacterController } from "client/controllers/characterController";



@Component({
    tag: "hud",
    instanceGuard: Flamework.createGuard<any>()
})
export class HUDComponent extends BaseComponent<{},HUD> implements OnStart,OnRender {

    private screen3D = new screenGen(this.instance,5);
    private topLeft = this.screen3D.GetComponent3D(this.instance.TopLeft);
    private topRight = this.screen3D.GetComponent3D(this.instance.TopRight);
    private bottomLeft = this.screen3D.GetComponent3D(this.instance.BottomLeft);
    private bottomRight = this.screen3D.GetComponent3D(this.instance.BottomRight);

    private hudOffset = new Vector3();

    constructor(private cameraController: CameraController, private characterController: CharacterController) { super(); }

    onStart(): void {
        this.topLeft = this.topLeft.Enable();
        this.topRight = this.topRight.Enable();
        this.bottomLeft = this.bottomLeft.Enable();
        this.bottomRight = this.bottomRight.Enable();

        this.topLeft.offset = CFrame.Angles(0,math.rad(5),0);
        this.topRight.offset = CFrame.Angles(0,math.rad(-5),0);
        this.bottomLeft.offset = CFrame.Angles(0,math.rad(5),0);
        this.bottomRight.offset = CFrame.Angles(0,math.rad(-5),0);
    }

    onRender(frameTime: number): void {
        if (this.characterController.humanoid === undefined) return;
        const oldUdim = this.topLeft.component2D.Health.Inside.Bar.Size;
        const newUdim = new UDim2(this.characterController.humanoid.Health / this.characterController.humanoid.MaxHealth,0,1,0);
        this.topLeft.component2D.Health.Inside.Bar.Size = oldUdim.Lerp(newUdim,math.pow(15 * frameTime,0.5));

        const oldOffset = this.hudOffset;
        const newOffset = new Vector3(this.cameraController.deltaRotation.yaw * 0.2,this.cameraController.deltaRotation.pitch * 0.2,0);
        this.hudOffset = oldOffset.Lerp(newOffset,math.pow(10 * frameTime,0.5));

        this.screen3D.rootOffset = CFrame.Angles(0,math.rad(this.hudOffset.X * 10),0)
                                        .mul(CFrame.Angles(math.rad(this.hudOffset.Y * 20),0,0))
                                        .mul(CFrame.Angles(0,0,math.rad(this.hudOffset.X * 10)));
        
        
    }
}