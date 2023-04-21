const { boatInventory } = require("./fishingBoat.js")

let inventory = boatInventory() 

const mongerInventory = (maxPrice) => {
    let chefInventory = [];
    for (const fish of inventory) {
        if (fish.price <= maxPrice && fish.amount >= 10 ) {
            chefInventory.push(fish), fish.amount = 10
        }
    }
    return chefInventory
}

module.exports = { mongerInventory }