var number=require("readline-sync");
var number=number.question("enter the no series 1, 10, 100, 1000, 100000... ");
Number=parseInt(number);
var NUMBER;
switch (number) {
    case 1:
        NUMBER = 'UNIT';
        break;
    case 10:
        NUMBER = 'TEN';
        break;
    case 100:
        NUMBER = 'HUNDREAD';
        break;
    case 1000:
        NUMBER = 'THOUSAND';
        break;
    case 100000:
        NUMBER = 'LAKH';
        break;
    default:
        NUMBER = 'Invalid choice';
}
console.log(NUMBER);
