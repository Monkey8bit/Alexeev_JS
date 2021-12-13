function sum(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

function dif(a, b) {
    return `${a} - ${b} = ${a - b}`;
}

function mul(a, b) {
    return `${a} * ${b} = ${a * b}`;
}

function div(a, b) {
    return `${a} / ${b} = ${Number((a / b).toFixed(2))}`
}

console.log("\ntask 5:");

var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);

console.log(`a = ${x}\nb = ${y}`);
console.log(`${sum(x, y)}\n${dif(x, y)}\n${mul(x, y)}\n${div(x, y)}`);
