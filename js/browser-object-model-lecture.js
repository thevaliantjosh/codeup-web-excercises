"use strict"
// alert("Welcome to the browser object model lecture!");

/*Put the count inside a variable sayHey as well as the hey function*/
let sayHey = function() {
    let count = 0;
    function hey() {
        if (count < 10) {
            console.log("hey" + count);
            count++
        } else {
            clearInterval(theInterval);
        }
    }
    let theInterval= setInterval(hey, 1000)
}

// let count = 0;
// let thisTimeItWillStop;
// function hey() {
//     if (count < 10) {
//         console.log("hey " + count);
//         count++
//     } else {
//         clearInterval(thisTimeItWillStop);
//     }
// }
// thisTimeItWillStop = setInterval(hey, 1000);

function tenHeys() {
    let count = 0;
    let thisWillStop = setInterval(function(){
        if (count < 10) {
            console.log("hey " + count);
            count++
        } else {
            clearInterval(thisWillStop);
        }
    }, 1000)
}

setTimeout(wakeUpUser, 5000)

function wakeUpUser() {
    alert("WAKE UUUUUPPP!!!");
}

// function neverShows() {
//     let count = 0;
//     let dontPopUp = setTimeout(function(){
//         alert("If you see this, you got it wrong :'(");
//     }, 5000)
// }