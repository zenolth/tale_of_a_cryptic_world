//!native
//!optimize 2

import { Flamework } from "@flamework/core";
import { MathUtils } from "shared/utils/mathUtils";

/*let lastTick = tick();

const numberToSqrt = math.pow(10,10);
print(`inverse square root of ${numberToSqrt}`);

const builtInInvSqrt = 1 / math.sqrt(numberToSqrt);
print(`built-in inverse square root : ${(tick() - lastTick) * 1000}ms`);
print(`result : ${builtInInvSqrt}`);

lastTick = tick();
const quakeInvSqrt = MathUtils.Qrsqrt(numberToSqrt);
print(`quake 3 inverse square root : ${(tick() - lastTick) * 1000}ms`);
print(`result : ${quakeInvSqrt}`);*/


Flamework.addPaths("src/server/services");
Flamework.addPaths("src/server/components");
Flamework.addPaths("src/shared/components");

Flamework.ignite();