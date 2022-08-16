"use strict";
//let flavor = prompt("Welcome to Codeup Ice cream. What flavor do you want?");

//flavor = flavor.toLowerCase();
//
//if (flavor === "chocolate") {
//    alert("One Chocolate coming right up!");
//} else if (flavor === "vanilla") {
//    alert("One Vanilla coming right up!");
//} else {
//    alert("We do not have that flavor. Sorry! :(");
//}



//switch (flavor) {
//    case("chocolate"):
//        alert("One chocolate coming right up!");
//        break;
//    case("vanilla"):
//        alert("One vanilla coming right up!");
//        break;
//    case("strawberry"):
//        alert("One strawberry coming right up!");
//    deafult:
//        alert("We do not have that flavor. Sorry! :(")
//}

//Ternary Operator(Shorthand If/Else)

//let decision = confirm("Are you sure you want to close this page?");

//if (decision) {
//    alert("OK, closing the page.");
//    } else {
//    alert ("OK, keeping page open")
//    }

//(decision)?alert("Closing the page"):alert("Keeping the page open.");

//function divisibleByFive(number) {
//    number % 5 === 0 ? alert ("That number is divisible by 5") : alert ("That number is divisible by 5");
//    }
//divisibleByFive(prompt("Enter a number: "));



//function divisibleByFive(number) {
//    alert(number % 5 === 0 ? "That number is divisible by 5" : "That number is not divisible by 5");
//}
//
//divisibleByFive(number);


//function alertMVPCustomer(purchaseTotal) {
//    if (purchaseTotal > 1000) {
//        alert ("MVP!")
//    }
//
//}
//alertMVPCustomer(1001);

//writing a function that returns a boolean

function isMVP(purchaseTotal) {
    return purchaseTotal > 1000;

}

let customer1purchase = 1001;

if (isMVP(customer1purchase)) {
    alert ("MVP!")
}
