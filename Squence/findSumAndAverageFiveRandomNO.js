var randomnumber;
var sum=0;
for(var i=1;i<=5;i++){
    randomnumber=Math.floor((Math.random()*90)+10);
    console.log(randomnumber);
    sum=sum+randomnumber;
}
console.log("Sum of five Random No: "+sum);
console.log("Average of five random no: "+sum/5);