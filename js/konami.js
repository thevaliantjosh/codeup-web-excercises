"use strict"
console.log("Konami Exercise");


let konamiCode = "3838404037393739666513";
let userEntry = "";
$(function() {
    $(document).keyup(function(e){
       userEntry += e.keyCode;
       if (userEntry === konamiCode) {
           alert("You have added 30 lives")
    } else if (userEntry.length === 22 && userEntry !== konamiCode) {
        userEntry = "";
    }
        console.log(userEntry);
    })
})

//We need a string of 38 38 40 40 37 39 65 66 13