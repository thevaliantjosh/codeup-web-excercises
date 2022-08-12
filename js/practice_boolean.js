console.log("Practice Booleans!");

//alert("Welcome to My Website!");
//
//let favoriteColor = prompt("What's your favorite color?");
//
//alert("Great, " + favoriteColor + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let daysOfLittleMermaid = prompt("How many days did you rent Little Mermaid?");
let daysOfBrotherBear = prompt("How many days did you rent Brother Bear?");
let daysOfHercules = prompt("How many days did you rent Hercules?");

let totalCost = (daysOfLittleMermaid * 3) + (daysOfBrotherBear * 3) + (daysOfHercules * 3);

alert("Your total cost is " + totalCost + " dollars.");

