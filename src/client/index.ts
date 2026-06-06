import { System, PlayerData } from "@ratprez/entm";
import type { EntityId, World } from "@ratprez/entm";
import { ExampleComponent } from "../shared/ExampleComponent";

class ExampleSystem extends System {
    override update(deltaTime: number): void {
        // A view returns all entities that have the matching components
        const view = this.m_world.view(ExampleComponent);

        view.each(({ entityId, exampleComponent }) => {
            const isRich = this.m_amRich.get(entityId);

            if ((!isRich || isRich == undefined) && exampleComponent.money >= 10) {
                this.m_amRich.set(entityId, true);
                console.log(
                    `${entityId} IS RICH!, whats his bank pin? bankPin: ${exampleComponent.bankPin}... DAMN! It's hidden.`
                );
            } else if ((isRich || isRich == undefined) && exampleComponent.money < 10) {
                this.m_amRich.set(entityId, false);
                console.log(`${entityId} is poor`);
            }

        });

        // TIP: Use for...of when you need early exit (break/continue/return)
        for (const { entityId, exampleComponent } of view) {
            if (exampleComponent.money > 10) {
                break; // Can exit early
            }
        }
    }

// private
    private m_amRich: Map<EntityId, boolean> = new Map();
}

// --- init ---

__registerModule((world: World) => {
    // Register systems before anything else
    world.addSystem(new ExampleSystem(world));



    const entityId = world.getLocalPlayerEntityId();
    if (entityId !== null) {
        console.log("--- THANKYOU FOR TRYING ENTM! ---");
        console.log(`localEntityId: ${entityId}`);
        const playerData = world.getComponent(entityId, PlayerData)
        if (playerData) {
            console.log(`server data | name: ${playerData.name}, source: ${playerData.source}`);
        }
    }



    // Entities and systems are automatically cleaned up when the resource stops
});

// DOCS: https://github.com/RatPrez/entm-core/tree/master/docs
