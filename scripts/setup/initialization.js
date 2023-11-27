import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(async () => {
    const loadedBefore = world.getDynamicProperty("loadedBefore");

    if (loadedBefore) {
        return;
    } else {
        world.sendMessage("Hello World!");
        world.setDynamicProperty("loadedBefore", true);
    }
});