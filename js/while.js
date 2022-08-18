//alert("Welcome to the While exercise!");
//While loops
// let number = 2
// while (number <= 65536) {
//     console.log(number);
//     number = number * 2;
// }
//
// //Do-While Loops
//
// let numberOne = 1
//
// do {
//     console.log("While loop iteration # " + numberOne);
//     numberOne++
// } while (numberOne <= 10);

// let number = Math.ceil(Math.random() * 6);

// let guess; //can call a variable outside a function to then use it later inside one


//example of the do-while loop!
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6: "));
// } while (guess !== number);
//
// alert(`Your guess of ${guess} matches the number ${number} !`);

//Do While Loop exercise

//This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;

//This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;
//Generate the amount of cones being sold
//log to the console the amount of cones sold to each person
// console.log(`You have ${allCones} in stock`);
// let conesSold;
// do {
//     conesSold = Math.floor(Math.random() * 10) + 1;
//     console.log(`You have sold: ${conesSold}`);
//     if (conesSold > allCones) {
//         alert(`Cannot sell you ${conesSold} I Only have ${allCones}`)
//         //alert(`You have ${allCones} Cones remaining`);
//     }
//     allCones = allCones - conesSold;
//     alert(`You have ${allCones} Cones remaining`);
//     console.log(`Cones remaining ${allCones}`);
// } while (allCones >= 0 );
//
// alert("Yay! All them treats are on the streets!");
// This si the loop control variable
// initialize it to a starting value
// let count = 10
//
// //check the value of the loop control variable in a conditionals test
// while (count >= 0) {
//     console.log(count);
//     //change the value of hte loop control variable
//     count--; //(or count= count -1;
// }

//For Loop
//Initialize the loop, check the value, and change all in one line;

// for(let count = 0; count <= 10; count = count +1) {
//     console.log(count);
// }

//change the loop control varialbe to "i" to make it even shorter

for(let i = 10; i >= 0; i--) {
    console.log(i);
}

// let i = 0
// while (i < 10) {
//     i++;
//     console.log(i);
// }
// console.log("Outside the loop: " + i);

//for loop again
// for(i = 0; i < 100; i++) {
//     console.log(i);
// }
// console.log("Outside the loop " + i)

//For Loops Exercises