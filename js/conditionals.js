"use strict";
//alert("Welcome to the Conditionals Exercise!")
// * TODO/:
// * Create a function named `analyzeColor` that accepts a string that is a color
// * name as input. This function should return a message which relates to the
// * color stated in the argument of the function. For colors you do not have
// * responses written for, return a string stating so
// *
// * Example:
// *  > analyzeColor('blue') // returns "blue is the color of the sky"
// *  > analyzeColor('red') // returns "Strawberries are red"
// *
// *
// *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// *
// * You should use an if-else-if-else block to return different messages.
// *
// * Test your function by passing various string literals to it and
// * console.logging the function's return value
// */

//const listOfColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];


//let colorRed = "Red is fire!";
//let colorBlue = "Blue is cool!";
//let colorOrange = "Orange is fruit!";
//let colorYellow = "Cody is Yellow!";



//function analyzeColor(color) {
//let userInput = color.toLowerCase();
//
//    if (userInput == "red") {
//        return colorRed
//    } else if (userInput == "blue") {
//        return colorBlue
//    } else if (userInput == "orange") {
//        return colorOrange
//    } else if (userInput == color) {
//        return ("I don't know anything about: " + color);
//     }
//}




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


let pickAColor = prompt("Pick a Color: Red, Orange, Yellow or Blue.");
let colorSelection = pickAColor.toLowerCase();
switch (colorSelection) {
    case "red":
        alert("Hot sarse is red!");
        break;
    case "orange":
        alert("Orange is a fruit!");
        break;
    case "yellow":
        alert("Don't eat the yellow snow!");
        break;
    case "blue":
        alert("Blue is super sweet!");
        break;
    default:
        alert("I don't know anything by that!");


}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */




/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/* Class Demonstration
function calculateTotal(luckyNumber, total) {
    if (luckyNumber === 0) {
        return total;
    } else if (luckyNumber === 1) {
        return total * .9;
    } else if (luckyNumber === 2) {
        return total * .75;
    } else if (luckyNumber === 3) {
        return total * .65;
    } else if (luckyNumber === 4) {
        return total * .50
    } else
    }
*/
//
//
//let luckyNumber1 = .10
//let luckyNumber2 = .25
//let luckyNumber3 = .35
//let luckyNumber4 = .50
//let luckyNumber5 = 1
//
//
//function calculateTotal(luckyNumber, billTotal) {
//    if (luckyNumber === 1 ) {
//        let discount1 = luckyNumber1 * billTotal;
//        return billTotal - discount1;
//    } else if (luckyNumber === 2) {
//        let discount2 = luckyNumber2 * billTotal;
//        return billTotal - discount2;
//    } else if (luckyNumber === 3) {
//           let discount3 = luckyNumber3 * billTotal;
//           return billTotal - discount3;
//    } else if (luckyNumber === 4) {
//             let discount4 = luckyNumber4 * billTotal;
//             return billTotal - discount4;
//    } else if (luckyNumber === 5) {
//        let discount5 = luckyNumber5 * billTotal;
//        return billTotal - discount5
//    } else {
//        return "No discount, your total is " + billTotal
//    }
//
//}
//
//
//console.log(calculateTotal(0, 100));




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6


// var luckyNumber = Math.floor(Math.random() * 6);
//
//let bill = prompt("Please enter your total bill: ")
//alert ("Your lucky number was " + luckyNumber + "\n" + "Your Price before discount was " + billTotal + "\n" + "Your price after discount is $" + calculateTotal(luckyNumber, billTotal));




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//let numberQuestion = confirm("Would you like to enter a number?");
//
//
//function questionsAndNumbers() {
//    if (numberQuestion === true) {
//       let usersNumber = prompt ("Please Enter your Number");
//        } else if(usersNumber === ( %2 !== 0)) {
//            alert("Please Do Not Enter an odd Number!");
//        } else {
//        return(alert("Lame.....:'("));
//    }
//
//}
function isNumber(value) {
            return !(isNaN(value) || typeof value === "boolean");
        }

function oddOrEven(number) {
    return number % 2 === 0 ? number + " is even." : number + " is odd.";
}

function numberPlus100(number) {
    return number +  " plus 100 equals " + (number + 100);

}

function negativeOrPositive(number) {
    return number < 0 ? number + " is a negative number" : number + " is a positive number" ;
}
function getNumber(){
    if (confirm("Do you want to enter a number?")) {
        return parseFloat(prompt("Enter a number: "));
    }
}

function analyzeNumber(number) {
    if (number === undefined) {
        return false;
    }
    if (isNumber(number)){
    alert(oddOrEven(number));
    alert(numberPlus100(number));
    alert(negativeOrPositive(number));
    } else {
        alert ("Incorrect input data type.");
    }
}
analyzeNumber(getNumber());

//let wantsToEnterNumber = confirm("Do you want to enter a number?");
//if (wantsToEnterNumber) {
//   let userNumber = parseFloat(prompt("Enter a number"));
//   if(isNumber(userNumber));
//   alert(oddorEven(userNumber));
//   alert(numberPlus100(userNumber));
//    if (userNumber < 0) {
//        alert("That is a negative number!");
//    }  else {
//        alert("That is a positive number");
//    }
//}

//       ("Is it Even or Odd?");
//        alert("What's the number plus 100?");
//        alert("Is the Number Negative or Positive?");
//        } else {
//questionsAndNumbers();



