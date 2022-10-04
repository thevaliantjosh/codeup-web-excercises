"use strict"
console.log("Welcome to the Promises Lecture");

/*==========HOW WE GET THE DATA WITH JQUERY=============*/

$(function(){
    $.get("data/murals.json", function(data){
        console.log(data);
    })//end of get request
})//end of document.ready


/*=================PROMISES=======================*/

/*A promise represents an even that might not yet have happened. A promise will be in one of three states:
*
* Pending: the event has not yet happened.
* resolved: the event has happened successfully.
* rejected: the event has happened, and an error condition occurred.
*
*
* */

// fetch(`https://api.github.com/users`)
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

/*A promise object has two frequently used methods:
* .then: accepts a callback that will run when the promise is resolved.
* .catch: accepts a callback that will run when the promise is rejected.
*
* The above example has a roughly equal chance of resolving or rejecting the promise
*
* */

/*The fetch returns us a promise, which we then call the .then method on
* and pass a callback function as an argument. A promise is just a JavaScript object, so we could rewrite the above code like so*/

const myPromise = fetch("https://api.github.com/users");
myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));






/*===========IN CLASS LECTURE ON PROMISES==============*/

//Fetch API

// fetch("data/murals.json").then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// })

//Fetch API using arrow functions
//Change response to resp

// fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

/*Callback: a function passed as an argument to another function
* it can run after another function has finished running*/
//
// function sayHello(greeting, name){
//     return `${greeting}, ${name}`;
//     displayOutput(greeting);
// }
//
// sayHello("Hello", "Javier");
//
//
// // let greeting = sayHello("Hola", "Javier"); comment this line out and pass in the argument values for the sayHello function
//
// function displayOutput(output){
//     $("#output").html(output);
// }
//
// // displayOutput(greeting); comment this line out and call this function inside the sayHello function

function greeter(greeting, name, displayFunction){
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

function displayToOutputDiv(output){
    $("#output").html(output);
}

// greeter("Hola", "Javier", displayToOutputDiv)
//
// setTimeout(() => greeter ("Aloha", "Jason", displayToOutputDiv), 3000);
//
// setTimeout(function(){
//     greeter("Wuba Luba Dub Dub", "Joshua", displayToOutputDiv)
// }, 10000)
//
// setTimeout(greeter, 12000, "Dude", "bro", displayToOutputDiv)

const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];


const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];


/*Function that selects a random Greeting and a random Name, that takes a function as an argument*/
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

generateGreeting(greetings, names, displayToOutputDiv)

//Set an interval to do this automatically


/*setInterval() method calls a function at specified intervals(in milliseconds).
//It will continue to call the function until clearInterval() is called or the window is closed
//Syntax: setInterval(function, milliseconds, param1, param2, displayFunction)
//
1)Function: Required. The function to execute
2)milliseconds: Required. The execution interval.
if the value is less than 10, 10 is used
3)Param1, Optional.
4)Param2, Additional parameters to pass to the function in this case the parameters needed for the generateGreeting function

*/

let myInterval = setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv)


//We then stop the execution by calling clearInterval
//We set in into another setInterval so it stops after 20 seconds
//Passing in the myInterval as a parameter will run that function
//Which then displays the names every second
//Then clears the interval after 20 seconds
setInterval(clearInterval, 20000, myInterval);

//Create a funciton taht gets information and displays it

// function getInfo(displayFunction){
//     let request = $.get("data/murals.json", function(result){
//         const infoToDisplay = result.data;
//         displayFunction(infoToDisplay);
//     }).catch(resolveFailure);
// }
//
//
// function resolveFailure(){
//     $("#output").html("That didn't work!");
// }
//
// function displayMuralsInfo(info){
//     let html = "";
//     $("#output").append(html)
//
// }
//
// getInfo(displayMuralsInfo)
// $("#output").append(`<p>Who comes first?</p>`)


//How promises work fundamentally
/*A promise is an object in which we give a callback function
* */
const aPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (Math.random() > 0.5){
            resolve("I was fulfilled!");
        } else {
            reject("I was rejected");
        }
    }, 3000)
});

//using the object

aPromise.then(value => console.log(value)).catch(error => console.log(error));


//A Fetch call returns a promise object
//If successfull, then the .then runs
const myFetchPromise = fetch("data/murals.json").then(response => {
    console.log(response.status);
    console.log(response.headers);
    console.log(url);
    return response.json()
}

    ).then(data => console.log(data)).catch(error => console.log("Where the data at?"))
    .finally(() => console.log("I'm going to happend no matter what!"));

console.log(myFetchPromise);


/*=============GIT HUB PROMISES==============*/

fetch("https://api.github.com/users/thevaliantjosh",{
    headers: {
        "Authorization": GITHUB_PROMISES_TOKEN
    }
}).then(response => response.json())
    .then(events => console.log(events))
    .catch( error => console.error(error))