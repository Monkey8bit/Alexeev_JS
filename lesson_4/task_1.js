var splitNumber = {
    units: 0,
    dozens: 0,
    hundreds: 0,
};


function splitter(number) {
    if (number > 999) {
        console.log(`Number ${number} is too big.`)
        return splitNumber;
    }
    console.log(`Your number is ${number}`)
    var reversedNumber = number.toString().split("").reverse().join("");
    var digits = [];
    var res = splitNumber;
    for (let digit of reversedNumber.toString()) {
        digits.push(Number(digit));
    }
    Object.keys(splitNumber).forEach((attr, digit) => {
        if (!digits[digit]) {
            res[attr] = 0;
        } else {
            res[attr] = digits[digit];
        }
    })
    return res;
}



var number = Math.round(Math.random() * 1500)
var result = splitter(number);
console.log(result)
