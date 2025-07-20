//!native

export interface NoiseGenerator {
    at(x: number,y: number): number;
}

export class PerlinNoise implements NoiseGenerator {
    random: Random;

    seed: number;

    origin: Vector2;
    amplitude: number;
    frequency: number;

    constructor(seed: number,amplitude: number,frequency: number) {
        this.random = new Random(seed);
        this.seed = seed;
        this.origin = new Vector2(this.random.NextNumber(-100000,100000),this.random.NextNumber(-100000,100000));
        this.amplitude = amplitude;
        this.frequency = frequency;
    }

    at(x: number,y: number) {
        const sampleX = x * this.frequency + this.origin.X + 0.01;
        const sampleY = y * this.frequency + this.origin.Y + 0.01;
        const noise = math.map(
            math.clamp(math.noise(sampleX,sampleY),-0.5,0.5),
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
    public noiseGenerators: Array<NoiseGenerator>;

    constructor(noiseGenerators: Array<NoiseGenerator>) {
        this.noiseGenerators = noiseGenerators;
    }

    evaluateFbm(seed: number,amplitude: number,frequency: number,octaveCount: number,persistence: number,lacunarity: number) {
        for (let i = 0; i < octaveCount; i++) {
            this.noiseGenerators.push(new PerlinNoise(seed,amplitude,frequency));
            amplitude *= persistence;
            frequency *= lacunarity;
        }
    }

    at(x: number, y: number): number {
        let height = 0;
        
        for (const generator of this.noiseGenerators) {
            height += generator.at(x,y);
        }

        return height;
    }
}