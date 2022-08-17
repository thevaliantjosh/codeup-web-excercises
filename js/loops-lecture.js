//alert("Welcome to Loops-lecture!")

// let slices = 4;
//
// console.log(`There are ${slices} slices`);
// while (slices > 0) {
//     console.log("I'll have slice");
//     slices--;
//     console.log(`Now there's ${slices} slices left`);
//
// }
//
// console.log("NO MORE 'ZA BRA!");


/*The while counter is used to know when to stop the counter, so in this case
* while counter is greater than or equal to zero it will count down from 100
* when it reaches zero, it will stop*/
// let counter = 100
// while (counter >= 0) {
//     console.log(counter);
//     counter--;
// }

/*The "Let" is the loop control variable it
the "while" is when it will stop */

// let number = 5
// console.log(5);
// while (number < 200) {
//     //console.log(number);//if the console.log is here you will not see 320
//     number *= 2;
//     console.log(number);//*if the console.log is here you will see the 320
//     /*because the console.log happens after the last code runs*/
// }

//Price total indicator: ask the user for input: How much does something cost
//Assign the user input to a variable
//store the user input
//Keep track of a running total
//declare a variable to hold the total cost
//Tell the user what the total is
//Get the user input for the next items cost
//There needs to be a way for the user to say there is no more items


//First Draft:
// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item: ")); //prompt returns a string every time
//
//
// /*if you want to change the alert, you will have to change it in two places
// * how can we take this code and refactor it to be more effiecient */
// total = total + priceOfItem;
// alert("Your total is now: " + total);
// let userInput = "";
// while (userInput !== "stop") {
//     userInput = prompt("Enter the price of your next item: ")
//     if (userInput === "stop") {
//         alert("Your final total is " + total);
//     } else {
//             priceOfItem = parseFloat(userInput);
//             total = total + priceOfItem;
//             alert("Your total is now: " + total);
//         }
//
// }
// //What happens if you want to keep entering prices for items

/*while (true) is an infinite loop, becuase the loop will continue if the condition is true*/
let total = 0;
let priceOfItem;
while (true) {
    let userInput = prompt("Enter the price of your item: " + "\nEnter STOP when you are done");
//break will help you break out of a loop (if you want to break out of a function you to return false)
// notice we are using a conditional inside of a loop
    if (userInput.toUpperCase() === "STOP") {
        alert("Your final total is " + total.toFixed(2));
        break;
    } else {
        priceOfItem = parseFloat(userInput);
        total = total + priceOfItem;
        alert("Your total is: " + total.toFixed(2));
    }
}




