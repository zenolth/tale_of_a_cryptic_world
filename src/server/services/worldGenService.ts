//!native
//!optimize 2

import { OnStart, Service } from "@flamework/core";
import { Object } from "@rbxts/jsnatives";

import { RunService, ServerStorage, Workspace } from "@rbxts/services";
import { NoiseGroup, PerlinNoise} from "shared/classes/noise";
import { Limits } from "shared/types";
import { MathUtils } from "shared/utils/mathUtils";
import PoissonDiscSampler from "shared/utils/random/poissonDiscSampling";
import WeightedRandom from "shared/utils/random/weightedRandom";

const Terrain = Workspace.Terrain;

const Trees = ServerStorage.Assets.Trees.GetChildren() as Model[];

export enum WorldState {
    Generating,
    Generated
}

@Service()
export class WorldGenService implements OnStart {
    defaultMaterial: Enum.Material = Enum.Material.Snow;

    seed = tick();
    random: Random = new Random(this.seed);

    boundSize: number = 100;
    boundHeight: number = 500;

    size = new Vector3(800,60,800).add(new Vector3(this.boundSize,0,this.boundSize));
    halfSize = this.size.div(2);

    chunkSize: number = 3200;

    defaultBallSize = 5;
    halfBallSize = this.defaultBallSize / 2;

    borderBallSize = 10;

    caveSize: Limits<number> = new Limits(7,11);

    noiseGroup = new NoiseGroup([],(_1,_2,_3) => this.heightModifierFunction(_1,_2,_3));
    materialingNoise = new PerlinNoise(this.seed,1,0.05);
    boundJiggleNoise = new PerlinNoise(this.seed,this.boundSize / 5,0.1);

    treeRandom: WeightedRandom<Model> = new WeightedRandom(this.seed,Trees,model => model.GetAttribute("Weight") as number);

    _worldState: WorldState = WorldState.Generating;

    forEachPos(func: (x: number,z: number) => void,noBounds: boolean = true,shouldYield: boolean = false) {
        let sizeX = this.halfSize.X;
        let sizeZ = this.halfSize.Z;
        if (noBounds) {
            sizeX -= this.boundSize;
            sizeZ -= this.boundSize;
        }

        const step = this.halfBallSize;

        const numX = math.floor((2 * sizeX) / step) + 1;
        const numZ = math.floor((2 * sizeZ) / step) + 1;

        const area = numX * numZ;

        for (let k = 0; k < area; k += this.chunkSize) {
            task.spawn(() => {
                for (let l = 0; l <= this.chunkSize; l++) {
                    const fixedK = k + l;
                    const i = math.floor(fixedK / numX);
                    const j = fixedK % numZ;
                    const x = -sizeX + i * step;
                    const z = -sizeZ + j * step;
                    func(x,z);
                }
            });
            if (shouldYield) RunService.PreSimulation.Wait();
        }
    }

    getSizeWithoutBounds() {
        return this.size.sub(new Vector3(this.boundSize,0,this.boundSize));
    }

    public getWorldState() {
        return this._worldState;
    }

    private heightModifierFunction(x: number,y: number,height: number) {
        const dist = new Vector2(x,y).sub(Vector2.zero).Magnitude;
        const normalizedDist = math.clamp(dist / this.halfSize.X,0,1);
        const largestSide = math.max(this.getSizeWithoutBounds().div(2).X,this.getSizeWithoutBounds().div(2).Z);
        const boundDist = (largestSide * MathUtils.sqrtOf2) / 2 + this.boundJiggleNoise.at(x,y);
        if (dist >= boundDist) {
            const borderPos = 10 * math.pow(normalizedDist,2);
            //print(borderPos);
            return (math.abs(height) * borderPos) + height;
        }
        return height;
    }

    private buildBoundPart(cframe: CFrame) {
        const boundPart = new Instance("Part");
        boundPart.Name = "Bound";
        boundPart.Transparency = 0.5;
        boundPart.Material = Enum.Material.ForceField;
        boundPart.Anchored = true;
        boundPart.CFrame = cframe;
        boundPart.Size = new Vector3(math.max(this.size.X,this.size.Z),this.boundHeight,this.boundSize);
        boundPart.AudioCanCollide = false;
        boundPart.CastShadow = false;
        boundPart.Parent = Workspace.World.Bounds;
    }

    generateTerrain() {
        this.forEachPos((x,z) => {
            const height = this.noiseGroup.at(x,z);
            
            task.spawn((posX: number,posZ: number,minY: number,maxY: number,radius: number) => {
                for (let y = minY; y <= maxY; y += this.halfBallSize) {
                    let material = this.defaultMaterial;

                    const n = this.materialingNoise.at(posX,y,posZ);

                    if (n > 0.9 && y > this.halfSize.Y) {
                        material = Enum.Material.Rock;
                    } else if (n > 0.7) {
                        material = Enum.Material.Glacier;
                    }

                    Terrain.FillBall(new Vector3(posX,y,posZ),radius,material);
                }
            },x,z,-this.size.Y,height,this.defaultBallSize);
        },false,true);
        
        const halfSizeNoBound = this.getSizeWithoutBounds().div(2);
        const boundX = halfSizeNoBound.X - this.boundSize;
        const boundZ = halfSizeNoBound.Z - this.boundSize;

        for (let x = -boundX; x <= boundX; x += boundX * 2) {
            this.buildBoundPart(CFrame.lookAt(
                new Vector3(x,this.halfSize.Y,0),
                Vector3.yAxis.mul(this.halfSize.Y)
            ));
        }
        for (let z = -boundZ; z <= boundZ; z += boundZ * 2) {
            this.buildBoundPart(CFrame.lookAt(
                new Vector3(0,this.halfSize.Y,z),
                Vector3.yAxis.mul(this.halfSize.Y)
            ));
        }

        /*this.forEachPos((x,z) => {
            const dx = math.abs(this.halfSize.X - math.abs(x));
            const dz = math.abs(this.halfSize.Z - math.abs(z));
            print(dx,dz);
            if (dx > 1 || dz > 1) return;
            //print(x,z);
            Terrain.FillBall(new Vector3(x,this.noiseGroup.at(x,z),z),this.borderBallSize,Enum.Material.Rock);
        });*/
    }

    generateTrees() {
        const points = PoissonDiscSampler.generatePoints(this.seed,55,new Vector2(this.size.X,this.size.Z));

        for (let pos of points) {
            pos = pos.sub(new Vector2(this.halfSize.X,this.halfSize.Z));
            const tree = this.treeRandom.get();
            if (!tree) continue;
            const treeClone = tree.Clone();
            const height = this.noiseGroup.at(pos.X,pos.Y);
            treeClone.Parent = Workspace.World.Trees;
            treeClone.PivotTo(
                new CFrame(pos.X,height,pos.Y)
                .mul(CFrame.Angles(math.rad(this.random.NextNumber(-10,10)),math.rad(this.random.NextNumber(-180,180)),math.rad(this.random.NextNumber(-10,10))))
            );
            treeClone.ScaleTo(this.random.NextNumber(0.7,1.6));
        }
    }

    generate() {
        this._worldState = WorldState.Generating;
        this.generateTerrain();
        this.generateTrees();
        this._worldState = WorldState.Generated;
    }

    onStart(): void {
        this.noiseGroup.evaluateFbm(this.seed,15,0.01,10,0.2,6);
        //this.generate();
    }
}