"use strict"
// alert("Welcome to the browser object model lecture!");

/*Put the count inside a variable sayHey as well as the hey function*/
let sayHey = function() {
    let count = 0;
    function hey() {
        if (count < 10) {
            console.log("hey" + count);
            count++
        }
    }

    setInterval(hey, 1000)
}

