const MAX_ANGLE = math.pi * 2;

export class Angles {
    public Pitch: number;
    public Yaw: number;
    public Roll: number;

    constructor(pitch: number = 0,yaw: number = 0,roll: number = 0) {
        this.Pitch = pitch;
        this.Yaw = yaw;
        this.Roll = roll;
    }

    public Lerp(otherAngles: Angles,alpha: number) {
        let pitchDiff = math.fmod(otherAngles.Pitch - this.Pitch,MAX_ANGLE);
        let yawDiff = math.fmod(otherAngles.Yaw - this.Yaw,MAX_ANGLE);
        let rollDiff =  math.fmod(otherAngles.Roll - this.Roll,MAX_ANGLE);

        let pitchShortestDist = math.fmod(2 * pitchDiff,MAX_ANGLE) - pitchDiff;
        let yawShortestDist = math.fmod(2 * yawDiff,MAX_ANGLE) - yawDiff;
        let rollShortestDist = math.fmod(2 * rollDiff,MAX_ANGLE) - rollDiff;

        return new Angles(
            this.Pitch + pitchShortestDist * alpha,
            this.Yaw + yawShortestDist * alpha,
            this.Roll + rollShortestDist * alpha
        )
    }
}