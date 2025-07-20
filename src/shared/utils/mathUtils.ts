//!native

export namespace MathUtils {
    export const tau: number = math.pi * 2;
    export function lerp(from: number,to: number,weight: number) {
        return from + (to - from) * weight;
    }
    export function angleLerp(from: number,to: number,weight: number) {
        const diff = math.fmod(to - from,tau);
        const shortAngDiff = math.fmod(2 * diff,tau) - diff;
        return from + shortAngDiff * weight;
    }
    export function angleDiffRad(from: number,to: number) {
        return ((from - to) + math.pi) % (math.pi * 2) - math.pi;
    }
    export function angleDiffDeg(from: number,to: number) {
        return ((from - to) + 180) % (360) - 180;
    }

    const buff = buffer.create(32);
    const threehalfs = 1.5;
    export function Qrsqrt(num: number) {
        const x2 = num * 0.5;
        buffer.writef32(buff,0,num);                                        // evil floating point bit level hacking
        buffer.writei32(buff,0,0x5f3759df - (buffer.readi32(buff,0) >> 1)); // what the fuck?
        let y = buffer.readf32(buff,0);
        y = y * (threehalfs - (x2 * y * y));                                // 1st iteration
    //  y = y * (threehalfs - (x2 * y * y));                             // 2nd iteration, this can be removed
        return y;
    }
}