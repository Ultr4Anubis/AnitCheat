import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(async (player) => {
    if (world.getDynamicProperty("loadedBefore") === true) {
        return;
    } else {
        world.sendMessage("Hello World!"); // Corrected message
        world.setDynamicProperty("loadedBefore", true);
    }
});