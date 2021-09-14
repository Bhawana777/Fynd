function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function sumArray(input, square) {

    if (toString.call(input) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += square(Number(input[i]));
    }
    return total;
}
console.log(sumArray([1, 2, 3], square));


function sumArray(input, cube) {

    if (toString.call(input) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += cube(Number(input[i]));
    }
    return total;
}
console.log(sumArray([1, 2, 3], cube));