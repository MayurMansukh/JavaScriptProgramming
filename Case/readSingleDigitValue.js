var digit = require("readline-sync");
var num = digit.question("enter the Single digit no: ");
num=parseInt(num);
var Number;
switch (num) {
    case 1:
        Number = 'ONE';
        break;
    case 2:
        Number = 'TWO';
        break;
    case 3:
        Number = 'THREE';
        break;
    case 4:
        Number = 'FOUR';
        break;
    case 5:
        Number = 'FIVE';
        break;
    case 6:
        Number = 'SIX';
        break;
    case 7:
        Number = 'SEVEN';
        break;
    case 8:
        Number = 'EIGHT';
        break;
    case 9:
        Number = 'NINE';
        break;
    case 0:
        Number = 'ZERO';
        break;
    default:
        dayName = 'Invalid number';
}
console.log(Number);
