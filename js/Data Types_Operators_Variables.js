"use strict";
//alert("Welcome to Data Types")
  <!--Bonus Challenges:-->
<!--Create a function that takes a single character in a string and returns the index of the specified character in that string.-->
<!--Create a function that takes three strings and returns a copy of the first string with the first instance of the second string substituted for the characters of the third string.-->
<!--Do the same, but replace all instances of the second string with the characters of the third string.-->
<!--Create a function that takes a string and two numbers and returns the subset of the original string assuming the two numbers are indexes.-->
//string practice 1


    const animals = "giraffe, lion, dog, cat"
    console.log(animals);

    console.log(animals.replace("giraffe", "Zebra"));


    console.log(42 + parseInt("42"));
    console.log(21.5 + parseFloat("22.5"));

//parseFloat will still parse even with other numeric characters

    console.log(parseFloat ("22.45 and other stuff here"));
    console.log (typeof parseFloat("22 is a very interesting number"));

//My attempt at Problem 1
<!--         function letsMultiply(number, number)-->
<!--        if (parseFloat(number) * parseFloat(number)) {return true-->
<!--        } else { return false}-->
<!--    }-->

//attempt 2

<!--        function canWeMultiply(number, number2)-->
<!--            if (parseFloat isNan(number) || parseFloat isNaN(number2)) {-->
<!--                return false-->
<!--                } else {-->
<!--                    return parseFloat(this) * parseFloat(that);-->
<!--                    }-->
<!--                  }-->


//The Answer to problem 1

    function multiply(value1, value2) {
        if (isNaN(value1) || isNaN(value2)) {
            return false
            } else {
                return parseFloat(value1) * parseFloat(value2);
            }
    }

<!--Create a function that takes a single character in a string and returns the index of the specified character in that string.-->


    function returnAChar(char) {
        let thisString = "Find the Index of a Character in this String"

        return thisString.indexOf(char);
    }

<!--Create a function that takes three strings and returns a copy of the first string with the first instance of the second string substituted for the characters of the third string.-->

    let firstString = "This"
    let secondString = "isn't"
    let thirdString = "Fun!"
//Function that you can put anything to replace the word "isn't"
    function stringReplace(string) {
        let stringCombine = `${firstString} ${secondString.replace("isn't", string)} ${thirdString}`;
        console.log(stringCombine);
    }
//Function that combines the second and third with the first

    function stringFusion() {
        let pullFirstInstance = secondString.substring(0,2)
        console.log(`${firstString} ${pullFirstInstance} ${thirdString}`);

    }
  <!--Create a function that takes a string and two numbers and returns the subset of the original string assuming the two numbers are indexes.-->

    function stringWithIndexes(string, num1, num2) {
        console.log(string.substring(num1, num2));
    }

    console.log("The Function: stringWithIndexes(string, num1, num2)\nreturns the string within the index range of the two numbers entered! \nFor example: ");

    //testing how using a function within console.log works.

    console.log(stringWithIndexes("Hello World and all who inhabit it!", 0, 12));

//example of the function .toUpperCase
    let myName = "Joshua Sprouse"
    console.log(myName);

/*using toUpperCase() here will only console log a new string in all caps
it doesn't modify the original value of variable. This is because strings are immutable, meaning they will not change*/
    console.log("using the .toUpperCase() function!");
    console.log(myName.toUpperCase());

    console.log("Using the .toUpperCase() function inside a new variable called myNameCaps")
    let myNameCaps = myName.toUpperCase();
    console.log(myNameCaps);

 //using the .toLowerCaser() function
    console.log("Using myNameCaps and making it all lower case with the .toLowerCase function");
    console.log(myNameCaps.toLowerCase());


//example fo using the function .trim()
    function removingSpaces(string) {
        return (string.trim(string));
    }

//Exercises in Data Types

    let a = 1;
    let b = a++;
    let c = ++a;

    console.log("I believe the value of a, b, and c should be 5")

    function totalOfABC() {
        console.log(a + b + c);
    }

    let d = "hello"
    let e = false;

    console.log(d++);
    console.log(e++);
    let perplexed = "perplexed"
    console.log(perplexed + 2);

    function isNotANumber(value) {
        if (value === NaN ) {console.log("That value is NaN!")
            } else if (value === typeof boolean) {console.log("That value has a typeof \"boolean\"!");
            }   else {console.log("That value is a number!")};
    }

var username = prompt("Please Enter Your username: ");
var password = prompt("Please Enter Your password: ");


//let fiveOrMore = password.length > 5;
//let containsUsername = password.includes(username);
//let usernameTwentyOrLess = username.length <= 20;
//let userStartsOrEndsWith = username.startsWith(" ")|| username.endsWith(" ");
//let passStartsOrEndsWith = password.startsWith(" ")|| password.endsWith(" ");
//
//let isStrong = fiveOrMore && !containsUsername && usernameTwentyOrLess && !userStartsOrEndsWith && !passStartsOrEndsWith;

function findIfStrong(username, password) {
    let fiveOrMore = password.length > 5;
    let containsUsername = password.includes(username);
    let usernameTwentyOrLess = username.length <= 20;
    let userStartsOrEndsWith = username.startsWith(" ")|| username.endsWith(" ");
    let passStartsOrEndsWith = password.startsWith(" ")|| password.endsWith(" ");

     return fiveOrMore && !containsUsername && usernameTwentyOrLess && !userStartsOrEndsWith && !passStartsOrEndsWith;
}

console.log(findIfStrong(username, password));