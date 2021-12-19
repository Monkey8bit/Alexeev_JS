function randomChoose(choices) {
    let index = Math.round(Math.random() * choices.length);
    return choices[index]
}


function randomCost() {
    let res = Math.round(Math.random() * 1000000) / 100;
    return res;
}


class Product {
    constructor(cost, type = null, color = "black", description = "") {
        this.cost = cost;
        this.type = type;
        this.color = color;
        this.description = description;
    }
}


var cart = {
    products: [],
    total: 0,
    addToCart(...args) {
        for (let product of args) {
            this.products.push(product);
        }
        for (let productCost of this.products) {
            this.total += productCost.cost;
        }
        
    },
    totalCost() {
        console.log(`Total cost: ${Math.round(this.total * 100) / 100}`);
    },
    showProducts() {
        console.log("Your cart: ")
        for (let product of this.products) {
            console.log(`${product.color} ${product.type} (Cost: ${product.cost})`)
        }
    }

}


var colors = ["black", "white", "red", "yellow", "blue", "green", "grey"]
var types = ["t-shirt", "pants", "jacket", "sweater"]

var product_1 = new Product(randomCost(),
                            randomChoose(types),
                            randomChoose(colors))
var product_2 = new Product(randomCost(),
                            randomChoose(types),
                            randomChoose(colors))
var product_3 = new Product(randomCost(),
                            randomChoose(types),
                            randomChoose(colors))

cart.addToCart(product_1, product_2, product_3)