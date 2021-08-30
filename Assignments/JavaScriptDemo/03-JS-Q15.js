function square(x) {
    return x * x;
}
console.log(square(2));

function cube(x) {
    return x * x * x;
}
console.log(cube(2));

function sum(x, y) {
    return x + y; // Both add and sum refer to the same function in memory
}

function sum(x, y, op) {
    return op(x, y);
}

console.log(sum(2, 3, square)); // x = 12, y = 13, op = sum