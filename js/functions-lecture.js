"use strict";
console.log("This is a Functions Lecture!");

//1. function keyword
//2. the name of the function
//3. Parentheses with zero or more parameters
//4. Parameters need commas if there is more than 1
//5. Than insert curly braces {} this contains the function body.
//6. The function body contains the codee that runs when the function is invoked
//7. Than you need a return statment, or a console.log

function sayHello(greeting, name) {
    return `${greeting}, ${name}`;
}

//What happens when you declare variables inside a function?
//you cannot call a variable inside a function
/*a variable that is defined inside a functions code block is called local scope */
// the variable number now has Global scope, and you can use it throughout the page

//Here number has local scope
//the console.log will result in an error
//function localOrGlobal() {
//
//    let number = 20;
//
//}
//console.log(number);

//Here number has GlobalScope and it will work
//let number = 20;
//function localOrGlobal() {
//    console.log(number);
//}
//function declaration

let number = 20;
function localOrGlobal() {
    let number = 10;
    console.log(number);
}
localOrGlobal();
console.log(number);

//function expressions
/*the way you call this function is through the variable,
 assigning a function with no name to a reference variable*/

//calling a function expression before its defined will not get hoisted

//bark(); (this will throw a ReferenceError)

const bark = function() {
    console.log("woof!");
}

//calling the function before its defined gets hoisted

yap();

function yap() {
    console.log("yip yip!");
}

//Arrow Functions
//function declaration
//function add(num1, num2) {
//    return num1 + num2;
//}
//function expression
//const add = function(num1, num2) {
//    return num 1 + num2;
//}
//the below arrow function works exactly like a function expression
//if it returns something in one line, you don't need the return keyword
const add = (num1, num2) => num1 + num2;

//if it only has one parameter, you don't need parens

const addTen = number => number + 10;

//if you have no parameters, use empty parens

const helloWorld = () => "Hello World!";




