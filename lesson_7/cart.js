const table = document.createElement("table");
table.id = "cart_list";


var cart = {
    total: 0,
    products: {},
    cartInit() {
        let cart_block = document.getElementById("cart_block");
        let total = document.createElement("span");
        let total_price = document.createElement("p")
        total_price.innerText = "Total: "
        total_price.id = "total_cart_price";
        total.id = "cart_total";
        let cart_row = document.createElement("tr");
        let cart_amount = document.createElement("td");
        let cart_name = document.createElement("td");
        let cart_price = document.createElement("td");
        let cart_total_price = document.createElement("td");
        let next_btn = document.createElement("button")
        let cart_wrapper = document.getElementById("cart_wrapper");
        let address = document.getElementById("address");
        let back_btn = document.createElement("button");
        let btn_control = document.createElement("div");
        btn_control.id = "btn_control";
        back_btn.className = "back";
        back_btn.innerText = "Back";
        back_btn.style.display = "none";
        next_btn.className = "next";
        next_btn.innerText = "Next "
        cart_amount.innerText = "Amount";
        cart_name.innerText = "Name";
        cart_price.innerText = "Price per item";
        cart_total_price.innerText = "Total price";
        cart_row.append(cart_amount, cart_name, cart_price, cart_total_price);
        table.appendChild(cart_row);
        btn_control.append(back_btn, next_btn);
        cart_wrapper.appendChild(table);
        total_price.appendChild(total);
        cart_wrapper.append(total_price);
        cart_block.insertBefore(btn_control, address)
        document.getElementById("empty").remove();
        next_btn.addEventListener("click", next, false);
        back_btn.addEventListener("click", back, false);
    },
    addToCart(item) {
        let total_price = (item.price - (item.price * item.discount) / 100).toFixed(2);
        total_price = Number(total_price)

        if (this.products[item.id]) {
            this.products[item.id].amount += 1;
        } else {
        this.products[item.id] = {
            id: item.id,
            name: `${item.color} ${item.type}`,
            price: total_price,
            amount: 1,
        }
        }
        this.addToCartList(this.products[item.id]);
    },
    addToCartList(item) {
        if (!document.getElementById("cart_list")) {
            this.cartInit();
        }
        
        let cart_new_item = document.createElement("tr");
        let cart_item_amount = document.createElement("td");
        let cart_item_name = document.createElement("td");
        let cart_item_price = document.createElement("td");
        let cart_item_total = document.createElement("td");
        let total = (item.price * item.amount).toFixed(2);
        let old_price = Number(document.getElementById("cart_total").innerText)
        let new_price = (old_price + item.price).toFixed(2);
        new_price = Number(new_price);
        total = Number(total);
        cart_item_amount.innerText = item.amount;
        cart_item_name.innerText = item.name;
        cart_item_price.innerText = item.price;
        cart_item_total.innerText = total;
        if (document.getElementById(`cart_item_${item.id}`)) {
            let total_increment = document.getElementById(`cart_item_${item.id}`);
            total_increment.cells[3].innerText = total;
            total_increment.cells[0].innerText = item.amount;
            document.getElementById("cart_total").innerText = new_price;
        } else {
            let list = document.getElementById("cart_list");
            cart_new_item.id = `cart_item_${item.id}`;
            cart_new_item.className = "cart_item";
            cart_new_item.append(cart_item_amount, cart_item_name, cart_item_price, cart_item_total);
            list.appendChild(cart_new_item);
            document.getElementById("cart_total").innerText = new_price;
            ;
        }
    }
}


function next(event) {
    let next_btn = event.target;
    let back_btn = next_btn.previousElementSibling;
    let block_to_hide = next_btn.parentNode.previousElementSibling;
    let block_to_show = next_btn.parentNode.nextElementSibling;
    let old_ctrl = next_btn.parentNode;
    let last_block = old_ctrl.nextElementSibling.nextElementSibling;
    next_btn.addEventListener("click", next, false);
    back_btn.addEventListener("click", back, false);
    block_to_hide.style.display = "none";
    if (block_to_show.id === "comment") {
        block_to_show.style.display = "inline-block";
    } else {block_to_show.style.display = "block";}
    back_btn.style.display = "inline-block";
    let ctrl_block = document.createElement("div");
    ctrl_block.id = "btn_control";
    ctrl_block.append(back_btn, next_btn);
    let cart_block = old_ctrl.parentNode;
    old_ctrl.remove()
    if (!block_to_show.nextElementSibling) {
        let submit = next_btn.cloneNode();
        next_btn.remove();
        submit.innerText = "Confirm order"
        ctrl_block.appendChild(submit);
        cart_block.appendChild(ctrl_block);
    } else {
        cart_block.insertBefore(ctrl_block, last_block)
    }
    event.stopPropagation()
    
}

function back(event) {
    let back_btn = event.target;
    let next_btn = event.target.nextElementSibling;
    let block_to_hide = back_btn.parentNode.previousElementSibling;
    let block_to_show = block_to_hide.previousElementSibling;
    let old_ctrl = back_btn.parentNode;
    back_btn.addEventListener("click", back, false);
    next_btn.addEventListener("click", next, false);
    block_to_hide.style.display = "none";
    block_to_show.style.display = "block";
    let ctrl_block = document.createElement("div");
    ctrl_block.id = "btn_control";
    ctrl_block.append(back_btn, next_btn);
    let cart_block = old_ctrl.parentNode;
    old_ctrl.remove();
    if (!block_to_show.previousElementSibling) {
        back_btn.style.display = "none";
        cart_block.insertBefore(ctrl_block, block_to_hide);
    } else {
        if (next_btn.innerText === "Confirm order") {
            next_btn.innerText = "Next"
        }
        cart_block.insertBefore(ctrl_block, block_to_hide)
    }
    event.stopPropagation()
    
}

