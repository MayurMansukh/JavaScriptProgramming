var arr = []
var num=1
function repeatNo() {
    for (var i = 1; i < 100; i++) {
        var repeatNo = parseInt((num / 10) % 10);
        if ((num % 10) == repeatNo) {
            arr.push(num)
        }
        num++
    }
    return console.log(arr)
}
repeatNo();
