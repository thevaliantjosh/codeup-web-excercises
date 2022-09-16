"use strict"
// alert("Welcome to the DOM Events Lecture");
console.log("Welcome to DOM Events");
//Reference the button with query selector

let theButton = document.querySelector("button");

//Write a function that will be triggered by and event
//A function is a set of instructions
//A function that is triggered by an event is called an event handler, or also called a callback
//the function contains the instructions that will run when the event is triggered

function eventHandler() {
    alert("You clicked me!");
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
    alert (`I am a ${squareColor} square!`);
}

theSquare.addEventListener("click", theHandler)

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
