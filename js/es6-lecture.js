"use strict"

//The exponentation Operator

function powerOf(number, value){
    return number ** value
}

// console.log(powerOf(2, 8));


function doMath(number1, number2, callback){
    let result = powerOf()

}

//without block scope

if(true){
    var myName = 'codeup';
}
// console.log(myName);

//With block scope
if(true){
    let myName = "Codeup";
}

//Var versus let/const
//let and const are not hoisted to the top of their enclosing scope

//example using var

// var snack = "Meow Mix";
//
// function getFood(food){
//     if (food) {
//         var snack = "Friskies";
//         return snack;
//     }
//     return snack
// }
//
// console.log(getFood(false));//undefined


//example using let

let snack = "Meow Mix";
function getFood(food){
    if (food) {
        let snack = "Friskies";
        return snack;
    }
    return snack;//will not get hoisted
}
console.log(getFood(false));//Will return "Meow Mix"
console.log(getFood(true));// Will return Friskies
//Template Strings

const codeup = "codeup"
console.log("Hello, " + codeup + "!");
//Same as
console.log(`Hello ${codeup}!`);

//Using for....of

const array1 = ["a", "b", "c"];

// for (let element of iterable){
//
// }

for (let letter of array1) {

    // console.log(letter.toUpperCase());
}

//Creating variables from object properties

const person = {name: "Joshua", age: 31 };
// const {name, age } = person;
// console.log(name);
// console.log(age);


//passing in object properties as parameters
function tellMeAbout({name, age}){
    console.log(name);
    console.log(age);
}
//calling the function and passing in the variable with the object properties
tellMeAbout(person);

//Destructuring with arrays
const numbersArray = [1, 2, 3, 4, 5]
const [x, y] = numbersArray;
console.log(x);
console.log(y);
console.log(` Numbers Array = ${numbersArray}\n X is equal to: ${x} from the numbers array\n Y is equal to: ${y} from the numbers array`)