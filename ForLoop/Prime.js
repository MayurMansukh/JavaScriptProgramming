var number = require("readline-sync");
var Number = number.question("Enter no :");
Number = parseInt(Number)
checkPrime(Number)

function checkPrime(_Number) {
    var flag = 0;
    for (i = 2; i <= Number / 2; i++) {
        if (Number % i == 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log("It is not a prime number: " + Number);
    }
    else {
        console.log("It is a prime number: " + Number);
    }
}