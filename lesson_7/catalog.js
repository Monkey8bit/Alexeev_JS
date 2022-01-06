class Product {
    static last_id = 0;
    id;

    constructor(price, type = null, color = "black", discount = 0, description = "some lorem ipsum") {
        this.id = Product.last_id++;
        this.price = price;
        this.type = type;
        this.color = color;
        this.description = description;
        this.discount = discount;
        
    }
}


function randomDiscount() {
    let discount = Math.floor(Math.random() * 15);
    return discount;
}


function randomProduct() {
    let randItem = new Product(randomCost(), randomChoose(types), randomChoose(colors),randomDiscount());
    return randItem;
}


function randomChoose(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}


function randomCost() {
    let res = Math.floor(Math.random() * 1000000) / 100;
    return res;
}

function changeImage(image, target_id) {
    let old_image = document.getElementById(`img${target_id}`);
    old_image.src = image.src;
}

function createItemCard(item) {
    let small_img = document.createElement("img");
    let small_img_2 = document.createElement("img");
    let small_img_3 = document.createElement("img");
    let img_container = document.createElement("div")
    let item_card = document.createElement("div");
    let item_info = document.createElement("div");
    let item_img = document.createElement("div");
    let img_src = document.createElement("img");
    let item_type = document.createElement("p");
    let color = item.color
    let price = item.price
    let item_color = document.createElement("p");
    let item_price = document.createElement("p");
    let info = document.createElement("p");
    let add_button = document.createElement("button");
    let left_button = document.createElement("button");
    let right_button = document.createElement("button");
    item_color.innerText = `Color: ${color}`;
    item_price.innerText = `Price: `;
    item_type.innerText = item.type;
    add_button.innerText = "Add to cart "
    add_button.className = "add_button";
    item_price.className = "price";
    item_price.id = `item${item.id}_price`;
    if (item.discount) {
        var discount = document.createElement("span");
        var price_with_discount = document.createElement("span");
        discount.className = "discount";
        price_with_discount.className = "price_with_discount";
        price_with_discount.innerText = price;
        discount.innerText = `${(price - (price * item.discount) / 100).toFixed(2)} (${item.discount}% off)`;
        item_price.append(price_with_discount, discount);
    } else {
        item_price.innerText += price;
    }

    small_img.src = img;
    small_img_2.src = img_2;
    small_img_3.src = img_3;
    img_container.className = "img_container";
    item_img.className = "item_image";
    left_button.className = "left  img_navi";
    right_button.className = "right img_navi";
    left_button.id = `left${item.id}`
    right_button.id = `right${item.id}`
    info.innerText = item.description;
    item_info.className = "item_info";
    item_info.id = `item${item.id}_info`;
    item_type.className = "item_type";
    item_type.id = `item${item.id}_type`;
    item_card.className = "item_card";
    item_card.id = `item${item.id}_card`
    img_src.className = "main_img";
    img_src.id = `img${item.id}`;
    img_src.src = img;
    left_button.innerText = "<";
    right_button.innerText = ">";
    right_button.addEventListener("click", changeImageArrows)
    left_button.addEventListener("click", changeImageArrows)
    add_button.addEventListener("click", function() {cart.addToCart(item)})
    item_img.append(left_button, img_src, right_button)
    item_card.appendChild(item_img);
    img_container.append(small_img, small_img_2, small_img_3);
    item_card.appendChild(img_container);
    item_info.append(item_type, item_color, item_price, info);
    item_card.append(item_info, add_button);
    return item_card;
}


function initCatalog() {
    var catalog_div = document.getElementById("catalog");
    for (item of products) {
        let new_item = createItemCard(item);
        catalog_div.appendChild(new_item);
        let container = document.querySelectorAll(`#item${item.id}_card > .img_container > img`);
        let target = item.id;

        for (let image of container) {
            image.addEventListener('click', function() {changeImage(image, target)}, false);
            image.className = "small_img";
        }
        
    }
}


function changeImageArrows(event) {
    if (event.target.classList.contains("right")) {
        var img = event.target.previousSibling
        var next_index = images.indexOf(img.src) + 1
        if (next_index >= 3) {
            next_index = 0;
        }
    } else {
        var img = event.target.nextSibling
        var next_index = images.indexOf(img.src) - 1;
        if (next_index < 0) {
            next_index = images.length - 1;
        }
    } 
    img.src = images[next_index]
}