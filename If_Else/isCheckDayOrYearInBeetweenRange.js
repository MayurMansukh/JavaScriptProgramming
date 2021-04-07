var day=require("readline-sync");
var day=day.question("enter the Day ");
var month=require("readline-sync");
var month=month.question("enter the Month ");

if (( (month >= 3 & day >= 20) && (month <= 6) )){
    console.log("true");
}else
{
    console.log("false");
}
