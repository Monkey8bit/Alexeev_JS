const table = document.createElement("table");
table.id = "cart_list";

var cart = {
    total: 0,
    products: {},
    cartInit() {
        document.getElementById("cart_block").appendChild(table);
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
        cart_amount.innerText = "Amount";
        cart_name.innerText = "Name";
        cart_price.innerText = "Price per item";
        cart_total_price.innerText = "Total price";
        cart_row.append(cart_amount, cart_name, cart_price, cart_total_price);
        table.appendChild(cart_row);
        total_price.appendChild(total);
        document.getElementById("cart_block").appendChild(total_price);
        document.getElementById("empty").remove()
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
