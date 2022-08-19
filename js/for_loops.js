//alert("Welcome to the For Loops Exercise!");

//My Answer to Problem 1
// function showMultiplicationTable(number) {
//     for (let i = 0; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${i * number}`);
//     }
// }


//class discussion on Problem 1
//start by hardcoding
//break problems down into their component parts
//the below will only give the output of "only" 7 times t
//let number = 7
// console.log(number + " X 1 = " + number * 1);//the last number will iterate
// console.log(number + " X 2 = " + number * 2);
//
// function showMultiplicationTable(){
//     let number = prompt("Enter a number");
//     for(let multiplier = 1; multiplier <= 10; multiplier++){
//         console.log(`${number} X ${multiplier} = ${number * multiplier}`);
//     }
// }
// showMultiplicationTable();

//continued to make the for loop inside a function
//the final result was what I got for the first problem



//My Answer to Problem 2

// function numberIsOdd(number) {
//     return number % 2 !== 0;
// }
// function numberIsEven(number) {
//     return number % 2 === 0;
// }
//
// function isOddOrEven() {
//     for (let randomNumber = 0; randomNumber <= 10; randomNumber++) {
//         let randomNumber = Math.floor(Math.random() * 200) + 20;
//         if (numberIsEven(randomNumber)) {
//             console.log(`${randomNumber} is even`);
//         } if (numberIsOdd(randomNumber)) {
//             console.log(`${randomNumber} is odd`);
//         }
//     }
// }

//class demonstration of Problem 2

// for(let i = 0; i < 10; console.log("I pity the fool " + i), i++){
//
// }

// for(let i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * 181) + 20;
//     if(randomNum % 2 === 0) {
//         console.log(randomNum + " is even");
//     } else {
//         console.log(randomNum + " is odd");
//     }
// }

//My attempt at Problem 4
// for(let i = 0; i <= 10; i++) {
//     for (let j = "0"; j <= 10; j++) {
//         if(parseFloat(j) === i){
//             return j
//         }
//         console.log(i + j);
//     }
// }

//Class demonstration at Problem 3 (Pyramid)
//You could do a loop within a loop
//or Just repeat a string!!
//for loop needs to be a string
// for (let i = 1; i <= 9; i++) {
//     console.log(i.toString().repeat(i));
// }


//can also be achieved with a loop within a loop
/* you can start with a while loop*/
for (let i = 1; i <= 9; i++) {
    let outputString = ""; //start with an empty string
//than loop a number of times equivalent to whatever number you want
    for (let count = 0; count < i; count++) {
        outputString = outputString + i;
    }
//you dont need to explicity convert the number to a string in this case since outputstring is a string
    console.log(outputString)
}


//class demonstration for Problem 4
//shorthand: i-= 5
// for(let i = 100; i >= 5; i = i -5) {
//     console.log(i);
// }

//break statements

// let string = "";
// for (let i = 0; i < 8; i++ ) {
//     let word = prompt("Let's make a sentence! Enter a word: ");
//     string += " "  + word;
//     if (word === "curses") {
//         alert("That word is not allowed!")
//         continue;
//     }
//     console.log("Your sentence is: " + string);
// }

//Practice for loop

// function printNumbers() {
//     for(let i = 0; i <= 10; i++){
//         console.log(i);
//     }
// }
// printNumbers();

let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let someMoreNumbers = [9, 10, 11, 12, 13, 14];

function addNumbers(array1) {
    let addArray1 = 0
    for(let i = 0; i < array1.length; i++) {
        addArray1 += array1[i];
    }
    return addArray1;
}
console.log(addNumbers(someNumbers));