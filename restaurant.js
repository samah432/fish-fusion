const { mongerInventory } = require("./fishMonger.js")



const fishMenu = (chefPrice) => {
    let inventory = mongerInventory(chefPrice)
    let message = ""
    let restaurantInventory = []
    for (const chefsInventory of inventory) {
        chefsInventory.amount = chefsInventory.amount / 2
        restaurantInventory.push(chefsInventory)
        message += `<h1>Menu</h1>
        <article class="menu">
            <h2>Tuna</h2>
            <section class="menu__item">${chefsInventory.species} Soup</section>
            <section class="menu__item">${chefsInventory.species} Sandwich</section>
            <section class="menu__item">Grilled ${chefsInventory.species}</section>
        </article>`
    }
    return message
}

module.exports = { fishMenu }