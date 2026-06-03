import { Component, System } from "@ratprez/entm";
import type { World } from "@ratprez/entm";

declare function __registerModule(init: (world: World) => void): void;

// --- components ---

class ExampleComponent extends Component {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}

// --- systems ---

class ExampleSystem extends System {
    override update(deltaTime: number): void {
        // A view returns all entities that have the matching components
        const view = this.m_world.view(ExampleComponent);

        // METHOD 1: for...of loop (creates iterator + result objects)
        for (const { entityId, exampleComponent } of view) {
            // Do something with entityId and exampleComponent
            console.log(`Entity ${entityId}: ${exampleComponent.name}`);
        }

        // METHOD 2: .each() - recommended for better performance
        view.each(({ entityId, exampleComponent }) => {
            // Same logic, but .each() is slightly faster because:
            // - Avoids creating the intermediate iterator object
            // - Direct function call instead of iterator protocol
            // - Less memory allocation per iteration
            console.log(`Entity ${entityId}: ${exampleComponent.name}`);
        });

        // TIP: Use for...of when you need early exit (break/continue/return)
        for (const { entityId, exampleComponent } of view) {
            if (exampleComponent.name === "target") {
                break; // Can exit early
            }
        }

        // TIP: Use .each() when you process every entity without early exit
        view.each(({ exampleComponent }) => {
            exampleComponent.name = exampleComponent.name.toUpperCase();
        });
    }
}

// --- init ---

__registerModule((world: World) => {
    // Create example entities
    for (let i = 0; i < 2; i++) {
        const entity = world.createEntity();

        // add example component onto the entity
        world.addComponent(entity, new ExampleComponent("Entity: " + entity));
    }

    // Register systems
    world.addSystem(new ExampleSystem(world));

    // Entities and systems are automatically cleaned up when the resource stops
});
