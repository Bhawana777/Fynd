/*13. Write a function contains that accepts an array, and a number and returns true if the number appears in the array, and false otherwise. Use function expression syntax to declare the function
```
console.log( contains( [ 1, 2, 3, 4 ], 3 ) ); // prints true
console.log( contains( [ 1, 2, 3, 4 ], 5 ) ); // prints false
``` */
//Incorrect Apporach
function contains(input, n) {

    if (toString.call(input) !== "[object Array]")
        return false;

    for (var i = 0; i < input.length; i++) {
        if (input[i] == n) {
            return true;
            break;
        } else {
            return false;
        }
    }
}

//console.log(contains([1, 2, 3, 4], 3));
console.log(contains([1, 2, 3, 4], 5));

//Another Method
function exists(value, array) {
    return array.some(e => e === value);
}

let marks = [4, 5, 7, 9, 10, 11];

console.log(exists(4, [1, 2, 3, 4, 5]));
console.log(exists(11, marks));