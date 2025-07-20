//!native
// TODO: Please create a transformer that makes every file native
import { Flamework } from "@flamework/core";

Flamework.addPaths("src/client/controllers");
Flamework.addPaths("src/client/components");
Flamework.addPaths("src/shared/components");

Flamework.ignite();