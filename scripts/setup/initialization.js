import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(async () => {
    const loadedBefore = world.setDynamicProperty("loadedBefore", true);

    if (loadedBefore === true) {
        return;
    } else {
        world.sendMessage("Hello World!");
        world.setDynamicProperty("loadedBefore", true);
    }
});