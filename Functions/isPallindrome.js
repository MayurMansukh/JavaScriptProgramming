var num = require("readline-sync");

function checkPalindrome() {
    var rem, temp, final = 0;
    var number = num.question("enter the no ");

    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        console.log("number is Palindrome");
    }
    else {
        console.log("number is not palindrome");
    }
}

checkPalindrome();