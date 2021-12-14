function basketPrice(array) {
    let sum = 0;
    for (item of array) {
        sum += item
    }
    return Math.round(sum * 100) / 100;
}

console.log("\ntask 2:");

var basket = [];

for (i = 1; i <= 10; i++) {
    basket.push(Math.round(Math.random() * 100000) / 100);
}


console.log(basket)
console.log(`Total cost of items in basket: ${basketPrice(basket)}`);
