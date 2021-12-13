console.log("task 3:");

var a = Math.round(Math.random() * 100);  // random number
a *= Math.round(Math.random()) ? 1 : -1; // random sign
var b = Math.round(Math.random() * 100);
b *= Math.round(Math.random()) ? 1 : -1;

console.log(`a = ${a}\nb = ${b}`);

if (a > 0 && b > 0) {
    console.log(`a - b = ${a - b}`);
} else if (a < 0 && b < 0) {
    console.log(`a * b = ${a * b}`);
} else {
    console.log(`a + b = ${a + b}`);
}

console.log("\n");
