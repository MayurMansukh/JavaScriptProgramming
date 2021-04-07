var num1=randomnumber=Math.floor((Math.random()*900)+100);
var num2=randomnumber=Math.floor((Math.random()*900)+100);
var num3=randomnumber=Math.floor((Math.random()*900)+100);
var num4=randomnumber=Math.floor((Math.random()*900)+100);
var num5=randomnumber=Math.floor((Math.random()*900)+100);
console.log(num1,num2,num3,num4,num5);

if ( (num1 > num2 ) && ( num1 > num3 ) && ( num1 > num4 ) && ( num1 > num5 ) )
{
    console.log("num1 is max");
}
else if ( (num2 > num1 ) && ( num2 > num3 ) && ( num2 > num4 ) && ( num2 > num5 ) )
{
    console.log("num2 is max");
}
else if ( (num3 > num1 ) && ( num3 > num2 ) && ( num3 > num4 ) && ( num3 > num5 ) )
{
    console.log("num3 is max");
}
else if ( (num4 > num1 ) && ( num4 > num2 ) && ( num4 > num3 ) && ( num1 > num5 ) )
{
    console.log("num4 is max");
}
else
{
     console.log("num5 is max");
}

if ( (num1 < num2 ) && ( num1 < num3 ) && ( num1 < num4 ) && ( num1 < num5 ) )
{
    console.log("num1 is min");
}
else if ( (num2 < num1 ) && ( num2 < num3 ) && ( num2 < num4 ) && ( num2 < num5 ) )
{
    console.log("num2 is min");
}
else if ( (num3 < num1 ) && ( num3 < num2 ) && ( num3 < num4 ) && ( num3 < num5 ) )
{
    console.log("num3 is min");
}
else if ( (num4 < num1 ) && ( num4 < num2 ) && ( num4 < num3 ) && ( num1 < num5 ) )
{
    console.log("num4 is min");
}
else
{
     console.log("num5 is min");
}



