
var arr = [];
for (var i = 0; i <= 10; i++) {
    arr.push(Math.round((Math.random() * 900) + 100));
}
console.log(arr);

var max = Math.max.apply(null, arr);
var secondmax = Math.max.apply(null, arr.filter(n => n != max));
console.log('Second bigest number: ' + secondmax);

var min = Math.min.apply(null, arr);
var secondmin = Math.min.apply(null, arr.filter(n => n != min));
console.log('Second smallest number: ' + secondmin);
