var i = 1;
var n = 5;
let str = "";
for (i = 1; i <= n; i++) {
    str = str + i + " ";
}
console.log(str);

var arr = new Array(10, 20, 30, 40);
console.log(arr);
console.log(arr.length);
arr[0] = arr[0] + 1;
console.log(arr);
arr[3] = arr[2] + arr[3];
console.log(arr);
arr.push(50);
console.log(arr);
//var arr2=new Array();
const arr2 = [...arr];
console.log(arr2);