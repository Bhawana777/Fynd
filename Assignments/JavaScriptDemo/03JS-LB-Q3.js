let i = 1;
let j = 1;
let n = 5;
let str = "";
//var arr = new Array();
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        str = str + j + " ";
    }
    str = str + "\n";
}
console.log(str);