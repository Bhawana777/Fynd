let i = 1;
let j = 1;
let num = 1;
let n = 5;
let str = "";
//var arr = new Array();
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        str = str + num + " ";
        num++;
    }
    str = str + "\n";
}
console.log(str);