"use strict";
//Function to see if something is only a number
function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}

//This function gives a random number that is both positive and even
function randomEvenNumber() {
    let randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !==0) {
        return randomEvenNumber();
    }
    return randomNumber;
}

