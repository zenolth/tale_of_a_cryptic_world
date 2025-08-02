//!native
//!optimize 2

export interface NoiseGenerator {
    at(x: number,y: number | undefined,z: number | undefined): number;
}

export class PerlinNoise implements NoiseGenerator {
    random: Random;

    seed: number;

    origin: Vector3;
    amplitude: number;
    frequency: number;

    constructor(seed: number,amplitude: number,frequency: number) {
        this.random = new Random(seed);
        this.seed = seed;
        this.origin = new Vector3(this.random.NextNumber(-100000,100000),this.random.NextNumber(-100000,100000),this.random.NextNumber(-100000,100000));
        this.amplitude = amplitude;
        this.frequency = frequency;
    }

    at(x: number,y: number | undefined = 0,z: number | undefined = 0) {
        const sampleX = x * this.frequency + this.origin.X + 0.01;
        const sampleY = y * this.frequency + this.origin.Y + 0.01;
        const sampleZ = z * this.frequency + this.origin.Z + 0.01;
        const noise = math.map(
            math.clamp(math.noise(sampleX,sampleY,sampleZ),-0.5,0.5),
            -0.5,0.5,
            -1,1
        );
        const height = noise * this.amplitude;
        return height;
    }

    copy(seed: number | undefined,amplitude: number | undefined, frequency: number | undefined): PerlinNoise {
        return new PerlinNoise(seed || this.seed,amplitude || this.amplitude,frequency || this.frequency);
    }
}

export class NoiseGroup implements NoiseGenerator {

    constructor(
        public noiseGenerators: Array<NoiseGenerator>,
        private heightModFunction: (x: number,y: number,oldHeight: number) => number = (_1,_2,height) => height
    ) {}

    evaluateFbm(seed: number,amplitude: number,frequency: number,octaveCount: number,persistence: number,lacunarity: number) {
        for (let i = 0; i < octaveCount; i++) {
            this.noiseGenerators.push(new PerlinNoise(seed,amplitude,frequency));
            amplitude *= persistence;
            frequency *= lacunarity;
        }
    }

    at(x: number, y: number | undefined = 0, z: number | undefined = 0): number {
        let height = 0;
        
        for (const generator of this.noiseGenerators) {
            height += generator.at(x,y,z);
        }

        return this.heightModFunction(x,y,height);
    }
}