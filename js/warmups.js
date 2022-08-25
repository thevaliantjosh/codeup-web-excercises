//alert("Welcome to Warmups!");
console.log("This is the Warmups HTML");

/*1)Write a function that accepts an array of numbers and returns its average.
* Bonus: If there are any non-numeric values in the array, return false.
* Numeric Strings should count as numeric values
*
* 2) Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
* Bonus: If there are any values that are not strings. return false
*1) Create an array of numbers
* 2) Always start by solving the simplest case first
*3) Do NOT start with solving the Edge cases first.
* 4) creat a total accumlator variable
* 5) Loop through the array
*
*
* */


let arrayOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

let newArray = ["8", 25, "78"];

//want to add every iteration of the loop to the next number
//return bucket / array.length;
//now we don't want non-numeric
//My attempt
// function average(array) {
//     let bucket = 0;
//     for(let i = 0; i < array.length; i++) {
//         bucket += array[i]
//
//     }
//     return `The average of the array is: ${bucket / array.length}`;
// }
// console.log(average(arrayOfNumbers));


function arrayAverage(array) {
    let total = 0;
    for (let i = 0; i < parseFloat(array.length); i++) {
        if (!isNumber(array[i])){return false;}
        total += parseFloat(array[i]);
    }
    return `The average of the array is: ${total/array.length}`;
}



// function arrayAverage(array) {
//     let total = 0;
//     array.forEach(number => {
//         if (!isNumber(number)){return false;}
//         total += number
//     });
//     return `The average of the array is: ${total/array.length}`;
// }
console.log(arrayAverage(arrayOfNumbers));
console.log(arrayAverage(newArray));

let stringArray = ["Jabba", "Darth Maul", "Hondo"];

function longestString(arrayOfStrings) {
    let longest = "";
    for(let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > longest.length) {
            longest = arrayOfStrings[i];
        }
    }

    return longest;
}



