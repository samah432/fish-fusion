const { fishMenu } = require("./restaurant.js")


const dailyPriceLimit = 10000000
const menu = fishMenu(dailyPriceLimit)
console.log(menu)
