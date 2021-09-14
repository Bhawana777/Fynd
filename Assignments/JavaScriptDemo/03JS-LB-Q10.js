/*10. Write a function that logs "Good morning", "Good afternoon", "Good evening", or "Good night" based on the hour of the day, and call it.
* 5 <= hour < 12: "Good morning"
* 12 <= hour < 16: "Good afternoon"
* 16 <= hour < 20: "Good evening"
* Otherwise, "Good night"
Note: The hour can be obtained by using this statement
```
var hour = (new Date()).getHours()
```
*/

var hour = (new Date()).getHours()
if (hour >= 16 || hour < 20) {
    console.log("Good m");
} else if (hour >= 12 || hour < 16) {
    console.log("Good afternoon");
} else if (hour >= 5 || hour < 12) {
    console.log("Good evening");
} else {
    console.log("Good night");
}