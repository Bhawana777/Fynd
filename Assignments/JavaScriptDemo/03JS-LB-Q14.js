//14. Write a function that accepts another function and calls the accepted function

function function_one() {
    function_two(); // considering the next alert, I figured you wanted to call function_two first
    alert("The function called 'function_one' has been called.");
}

function function_two() {
    alert("The function called 'function_two' has been called.");
}

function_one();