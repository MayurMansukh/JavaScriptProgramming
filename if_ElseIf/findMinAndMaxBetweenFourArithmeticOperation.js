var value=require("readline-sync");
var a=value.question("enter the value of a: ");
var b=value.question("enter the value of b: ");
var c=value.question("enter the value of c: ");
var d=value.question("enter the value of d: ");

var arith1=a+b*c;
var arith2=a%b+c;
var arith3=c+a/b;
var arith4=a*b+c;
console.log("Arithmetic1: "+arith1+ "\nArithmetic2: "+arith2+ "\nArithmetic3: "+arith3+ "\nArithmetic4: "+arith4);

if ( (arith1 > arith2 ) && ( arith1 > arith3 ) && ( arith1 > arith4 ) )
{
    console.log("arith1 is max");
}
else if ( (arith2 > arith1 ) && ( arith2 > arith3 ) && ( arith2 > arith4 ) )
{
    console.log("arith2 is max");
}
else if ( (arith3 > arith1 ) && ( arith3 > arith2 ) && ( arith3 > arith4 ) )
{
    console.log("arith3 is max");
}
else
{
     console.log("arith4 is max");
}

if ( (arith1 < arith2 ) && ( arith1 < arith3 ) && ( arith1 < arith4 ) )
{
    console.log("arith1 is min");
}
else if ( (arith2 < arith1 ) && ( arith2 < arith3 ) && ( arith2 < arith4 ) )
{
    console.log("arith2 is min");
}
else if ( (arith3 < arith1 ) && ( arith3 < arith2 ) && ( arith3 < arith4 ) )
{
    console.log("arith3 is min");
}
else
{
     console.log("arith4 is min");
}