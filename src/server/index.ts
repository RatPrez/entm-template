import { System } from "@ratprez/entm";
import type { World } from "@ratprez/entm";

declare function __registerModule(init: (world: World) => void): void;

// --- systems ---

class ExampleSystem extends System {
    override update(deltaTime: number): void {
        // server update logic here
    }
}

// --- init ---

__registerModule((world: World) => {
    world.addSystem(new ExampleSystem(world));
});
