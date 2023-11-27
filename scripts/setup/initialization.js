import { world, system } from "@minecraft/server";
import { standardBypassTag, advancedBypassTag } from "./config";
import { Database } from "./database";

let loadedBefore = false; // Correct initialization

// let messageSent = false;
// system.runInterval(async () => {
//     for (const player of world.getPlayers()) {
//         const playerName = player.name;
//         if (player.hasTag(standardBypassTag)) {
//             if (!messageSent) {
//                 player.sendMessage(`§b§lGUARDIAN: §r§eYou have been given basic moderation access. Use "!help" for more information!`);
//                 messageSent = true;
//             }
//         }
//         if (player.hasTag(advancedBypassTag)) {
//             if (!messageSent) {
//                 player.sendMessage(`§b§lGUARDIAN: §r§eYou have been given advanced moderation access. Use "!help" for more information!`);
//                 messageSent = true;
//             }
//         } else {
//             messageSent = false;
//         }
//     }
// });

world.afterEvents.playerSpawn.subscribe(async (player) => {
    if (loadedBefore === true) { // Use the equality operator here
        return;
    } else {
        world.sendMessage("Thank you for installing Guardian"); // Corrected message
        loadedBefore = true;
    }
});