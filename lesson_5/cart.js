function randomChoose(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}


function randomCost() {
    let res = Math.round(Math.random() * 1000000) / 100;
    return res;
}


function randomProduct() {
    var prod = new Product(randomCost(), randomChoose(types), randomChoose(colors));
    return prod;
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
        if (!document.getElementById("add")) {
            createCart();
        }
        if (document.getElementById("empty")) {
            document.getElementById("empty").style.display = "none";
        }
        for (let product of args) {
            this.products.push(product);
        }

        var div = document.getElementById("cart");
        var productList = document.createElement("ol");
        productList.id = "products";
        productList.innerText = "In your cart:";
        if (document.getElementById("products") !== null) {}
        else {
        div.appendChild(productList)
        }
         
        for (let i = 0; i < this.products.length; i++) {
            let item = document.createElement("li");
            item.id = `item_${i}`
            if (document.getElementById(`item_${i}`) !== null) {}
            else {
            let item_desc = `${this.products[i].color}
            ${this.products[i].type}, cost: ${this.products[i].cost}`
            item.appendChild(document.createTextNode(item_desc));
            document.getElementById("products").appendChild(item);
            this.total += this.products[i].cost
        }
        }
        if (document.getElementById("cost") !== null) {
            document.getElementById("cost").innerText = `Total cost : ${this.total}`;
        }
        else {
            var cost = document.createElement("p");
            cost.id = "cost"
            cost.innerText = `Total cost : ${this.total}`;
            div.appendChild(cost);
        }
        
    },
    totalCost() {
        console.log(`Total cost: ${Math.round(this.total * 100) / 100}`);
    },
    showProducts() {
            if (document.getElementById("products")) {
                if (document.getElementById("products").style.display == "block") {
                    document.getElementById("products").style.display = "none"
                } else {    
                    document.getElementById("products").style.display = "block"
                }
            } else {
                if (document.getElementById("empty")) {
                    if (document.getElementById("empty").style.display == "block") {
                        document.getElementById("empty").style.display = "none";
                    } else {
                        document.getElementById("empty").style.display = "block";
                    }
                } else {
                var empty = document.createElement("p");
                empty.id = "empty";
                empty.innerText = "Your cart is empty.";
                document.getElementById("cart").appendChild(empty)
                }
            }
        }
    }




function createCart() {
    if (document.getElementById("show_cart").innerText == "Show cart") {
        document.getElementById("show_cart").innerText = "Hide cart.";
    } else {
        document.getElementById("show_cart").innerText = "Show cart";
    }
    
    if (document.getElementById("show_products") !== null &&  
        document.getElementById("add") !== null) {
        if (document.getElementById("show_products").style.display == "none" &&
        document.getElementById("add").style.display == "none") {
            document.getElementById("show_products").style.display = "block";
            document.getElementById("add").style.display = "block";
            if (document.getElementById("products")) {
                document.getElementById("cost").style.display = "block";
                document.getElementById("products").style.display = "block"
            }
        } else {
            document.getElementById("show_products").style.display = "none";
            document.getElementById("add").style.display = "none";
            if (document.getElementById("products")) {
                document.getElementById("products").style.display = "none";
                document.getElementById("cost").style.display = "none";
            }
        }
    } else {
        var div = document.getElementById("cart");
        var showProducts = document.createElement("button");
        var add = document.createElement("button");

        showProducts.id = "show_products";
        showProducts.innerText = "Show/hide products in cart.";
        showProducts.setAttribute("onclick", "cart.showProducts()")
        
        add.id = "add";
        add.innerText = "Add random product to cart.";
        add.setAttribute("onclick", "cart.addToCart(randomProduct())")

        div.appendChild(showProducts);
        div.appendChild(add);
}}



var colors = ["black", "white", "red", "yellow", "blue", "green", "grey"]
var types = ["t-shirt", "pants", "jacket", "sweater", "shoes"]
var products = [randomProduct(), randomProduct(), randomProduct(), randomProduct()]


