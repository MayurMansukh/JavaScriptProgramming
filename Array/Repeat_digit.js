var arr = []
var num = 1
for (var i = 1; i < 100; i++) 
{
    var repeatN0 = parseInt((num / 10) % 10);
    if ((num % 10) == repeatN0) 
    {
        arr.push(num)
    }
    num++
}
console.log(arr)

