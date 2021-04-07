var meter = 3;
var inch = 12;
var Num = require("readline-sync");
var choice = Num.question("choose one \n 1. convert Feet to inch \n 2. Feet to meter \n 3. Inch to feet \n 4. Meter to feet ");
choice = parseInt(choice);
var number = Num.question("Enter number for conversion :")
number = parseInt(number);
unitConversion(choice, number);


function unitConversion(_choice, _number) {
    var con;
    switch (choice) {
        case 1:
            con = number * inch;
            console.log("Feet to inch conversion is: " + con);
            break;
        case 2:
            con = number / meter;
            console.log("Feet to meter conversion is: " + con);
            break;
        case 3:
            con = number / inch;
            console.log("Inch to feet conversion is: " + con);
            break;
        case 4:
            con = number * meter;
            console.log("Meter to feet conversion is: " + con);
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}