/*Write a function sumArray that calculates and returns the sum of items in an array of numbers that is passed to it, and call it like so
```
var result = sumArray( [ 1, 2, 3, 4 ] );
console.log( result ); // prints 10
```
*/

//Using function reduce method
var array = [1, 2, 3, 4, 5];

var sum = array.reduce(function(a, b) {
    return a + b;
}, 0);

console.log(sum);

//Creating a function 
function sumArray(input) {

    if (toString.call(input) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
var result = sumArray([1, 2, 'a', 4]);
console.log(result);