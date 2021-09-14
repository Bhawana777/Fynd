function square(x) {
    return x * x;
}
console.log(square(2));

function cube(x) {
    return x * x * x;
}
console.log(cube(2));

function sum(a, b, square) {
    return square(a) + square(b);
}

function sum(a, b, cube) {
    return cube(a) + cube(b);
}

console.log(sum(2, 3, square));
console.log(sum(2, 3, cube));