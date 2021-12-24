function buildCatalog() {
    let catalog = document.getElementById("catalog");
    let list = document.createElement("ul");
    for (let i = 0; i < products.length; i++) {
        let item = document.createElement("li");
        let button = document.createElement("button");
        let product = products[i];
        button.innerText = "Add to cart."
        item.innerText = `${product.color} ${product.type}
                          Cost: ${product.cost}`;
        item.id = `catalog_item_${i}`;
        item.className = "catalog_item";
        button.addEventListener("click",function(){cart.addToCart(product)}, false);
        item.appendChild(button);
        list.appendChild(item);
    }
    catalog.appendChild(list);
}


buildCatalog()
