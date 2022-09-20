"use strict"
// alert("Welcome to jQuery Lecture!");


/*Call the function jQuery and pass it a css element (selector)
* This functions like querySelectorAll()
* You can then use methods
* function: defines the event handler (.click) and registers (function) it in the same line
// * $(this).next will select the next sibling of the selected element ("h3")*/
$(document).ready(function(){
    jQuery("h3").click(function(){
        // alert("yo");
        $(this).next().slideToggle(500);/*$(dollarsign) is short for jQuery*/
    });
});

// function init() {
//     $("h3").click(function(){
//         $(this).next().slideToggle(500);
//     });
// }
//
// window.onload = init;