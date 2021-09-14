/*12. Write a function sumSquares that creates a new array with squares of numbers in the array passed to it, and call it like so

var result = sumSquares( [ 1, 2, 3, 4 ] );
console.log( result ); // prints 30
*/

function sumArray(input) {

    if (toString.call(input) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i] * input[i]);
    }
    return total;
}
var result = sumArray([1, 2, 'a', 4]);
console.log(result);