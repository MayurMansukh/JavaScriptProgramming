var digit=require("readline-sync");
var digit=digit.question("enter the no of weekday: ");
if(digit==1){
    console.log("MONDAY");
}
else if(digit==2)
{
    console.log("TUESDAY");
}
else if(digit==3)
{
    console.log("WENESDAY");
}
else if(digit==4)
{
    console.log("THURSAY");
}
else if(digit==5)
{
    console.log("FRIAY");
}
else if(digit==6)
{
    console.log("SATURDAY");
}
else if(digit==7)
{
    console.log("SUNDAY");
}
else
{
    console.log("INVALID CHOICE");
}
