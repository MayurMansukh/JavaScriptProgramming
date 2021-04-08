var digit = require("readline-sync");
var num = digit.question("enter the number: ");
var arr = []
for (i = 2; i <= num; i++) {
    while ((num % i) == 0) {
        arr.push(i)
        num = num / i
    }
}
console.log(arr)