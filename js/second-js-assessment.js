"use strict"
console.log("Welcome to the Second JS Assessment Study Guide!");
// -- Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)
//



//1)I want to put value into input
//2)I want to check for the type of feature is is in feature
/*3)I want to display the stats of that input, aka.

inputFeature(15, "number")

 15 is a number:
 number: true
 string: false
 array: false
 boolean: false
 negative: false

 inputFeature(True, "string")
 True is a boolean:
 number: false
 array: false
 boolean: false
 negative: false
 string: false

 and so forth

* */

//using ternary operators
let a = 1;
let b = a > 0? (a === 1? "A is 1" : "A is not 1") : (a === 0? "A is zero" : "A is negative");

console.log(b);

let negativeAlphanumeric = "-15";

function inputFeatures(input, feature){
    let typeCheck = typeof input //this wil show us inputs type
    let array = Array.isArray(input)  ? "true" : ( feature === "array" ? "true" : "false")
    let boolean = (typeCheck === "boolean" && feature === "boolean") ? "true" : "false"
    let negative = parseFloat(input) < 0 ? "true" : "false"
    let string = (typeCheck === "string" && feature === "string") ? "true" : "false"
    let alphanumeric = typeCheck === "boolean"? "false" : (typeof parseFloat(input) === "number" && feature === "string" ? "true" : "false")
        return ` ${input} is a ${typeCheck}:\n alphanumeric string: ${alphanumeric}\n string: ${string}\n boolean: ${boolean}\n negative: ${negative}\n array: ${array}`;

}

// else if (typeof parseFloat(input) === 'number'){
//     return ${input} is an alpha-numeric string!;
// }

// console.log(inputFeatures([1, 3, 4], "string"));
// console.log(inputFeatures("15", "string"));
// console.log(inputFeatures(-1, "number"));
// console.log(inputFeatures(true, "boolean"));
// console.log(inputFeatures("Hello", "string"));
// console.log(inputFeatures(false, "number"));


// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)
//

function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(3));

function upperCase(string){
    return string.toUpperCase();
}

console.log(upperCase("hello"));


//Double the string

function repeatString(string){
    return string.concat(" ", string)
}

console.log(repeatString("string"));

//You can add an optional first parameter, and it will add that between the concat



function numberToStringArray(number) {
    let newNumbersArray = []
    let arrayOfNumericStrings = []
    for (let i = 1; i <= number; i++) {
        newNumbersArray.push(i);

    }
    newNumbersArray.forEach(number =>{
        arrayOfNumericStrings.push(String(number * 2));
    })
    console.log(arrayOfNumericStrings);
    return ` New Numbers Array: ${newNumbersArray}\n New Array of Numeric Strings:  ${arrayOfNumericStrings.join(", ")}`
}
console.log(numberToStringArray(5));

// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
//

//Remove First Element in the Array

const someArray = [1, 2, 3, 4, 5]


function removeFirstElement(array){
    array.shift();
    return array;
}
console.log(removeFirstElement(someArray));

function moveFirstToLast(array){
    let firstElement = array.shift();
     array.push(firstElement);
     return array;
}

console.log(moveFirstToLast(someArray));



// -- Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values
//


// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
//

let cityAndState = "San Antonio, Texas";

/*Write a function that returns:
 {
    city: "San Antonio,
    state: "Texas"

 }
*1) Try using .split();
*
*
*
*
* */

function cityStateObject(cityAndState){
    return {
        city: cityAndState.split(", ")[0],
        state: cityAndState.split(", ")[1],
    }
}

console.log(cityStateObject(cityAndState));

// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
//

let stringExample = "This is an example of a string"

function stringLength (string) {
    return string.length;
}

console.log(`The Length of the variable stringExample is: ${stringLength(stringExample)}`);

// -- Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties
//
//

function analyzeString(string) {
    return {
        length: stringLength(string),
        firstLetter: string.charAt(),
        lastLetter: string.charAt(string.length -1).toLowerCase()
    };
}

console.log(analyzeString(stringExample));
//

//Write a function that removes every odd number from an array of numbers

let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeOdds(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(`Array without odds: ${removeOdds(arrayOfNumbers)}`)

/*Write a function that takes an array of numeric values and returns an array with all those values doubled*/


function doubleTheNumbers(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
            newArray.push(array[i] * 2);

    }
    return newArray;
}

console.log(`Array with every number doubled:\n original ${arrayOfNumbers} \n doubled: ${doubleTheNumbers(arrayOfNumbers)}`);


// -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.
//
//     /**
//      * Get Sum of People's Budget
//      * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//      *
//      * Examples
//      *
//      * >> getBudgets([
//      *        { name: "John", age: 21, budget: 23000 },
//      *        { name: "Steve",  age: 32, budget: 40000 },
//      *        { name: "Martin",  age: 16, budget: 2700 }
//      *    ]) ➞ 65700
//      * >> getBudgets([
//      *        { name: "John",  age: 21, budget: 29000 },
//      *        { name: "Steve",  age: 32, budget: 32000 },
//      *        { name: "Martin",  age: 16, budget: 1600 }
//      *    ]) ➞ 62600
//      */
//
//
//     /**
//      * Get Student Top Notes
//      * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
//      * If the student does not have notes then let's assume their top note is equal to 0.
//      *
//      * Examples
//      *
//      * >> getStudentTopNotes([
//      *      {
//      *         id: 1,
//      *         name: "Jacek",
//      *         notes: [5, 3, 4, 2, 5, 5]
//      *       },
//      *      {
//      *         id: 2,
//      *         name: "Ewa",
//      *         notes: [2, 3, 3, 3, 2, 5]
//      *       },
//      *      {
//      *         id: 3,
//      *         name: "Zygmunt",
//      *         notes: [2, 2, 4, 4, 3, 3]
//      *       }
//      *    ]) ➞ [5, 5, 4]
//      */
//
//

const students = [
         {
              id: 1,
              name: "Jacek",
              notes: [5, 3, 4, 2, 5, 5]
            },
           {
              id: 2,
              name: "Ewa",
              notes: [2, 3, 3, 3, 2, 5]
            },
           {
              id: 3,
              name: "Zygmunt",
              notes: [2, 2, 4, 4, 3, 3]
            }
         ]

// The Math.max() function returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
// console.log(Math.max(1, 3, 2));
// // expected output: 3
//
// console.log(Math.max(-1, -3, -2));
// // expected output: -1
//
// const array1 = [1, 3, 2];
//
// console.log(Math.max(...array1));
// // expected output: 3


// function getStudentTopNotes (arrayOfStudentObjects) {
//     const topNotes = [];
//     arrayOfStudentObjects.forEach(studentObject => {
//         topNotes.push(Math.max(...studentObject.notes));
//     })
//     return topNotes;
// }

function getStudentTopNotes (arrayOfStudentObjects){
    let topNotes = [];
    for (let i = 0; i < arrayOfStudentObjects.length; i++) {
        let topNote = arrayOfStudentObjects[i].notes[0];
        for (let j = 0; j < arrayOfStudentObjects[i].notes.length; j++){
            if (arrayOfStudentObjects[i].notes[j] > topNote){
                topNote = arrayOfStudentObjects[i].notes[j];
            }
        }
        topNotes.push(topNote);
    }
    return topNotes;
}

console.log(`Students Top Notes are: ${getStudentTopNotes(students)}`);

//Function to see if something is only a number
function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}

//
//     /**
//      * TODO:
//      * Remove the Letters ABC
//      * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//      *
//      * Examples
//      * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//      * >> removeABC("hello world!") ➞ null
//      * >> removeABC("") ➞ null
//      *
//      * Notes
//      * If the given string does not contain "a", "b", or "c", return null.
//      */
//
//

//1) use .slice
//2)use string.replace("character you want replaced", "new value");

let myGreeting = "Hello World";
// let abc = "abc";
let aardvarks = "Aardvarks apples banana and cantaloupes"
console.log(aardvarks.includes("a"));

function removeABC(string) {

    if (string.includes("a") || string.includes("b") || string.includes("c")){
        console.log(string);
        let stringWithoutA = string.toLowerCase().replaceAll("a", "");
        // console.log(stringWithoutA);
        let stringWithoutAB = stringWithoutA.toLowerCase().replaceAll("b", "");
        // console.log(stringWithoutAB)
        let stringWithoutABC = stringWithoutAB.toLowerCase().replace("c", "");
        // console.log(stringWithoutABC);
        return stringWithoutABC;

    } else {
        return null;
    }
}

console.log(`${aardvarks}, is Now: ${removeABC(aardvarks)}`);
console.log(removeABC(myGreeting));

//     Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
//
// Examples...
//
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
//
//
//
//
//
// Write a function that accepts the top three bowling scores and returns the average.
//
//     Write a function that accepts the top three bowling scores and returns the average.
// 1. write a function
// 2. pass in parameters
// 3. 3 scores ( variables)
// 4. return something (number)
//
// let first = 120;
// let second = 234;
// let third = 90;
//
// Modify the function to accept an array of bowling scores and return the average
//
// Write a function that accepts an array of bowling scores and returns the highest
//
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3



/*===================FOLLOWING THE JAVASCRIPT TUTORIAL VIDEO=====================*/

//Testing double equals
function testEqual(val) {
    if (val == 12){
        return "Equal";
}
    return "Not Equal";
};

// console.log(testEqual(10));

//Testing Strict Equal

function strictEqual(val) {
    if (val === 12) {
        return "Equal to Type and Value";
    }
    else if (val == 12) {
        return "Equal to Value but not type";
    } else if (val !== 12 && typeof val !== "number") {
        return "Not Equal to Value nor type";
    } else if (val !== 12 && typeof val === "number") {
        return "Equal to type but not value"
    }
}

// console.log(strictEqual(12));
// console.log(strictEqual("12"));
// console.log(strictEqual(7));
// console.log(strictEqual("7"));

//Equality operator and strict equality operator

function compareEqual(a, b) {
    if (a === b) {
        return `Equal to type of "number" or "string" and value of 10`;
    }
    else if (a == b) {
        return `Equal to value of 10 even if its a "string"`
    }
    return "Not Equal to type nor value";
}

// console.log(compareEqual(10, "7" ));
// console.log(compareEqual(10, 10));
// console.log(compareEqual("10", "10"))
// console.log(compareEqual(3, "Hello"));
// console.log(compareEqual(10, "10"));

//inequality != checks for value and converts it value is in a "string
//It will pass true if it is NOT this value
//strict inquality !== checks for value and type
//it will pass true if it is NOT this type and value

function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    } else if (val === 99) {
        return "Equal to Value and type";
    } else if (val == 99) {
        return "Equal to Value but not type";
    }
    return "Equal";
}

// console.log(testNotEqual(99));
// console.log(testNotEqual("99"));
// console.log(testNotEqual(100));
// console.log(testNotEqual("100"));

function testGreaterOrEqual(val){
    if (val >= 20) {
        return "20 or over";
    }
    else if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}

// console.log(testGreaterOrEqual(5));
// console.log(testGreaterOrEqual(11));
// console.log(testGreaterOrEqual(21));

function testLessThan(val) {
    if (val <= 10) {
        return "10 or Less";
    } else if (val <= 20) {
        return "20 or Less";
    } else if (val <= 50) {
        return "50 or Less";
    }
    return "Value is over 50";
}

// console.log(testLessThan(5));
// console.log(testLessThan(15));
// console.log(testLessThan(35));
// console.log(testLessThan(50));
// console.log(testLessThan(55));

//Logical And Operator
/*The below code will only return true ("Yes" in this case) if the argument passed in is:
* Less Than or equal to 50, AND greater than or equal to 25*/
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No"
}

// console.log(testLogicalAnd(35));
// console.log(testLogicalAnd(55));
// console.log(testLogicalAnd(22));

function orderMyLogic2(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

//You will see that the order matters in functions
//The result we want is Less than 5 here
//but because val < 10 is first it returns the first true statement, ending the function

// console.log(orderMyLogic2(3))

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

// console.log(orderMyLogic(3));

//Chaning If/else if/else statements to fullfill the following condition
/*1) num < 5 = return "tiny"
2) num < 10 = return "Small"
3) num < 15 = return "medium"
4) num < 20 = return "Large"
5) num >= 20 = return "Huge"
*
*
*
*
*
* */

function variousSizes(val) {
    if ( val < 5) {
        return "Tiny";
    } else if (val < 10){
        return "Small";
    } else if (val < 15) {
        return "Medium";
    } else if (val < 20) {
        return "Large"
    } else { /*We do not need the final else if here with the condtion of (num >=20) because if it is anything greater than or equal to 20 the else will run*/
        return "Huge"
    }
}

// console.log(variousSizes(3));
// console.log(variousSizes(8));
// console.log(variousSizes(14));
// console.log(variousSizes(18));
// console.log(variousSizes(50));



/*Write a function that takes in the par (amount of suspected strokes)
* and the strokes it actually took
* Then display this as the nickname of that par
* ex. function gameOfGolf(par, strokes)
* es. gameOfGolf(2, 1) will display "Hole-in-one!"
* Strokes      Return
* 1             "Hole-in-one!"
* <= par -2     "Eagle"
* par -1        "Birdie"
* par           "Par"
* par + 1       "Bogey"
* par +2        "Double Bogey"
* strokes >= par -3     "Double Eagle"
*par + 3        "Triple Bogey"
* */
const parNames = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Double Eagle", "Triple Bogey"]
function gameOfGolf(par, strokes) {
    if (strokes == 1) {
        return parNames[0]//Hole in one
    } else if (strokes <= par -2) {
        return parNames[1]//Eagle
    } else if (strokes == par -1) {
        return parNames[2]//Birdie
    }  else if (strokes === par) {
        return parNames[3]//par
    } else if (strokes == par + 1) {
        return parNames[4]//
    } else if (strokes == par + 2) {
        return parNames[5]
    } else if (strokes >= par - 3) {
        return parNames[6]
    } else if (strokes == par +3) {
        return parNames[7]
    } else {
        return `${strokes - par} Over par!`
    }
}

// console.log(gameOfGolf(3, 1));
// console.log(gameOfGolf(3, 2));
// console.log(gameOfGolf(3, 3));
// console.log(gameOfGolf(3, 4));
// console.log(gameOfGolf(3, 5));
// console.log(gameOfGolf(5, 2));
// console.log(gameOfGolf(3, 7));
// console.log(gameOfGolf(3, 8));
