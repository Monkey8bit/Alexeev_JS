function mathOperation(arg1, arg2, operator) {
    switch (operator) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return dif(arg1, arg2);
        case "*":
            return mul(arg1, arg2);
        case "/":
            return div(arg1, arg2);
    }
}

console.log("\ntask 6:")

var x1 = Number(prompt("Input first number: "))
var x2 = Number(prompt("Input second number: "))
console.log(`a = ${x1}\nb = ${x2}`)
var op = prompt("Input operator: ")

console.log(mathOperation(x1, x2, op))
