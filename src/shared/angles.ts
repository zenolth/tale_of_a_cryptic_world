//!native

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

    public Lerp(otherAngles: Angles,alpha: number) {
        const pitchDiff = math.fmod(otherAngles.pitch - this.pitch,MAX_ANGLE);
        const yawDiff = math.fmod(otherAngles.yaw - this.yaw,MAX_ANGLE);
        const rollDiff =  math.fmod(otherAngles.roll - this.roll,MAX_ANGLE);

        const pitchShortestDist = math.fmod(2 * pitchDiff,MAX_ANGLE) - pitchDiff;
        const yawShortestDist = math.fmod(2 * yawDiff,MAX_ANGLE) - yawDiff;
        const rollShortestDist = math.fmod(2 * rollDiff,MAX_ANGLE) - rollDiff;

        return new Angles(
            this.pitch + pitchShortestDist * alpha,
            this.yaw + yawShortestDist * alpha,
            this.roll + rollShortestDist * alpha
        );
    }
}