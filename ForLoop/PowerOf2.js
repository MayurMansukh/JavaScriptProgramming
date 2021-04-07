var number = require("readline-sync");
var Number = number.question("Enter no :");
Number = parseInt(Number)
checkPower(Number)

function checkPower(_Number) {
    var power = 1;
    var quebe = 2;
    for (i = 1; i <= Number; i++) {
        power = power * quebe;
        console.log(power);
    }
}