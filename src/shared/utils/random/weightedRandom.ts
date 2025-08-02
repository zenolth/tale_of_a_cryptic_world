import { Object } from "@rbxts/jsnatives";

export default class WeightedRandom<T> {
    private random: Random;

    constructor(private seed: number = tick(),private objects: Array<T>,private weightProvider: (obj: T) => number) {
        this.random = new Random(this.seed);
    }

    public get(): T | undefined {
        const weights: Map<T,number> = new Map();

        for (const value of this.objects) {
            weights.set(value,math.clamp(this.weightProvider(value),0,1));
        }

        let weight = 0;

        for (const [,value] of weights) {
            weight += value;
        }

        //const randomNumber = this.random.NextNumber(0.1,weight);
        const randomNumber = this.random.NextNumber(0,1);

        weight = 0;
        let result: T | undefined = undefined;

        for (const [key,value] of weights) {
            weight += value;
            result = key;
            if (weight >= randomNumber) break;
        }

        return result;
    }
}