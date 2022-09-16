"use strict"
// alert("Welcome to the DOM Events Lecture");
console.log("Welcome to DOM Events");
//Reference the button with query selector

let theButton = document.querySelector("#theButton");

//Write a function that will be triggered by and event
//A function is a set of instructions
//A function that is triggered by an event is called an event handler, or also called a callback
//the function contains the instructions that will run when the event is triggered

let counter = 0;
function eventHandler() {
    counter++;
    const counterText = document.createElement("p");
    document.querySelector("#counterOutput").append(counterText);
    // alert("You clicked me!");
    counterText.innerText = counter;
    console.log(counter);

}

//3.Register the handler
/*We can use addEventListener wit two arguments: the type of event and the function that will be triggered*/

// theButton.addEventListener("click", eventHandler)
//or we can right it this way using .onclick
theButton.onclick = eventHandler

// let clickSquare = document.querySelector("div");
// let colorSquare = document.querySelectorAll(".style.color")
// function clickASquare() {
//     alert(`You clicked the ${colorSquare} square!`)
// }
// clickSquare.addEventListener("click", clickASquare)

let theSquare = document.querySelector(".square");
let squareColor = document.getElementsByClassName("background-color");
let theHandler = function() {
    // alert ("I am a square " + window.getComputedStyle(document.querySelector(".square"), null).getPropertyValue("background-color"));
}

//Adding e.target to console logs for information about what clicks do
theSquare.addEventListener("click", function(e){
    console.log(e.target.className);
    let theColor = getComputedStyle(e.target).backgroundColor;
    console.log(theColor);
    document.getElementById("anotherSquare").style.backgroundColor =
    theColor
});

//background information
document.querySelector("body").addEventListener("click", function(event){

})


/*
* 1. Create a handler Function
* 2. Register the Listener to handle clicks
*
*
*
*
* */


/*Below will add a button when the Click Me! button is pressed*/
let duplicate = document.getElementById("duplicate");

let buttonplication = function() {
    const newButton = document.createElement("button");
    const buttonText = document.createTextNode("I'm a new button! Look at me!");
    newButton.appendChild(buttonText);
    document.body.insertBefore(newButton, duplicate)

}

duplicate.onclick = buttonplication;

//This will change the text of the First paragraph
let paragraph = document.querySelector("p");

paragraph.onclick = function () {
    paragraph.innerText = "You put me into my True Form! Thanks buddy!"
}


//This will change the text of the paragraph with the id of #breakthecurse
let changeTextButton = document.querySelector("#breakTheCurse");
changeTextButton.onclick = function () {
    document.querySelector("#cursed").innerText = "Thanks! You broke the curse!"
}


//This will allow you to get the user input from a form field as a console.log

let formInput = document.getElementById("formInput");

formInput.onkeyup = function() {
    console.log(formInput.value);
}


