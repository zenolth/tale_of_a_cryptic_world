//!native
import { OnStart, Service } from "@flamework/core";

import { RunService, Workspace } from "@rbxts/services";
import { NoiseGroup} from "shared/classes/noise";
import { Limits } from "shared/types";

const Terrain = Workspace.Terrain;

export enum WorldState {
    Generating,
    Generated
}

@Service()
export class WorldGenService implements OnStart {
    defaultMaterial: Enum.Material = Enum.Material.Snow;

    seed = tick();
    random: Random = new Random(this.seed);

    size = new Vector3(400,120,400);
    halfSize = this.size.div(2);

    defaultBallSize = 5;
    halfBallSize = this.defaultBallSize / 2;

    borderBallSize = 10;

    caveSize: Limits<number> = new Limits(7,11);

    noiseGroup = new NoiseGroup([]);

    _worldState: WorldState = WorldState.Generating;

    forEachPos(func: (x: number,z: number) => void,yieldX: boolean = false,yieldZ: boolean = false) {
        for (let x = -this.halfSize.X; x <= this.halfSize.X; x += this.halfBallSize) {
            for (let z = -this.halfSize.Z; z <= this.halfSize.Z; z += this.halfBallSize) {
                func(x,z);
                if (yieldZ) RunService.Heartbeat.Wait();
            }
            if (yieldX) RunService.Heartbeat.Wait();
        }
    }

    public getWorldState() {
        return this._worldState;
    }

    generateTerrain() {
        this.forEachPos((x,z) => {
            const height = this.noiseGroup.at(x,z);
            task.spawn((posX: number,posZ: number,minY: number,maxY: number,radius: number,material: Enum.Material) => {
                for (let y = minY; y <= maxY; y += this.halfBallSize) {
                    Terrain.FillBall(new Vector3(posX,y,posZ),radius,material);
                }
            },x,z,-this.size.Y,height,this.defaultBallSize,this.defaultMaterial);
        },true);

        this.forEachPos((x,z) => {
            if (math.abs(x) !== this.size.X || math.abs(z) !== this.size.Z) return;
            Terrain.FillBall(new Vector3(x,3,z),this.borderBallSize,Enum.Material.Rock);
        });
    }

    generate() {
        this._worldState = WorldState.Generating;
        this.generateTerrain();
        this._worldState = WorldState.Generated;
    }

    onStart(): void {
        this.noiseGroup.evaluateFbm(this.seed,15,0.01,10,0.2,6);
        this.generate();
    }
}