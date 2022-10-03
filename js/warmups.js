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


/* Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
* You have an array of objects. You access items in an array with []. i.e. classes[1]. to access the part of the object you need .students. (i.e. classes[1].students);
*
*  */
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];



// classes.forEach(student => {
//     for (let total in student ) {
//         return student + classes.students
//     }
// }

let numericArray = [8, 10, 20]

function arraySum(array) {
    let total = 0;
    for (let i=0; i < array.length; i++) {
        total += array[i]
    }
        return total;
}
console.log(arraySum(numericArray));

function calculateTotalStudents(array) {
    let total = 0;
    for (let i = 0; i < array.length ; i++) {
        total += array[i].students
    }
    return total;
}
console.log(calculateTotalStudents(classes));

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

// function convertToObject(nameOfClass, numberOfStudents){
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     };
// }

const convertToObject = (nameOfClass, numberOfStudents) => {
    return {
        class: nameOfClass,
        numberOfStudents: numberOfStudents
    }
}

console.log(convertToObject("Intro to Programming", 20));

const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

function desirableNeighborhood(neighborhoodObject) {
    let totalRating = 0;
    for (let i = 0; i < neighborhoodObject.schools.length; i++) {
        totalRating += neighborhoodObject.schools[i].rating;
    }
    return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;

}



// function desirableNeighborhood(neighborhoodObject){
//     let totalRating = 0;
//     for (let i = 0; i < neighborhoodObject.schools.length; i++){
//         totalRating += neighborhoodObject.schools[i].rating;
//     }
//     return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;
// }

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

/*Whats the cost of each level level*level*priceOfCan
* each level costs the amount of cans * the price of the can
* The amount of cans in each level will be the square of the number of the level
* (you could have a recursive solution here)
* calculate each cost of level and refer to the bonus
* continue;
* calculate cost of next level then add to the previous
* Need a totalCost accumulator variable and some kind of level variable that keeps track of what level I'm on and I need to keep looping unitl totalCost > referral bonus.
*
*
* */


function beeramid(bonus, price) {
    let totalCost = 0;
    let levels = 0;
    while(totalCost < bonus) {
        totalCost += levels * levels * price;
        if(totalCost + ((levels + 1) **2 * price) >bonus){
            break;
        }
        levels++;

    }
    return levels;
}

// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price;
//     let x = 0;
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){
//         x = i;
//     }
//     return x;
// }
//
// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
//     let x = 0; //accumulator variable
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
//         x = i; //match the acumulator to the number of levels
//     }
//     return x;
// }

// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:
//
//     ```
// {
//   firstName: '...',
//   lastName: '...',
//   email: '...',
//   username: '...',
//   password: '...'
// }
// ```
//
// The shape of the output should be the following:
//
//     ```
// {
//   firstName: '...',
//   lastName: '...',
// }
//
// Regardless of the case of the first name and last name input, the output should be in all lower case.

var fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123'
}
//getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}


function getSimpleUser(object) {
    return {firstName: object.firstName.toLowerCase(), lastName: object.lastName.toLowerCase()};
}

console.log(getSimpleUser(fred));

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//

//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

function createNames(array1, array2) {
    let bucket = [];
    for(let i = 0; i < array1.length; i++) {
        bucket.push({firstName: array1[i], lastName: array2[i]});
        //console.log(bucket);
    }
    return bucket;
}

console.log(createNames(firstNames, lastNames));


const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567
}


// function totalAttendance(attendance) {
//     let attendanceArray = Object.values(attendance);
//     let total = 0;
//     for (let i = 0; i < attendanceArray.length; i++) {
//         total += attendanceArray[i];
//     }
//     return total;
// }
// console.log(totalAttendance(attendance));

/*Using a for...in loop to do the same thing*/

function totalAttendance(attendanceObject) {
    let total = 0;
    for (const prop in attendance) {
        total += attendance[prop];
    }
    return total;
}

console.log(totalAttendance(attendance));


// Given the attendance object, write a function that returns the total attendance across all teams.

// Given the attendance object, write a function that returns the average attendance

function averageAttendance(attendanceObject) {
    let total = 0;
    for (const prop in attendance) {
        total += attendance[prop];
    }
    return total/Object.keys(attendance).length;
}

console.log(averageAttendance(attendance));



// Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values

// function createObject(attendanceObject) {
//     let total = 0;
//     for (const prop in attendance) {
//         total += attendance[prop];
//     }
//     return {
//         totalAttendance: total,
//         averageAttendance: total/Object.keys(attendance).length
//     }
// }
//
// console.log(createObject(attendance));


function createObject(attendanceObject) {
    let total = 0;
    for (const prop in attendance) {
        total += attendance[prop];
    }
    attendanceObject.statistics = {
        totalAttendance: total,
        averageAttendance: total/Object.keys(attendance).length
    }
    return attendanceObject;

}

console.log(createObject(attendance));

// Convert to Number
//  * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
//  * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
//  *
//  * Examples
//  *
//  * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
//  * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
//  * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
//  */
// /**
//  * Online Shopping
//  * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
//  *
//  * Examples
//  *
//


/*==================DOM WARMUPS==========================================*/

//When the user clicks the button that has the text "Change Heading", the text of the h1 element change ro read " I pwn the DOM"


// Every time the user enters a character in the input with id "source", that
// character appears in the <p> element with the id "output"
//Create a on "click" function for the button



$(function(){
    $("#pwn").on("click", function(){

        $("h1").html("I pwn the DOM!");//You can also use .text
    });

    $("#source").on("keyup", function(){
        // e.preventDefault();
        // console.log($("#source").val());
        $("#output").text($("#source").val());
    })
})


