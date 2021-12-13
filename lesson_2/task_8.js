console.log("\ntask 8:")

function recursivePow(val, pow) {
    if (pow == 0) {
        return 1
    } else {
        return val * recursivePow(val, pow - 1)
    }

}


var x2 = Math.round(Math.random() * 10)
var y2 = Math.round(Math.random() * 10)
console.log(`Number: ${x2}\nPower: ${y2}`)
console.log(recursivePow(x2, y2))
