function addTo(n) {
    return function(x) {
        return x + n;
    };
}

var addTo10 = addTo(10);
console.log(addTo10(5));
var addTo20 = addTo(20);
console.log(addTo20(5));