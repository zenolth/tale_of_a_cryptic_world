//!native
//!optimize 2

import { MathUtils } from "./utils/mathUtils";

const MAX_ANGLE = math.pi * 2;

export class Angles {
    public pitch: number;
    public yaw: number;
    public roll: number;

    constructor(pitch: number = 0,yaw: number = 0,roll: number = 0) {
        this.pitch = pitch;
        this.yaw = yaw;
        this.roll = roll;
    }

    public diff(other: Angles) {
        return new Angles(
            MathUtils.angleDiffRad(this.pitch,other.pitch),
            MathUtils.angleDiffRad(this.yaw,other.yaw),
            MathUtils.angleDiffRad(this.roll,other.roll)
        );
    }

    public lerp(other: Angles,alpha: number) {
        const pitchDiff = math.fmod(other.pitch - this.pitch,MAX_ANGLE);
        const yawDiff = math.fmod(other.yaw - this.yaw,MAX_ANGLE);
        const rollDiff =  math.fmod(other.roll - this.roll,MAX_ANGLE);

        const pitchShortestDist = math.fmod(2 * pitchDiff,MAX_ANGLE) - pitchDiff;
        const yawShortestDist = math.fmod(2 * yawDiff,MAX_ANGLE) - yawDiff;
        const rollShortestDist = math.fmod(2 * rollDiff,MAX_ANGLE) - rollDiff;

        return new Angles(
            this.pitch + pitchShortestDist * alpha,
            this.yaw + yawShortestDist * alpha,
            this.roll + rollShortestDist * alpha
        );
    }

    public toString() {
        return `[${this.pitch},${this.yaw},${this.roll}]`;
    }
}