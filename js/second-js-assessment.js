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
    let alphanumeric = typeCheck === "boolean"? "false" : (typeof parseFloat(input) === "number"  ? "true" : "false")
        return ` ${input} is a ${typeCheck}:\n alphanumeric string: ${alphanumeric}\n string: ${string}\n boolean: ${boolean}\n negative: ${negative}\n array: ${array}`;

}

// else if (typeof parseFloat(input) === 'number'){
//     return ${input} is an alpha-numeric string!;
// }

console.log(inputFeatures([1, 3, 4], "string"));
// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)
//

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
// -- Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values
//
// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
//
// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
//
// -- Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties
//
//
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