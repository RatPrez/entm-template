import type { World } from "@ratprez/entm";
import { ExampleComponent } from "../shared/ExampleComponent";

declare function __registerModule(init: (world: World) => void): void;

// --- init ---

__registerModule((world: World) => {
    // Register systems before anything else

    // Create example entities
    for (let i = 0; i < 5; i++) {
        const entity = world.createEntity(true);

        let comp: ExampleComponent = new ExampleComponent();
        comp.money = i % 2 == 0 ? 20 : 5;
        comp.bankPin = 5231;

        // add example component onto the entity
        world.addComponent(entity, comp);
    }

    // Entities and systems are automatically cleaned up when the resource stops
});

// DOCS: https://github.com/RatPrez/entm-core/tree/master/docs
