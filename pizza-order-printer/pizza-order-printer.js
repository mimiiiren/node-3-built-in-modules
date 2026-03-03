/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";
// user input
const order = process.argv[2]
const number = Number (process.argv[3]);

// grab data from data.json to be used later 
async function getPizzaOrders() {
    const data = await fs.readFile("data.json", "utf8")
    return JSON.parse(data)
}

// console log every pizza without []
async function getAllOrders() {
    const pizzaOrders = await getPizzaOrders();
for (let i = 0; i < pizzaOrders.length; i++) {
console.log(pizzaOrders[i])
    }
}


async function getOneOrder(number) {
    const pizzaOrders = await getPizzaOrders();
    // capture error if user types number more than pizzaOrders
        if (number < pizzaOrders.length) {
   console.log(pizzaOrders[number])
        } else {
   console.log("Order not found. Please enter a valid order number.")
        }
}

    if (order === "getAllOrders") {
        getAllOrders()
    } else if (order === "getOneOrder") {
    getOneOrder(number)
    } else {
console.log("Order not found. Please enter a valid order number.")
    }

