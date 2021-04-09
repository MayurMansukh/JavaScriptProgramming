var arr = [];
for (var i = 0; i <= 10; i++) {
    arr.push(Math.round((Math.random() * 900) + 100));
}
console.log(arr);

function findSecondLargest(arr) {
    const arrSorted = arr.sort((a, b) => a - b);
    return arrSorted[arr.length - 2];
}
console.log("second largest element: " + findSecondLargest(arr))

function findSecondSmallest(arr) {
    const arrSorted = arr.sort((a, b) => b - a);
    return arrSorted[arr.length - 2];
}
console.log("second smallest element: " + findSecondSmallest(arr))