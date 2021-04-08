var arr = [0, -1, 2, 3, -3, 1]
console.log(arr);
let len = arr.length
for (var i = 0; i < len - 2; i++) {
    for (var j = i + 1; j < len - 1; j++) {
        for (var k = j + 1; k < len; k++) {
            if ((arr[i] + arr[j] + arr[k]) == 0) {
                
                console.log(" three sum of integer add to zero ")
                console.log(arr[i])
                console.log(arr[j])
                console.log(arr[k])
                console.log()
                
             }      

        }
    }
}


