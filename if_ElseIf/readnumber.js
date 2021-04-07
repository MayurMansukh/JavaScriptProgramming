var number=require("readline-sync");
var number=number.question("enter the no series 1, 10, 100, 1000, 100000... ");
if(number==1){
    console.log("UNIT");
}
else if(number==10)
{
    console.log("TEN");
}
else if(number==100)
{
    console.log("HUNDREAD");
}
else if(number==100)
{
    console.log("THOUSAND");
}
else if(number==100000)
{
    console.log("LAKH");
}
else
{
    console.log("invalid choice");
}