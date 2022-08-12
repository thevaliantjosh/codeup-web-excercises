console.log("Hello form external JavaScript.")
//alert("Welcome to my Website!");
//
//
//let favoriteColor = prompt("What is your favorite color?")
//
//   alert("Great, " + favoriteColor + " is my favorite color too!")
//
//let daysOfLittleMermaid = prompt("How many days did you rent The Little Mermaid?");
//let daysOfBrotherBear= prompt("How many days did you rent Brother Bear?");
//let daysOfHercules = prompt("How many days did you rent Hercules?");
//
//let totalCost = (daysOfLittleMermaid * 3) + (daysOfBrotherBear * 3) + (daysOfHercules * 3);
//
//alert("Your total rental cost is " + totalCost + " dollars");

//let hoursAtGoogle = prompt("How many hours did you work at Google?");
//let payAtGoogle = prompt("What is your hourly pay rate at Google?");
//let hoursAtAmazon = prompt("How many hours did you work at Amazon?");
//let patAtAmazon = prompt("What is your hourly pay at Amazon?");
//let hoursAtFacebook = prompt("How many hours did you work at Facebook?");
//let payAtFacebook = prompt("What is your hourly pay at Facebook?");
//
//let totalPay = (hoursAtGoogle * payAtGoogle) + (hoursAtAmazon * patAtAmazon) + (hoursAtFacebook * payAtFacebook);
//
//alert("Your total pay is: "  + totalPay + " dollars");


//Boolean Logic

//let classFull = confirm("is the class full?");
//let ScheduleConflict = confirm("is there a scheduling conflict?");
//
//
//let canEnroll = !classFull && !ScheduleConflict;
//
//if (canEnroll) {
//    alert("You can enroll")
//} else {
//    alert ("You can't enroll");
//}
//
//console.log(canEnroll);

let numberOfItemsBought = prompt("How many items did the customer buy?");

let offerExpired = confirm("Has the offer expired?");

let premiumMember = confirm("Is the customer a premium member?");


let makeProductOffer = (premiumMember || numberOfItemsBought > 2) && !offerExpired;

if (makeProductOffer)
    alert ("You get a product offer!")
}   else {
        alert("Your are an inferior customer. You must be terminated!")
}