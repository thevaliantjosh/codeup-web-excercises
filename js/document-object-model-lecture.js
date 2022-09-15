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