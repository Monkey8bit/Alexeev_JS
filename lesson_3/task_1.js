console.log("task 1:")

var i = 2
while (i <= 100) {
    var count = 1;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
            count += 1;
        } else {
            continue;
        }
        if (count > 2) {
            break
        }
    }
    if (count == 2) {
        console.log(i)
    }
    i++
}