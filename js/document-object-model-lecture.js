"use strict"

// alert("Welcome to the DOM")


// let accessTheDOM = document.getElementById("dc");
// let showMe = accessTheDOM.innerHTML;
//
// console.log(showMe);
//
// let marvel = document.getElementById("marvel");
//
//
// let preference = "dc";
//
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
// /* This sees the DC inner HTML and adds Animated Universe */
// accessTheDOM.innerHTML += marvel.innerHTML
//
// marvel.setAttribute("class", "hotpink");
//
// let hotPinks = document.getElementsByClassName("hotpink");
//
// for (let i =0; i < hotPinks.length; i++) {
//     hotPinks[i].style.fontSize = "2em";
// }


/*Need reference to the button*/

let submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function() {
    let colorInput = document.getElementById("colorPreference");
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = colorInput.value;
    }
}

// let submitButton = document.getElementById("colorSubmission");
// submitButton.onclick = function(){
//     let colorInput = document.getElementById("colorPreference");
//     let paragraphs = document.getElementsByTagName("p");
//     for (let i = 0; i < paragraphs.length; i++){
//         paragraphs[i].style.color = colorInput.value;
//     }
// }

function getElementsByClassEven() {
    let evenElements = document.getElementsByClassName("even");
    return console.log(evenElements[0]);
    for (let i = 0; i < evenElements.length; i++) {
        console.log(evenElements[i]);
    }
}
getElementsByClassEven();

/*This will output all the child nodes in the section element*/
let myNodeList = document.body.childNodes[1].childNodes;
for (let i = 0; i < myNodeList.length; i++) {
    document.write(myNodeList[i] + " <br>");
}
// <p id="hulk" data-state="hulk" data-strength="super" data-intelligence="low">The Hulk</p>
let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state");
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}`
// theHulk.innerText = hulkSummary;

//Reference to teh Transformation button

let transformButton = document.getElementById("transformHulk");

transformButton.onclick = function(){
    let theHulk = document.getElementById("hulk");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`
}