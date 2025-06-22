

export namespace MathUtils {
    export function Lerp(from: number,to: number,weight: number) {
        return from + (to - from) * weight;
    }
    export function AngleDiffRad(from: number,to: number) {
        return ((from - to) + math.pi) % (math.pi * 2) - math.pi
    }
    export function AngleDiffDeg(from: number,to: number) {
        return ((from - to) + 180) % (360) - 180
    }
}