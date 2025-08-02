//!native
//!optimize 2

import { ReplicatedStorage } from "@rbxts/services";

export type ColliderShape = ReplicatedStorage["Assets"]["Collider"];
export type MovementManager = ReplicatedStorage["Assets"]["ControllerManager"];
export type Viewmodel = ReplicatedStorage["Assets"]["Viewmodel"];

export class Limits<T> {
    public min: T;
    public max: T;

    public constructor(min: T,max: T) {
        this.min = min;
        this.max = max;
    }
}