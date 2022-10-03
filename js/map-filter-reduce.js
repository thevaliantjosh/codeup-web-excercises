"use strict"

// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = "";

//Explaining for Each
//price is the parameter
//it represents everything that is in the prices array
//each element in the array of prices is called prices
//take each element in the array is what prices is doing
//if there is more than one parameter in an arrow function, you need parenthesis
//second parameter is the index of the array
/*1) Three parameters can be used
*
*
*
*
*
*
* */


//using the forEach method


// prices.forEach((price, index, array) => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2)
//     output += `<p id="price-${index+1}">Item number: ${index + 1} Price: $${price}. Tax: $${tax}. Total: $${total}</p>`;
//     $("#pricesList").html(output)
//     if (index === array.length -1) {
//         $("div").append("<p>That's it!!!</p>")
//     }
// });





const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

//This will loop through the array and apply the transformation to the new array


const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2)
    return parseFloat(total);
})

// console.log(`Array returned after using prices.map ${pricesAfterTax}`)
// const [prices, pricesAfterTax] = prices

//.map: Transforms each element in the collection
const doubleArray = prices. map(price => price * 2)
// console.log(doubleArray)
// console.log(`The prices Array: ${prices}`)


const desserts = ["Sherbert", "Whisky Cake", "Eclair", "Cupcake"];

const eatingDessert = desserts.map(dessert => `Eating ${dessert}`)

// eatingDessert.forEach(element => {
//     $("div").append(`<p>${element}</p>`)
// })


/*1)Given an array of objects you can use .map to extract what you want from each property
* 2)
* 3)
*
*
* */
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];

/*Your saying here for Each object you want to extract the mileage from the object in the array of objects you want to extract the key value pair of mileage.*/
// const mileages = cars.map(car => car.mileage);
// console.log(mileages);//You will see every mileage in the cars array of objects

// const newObject = cars.map(car => {
//     delete car.mileage;
//     return car;
// })


//without using .map
//(element, index, array)
//


// const under10K = cars.filter(car => car.mileage < 10000);

// console.log(under10K[0].mileage)

// under10K.forEach(({make, model, mileage}, index) => {
//     output += `<p>Car number ${index + 1}: I found a ${make} ${model} with ${mileage} miles</p>`
//     $("#output").html(output)
// })


//Lets get all the items under the prices array and filter it
//Than add the tax onto it,
//Than display that onto the page

//Once it is filtered than apply the tax calculation




 const under10DollarsWithTax = prices.filter(price => price < 10)
    .map(price =>{
        const tax = (price * 0.0825).toFixed(2);
        const total = (price + parseFloat(tax)).toFixed(2)
        return parseFloat(total);
    })

     // .forEach(prices => $("div").append(`<p>${prices}`))



// console.log(`all items under $10 ${under10DollarsWithTax}`);

//any time your getting a total or an average, you need an accumulator variable
//accumulator
//element
//

const totalCost = prices.reduce(function (total, price){
    return total + price;
})

//At index 0 it is like it does let total = arrayElement[0]
//total is set to equal the first element in the array
//The second variable (itemPrice is set to equal the second element in the array)

// let total = prices.reduce(function(total, itemPrice, index){
//     console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the itemPrice is ${itemPrice}`);
//     return total + itemPrice;
// });

// $("#output").append(`<p>The total is ${totalCost}</p>`);

console.log(totalCost);

//Getting an average using .reduce

// const averagePrice = prices.reduce((function(accumulator, current, index, array){
//     console.log(accumulator);
//     accumulator += current;
//     if (index === array.length -1) {
//         return accumulator/array.length;
//     }
//     return accumulator;
// }))

console.log("You have $158.76 dollars worth of items in your shopping cart.")

const total = prices.reduce(function(total, priceOfItem){
   return total + priceOfItem;
}, 158.76);//inserting a custom initial value

// const total = prices.reduce((total, priceOfItem) =>{
//     total += priceOfItem;
// }, 158.76)


console.log(`Your total cost is $${total.toFixed(2)}.`)


//If we want to produce an array of even numbers it would normally look like this

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evensOnly(array){
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0){
            evens.push(numbers[i]);
        }
    }
    return evens;
}

// console.log(evensOnly(numbers));

/*Map and filter will both accept a callback function that is applied to each element in the collection
* For .filter, if the callback returns true, the element will be in the new collection, if it returns false, the element will not be part of the new collection
* */

//Using .filter

const evens = numbers.filter(number => number % 2 === 0);

// console.log(`Using .filter to get the evens: ${evens.join(", ")}`)
// console.log(evens);

//Using .map
//For .map, the return value of the callback will be the new value of the element

const increment = numbers.map(number => number + 1)

// console.log(increment);

//Using .reduce
/*Used to reduce a collection to a single value. Most commonly, we will use it to transform a collection into a primitive value*/

const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0)

// console.log(sum);

//Using .reduce
/*You can use .reduce to transform the shape of a collection.
If we want to count the number of occurrences of a certain word in an array of words, we can transform our array of strings into an object whose property names are each word, and whose values are the number of times each words appears.
*/
/*
* The function passed to the reduce method takes an extra parameter,
* the accumulator variable.
* The accumulator is often abbreviated "acc"
* The accumulator is a total of all elements in an array.
*
*
*
*
* */



const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

//More .reduce Practice

const mileages = cars.reduce((accumulator, car) => {
    accumulator.push(car.mileage);
    return accumulator;
},[]);

console.log(mileages);


// const highestMileages = cars.reduce((accumulator, car, index, array) =>{
//     accumulator.push(car.mileage);
//     if (index === array.length -1){
//         // return accumulator.sort(function (a, b){return b-a})[0];
//         // return Math.max(...accumulator);
//         return Math.max.apply(Math, accumulator);
//     } else {accumulator.push(car.mileage)}
//     return accumulator;
// }, []);

const highestMileages = cars.reduce((accumulator, car) =>{
    accumulator.push(car.mileage);
    return accumulator;

}, []).reduce((accumulator, mileage) => {
    return Math.max(accumulator, mileage);
});

console.log(highestMileages);

const salesPeople = [
    {name: "Jim Halpert", sales: 100},
    {name:"Dwight Schrute", sales: 50 },
    {name:"Andy Bernard", sales: 150},
]

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0)

// console.log(`Adding the total of all Sales in Each object in an array using .reduce: ${totalSales}`);

//Transforming a string into an array then into an object with countable properties

function countWords(sentence) {
    const words = sentence.split(" "); // transform a sentence into an array
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === "undefined"){
            //if the word is not yet present in our object, set its value to 1
            wordCounts[word] = 1;
        } else {
            //otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); //Start with an empty object, end of words.reduce
    return wordCountObject
}



// console.log(countWords("Mary had a little lamb little lamb little lamb"))

/*======================EXERCISES========================================*/

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

//An Array of user object where each object has at least 3 languages in the languages array

//Old Way

// let threeLangOld = [];
// for (let i = 0; i < users.length; i++){
//     console.log(users[i].languages.length);
//     if(users[i].languages.length > 2) {
//         threeLangOld.push(users[i]);
//     }
// }
// console.log(threeLangOld);




const userLanguagesObject = users.filter(user => {
    return user.languages.length >= 3;
});

console.log(userLanguagesObject);

//Use .map to create an array of strings where each element is a user's email address


/*Your saying here for Each object you want to extract the mileage from the object in the array of objects you want to extract the key value pair of mileage.*/
// const mileages = cars.map(car => car.mileage);

const usersEmails = users.map(user => user.email)

console.log(usersEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// const averagePrice = prices.reduce((function(accumulator, current, index, array){
//     console.log(accumulator);
//     accumulator += current;
//     if (index === array.length -1) {
//         return accumulator/array.length;
//     }
//     return accumulator;
// }))



// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0)



//Using .reduce to get the average years from all the yearsOfExperience in the users array of objects.

//In class demonstration:
//Make sure to give a starting value [, 0]
let totalExp = users.reduce((total, user) =>{
    return total + user.yearsOfExperience
}, 0)

console.log(`The users have a total of ${totalExp} years of experience`);

let averageExp = totalExp / users.length;

console.log(`The users hava an average of ${averageExp} years of experience`);



//My solution:
const averageYearsOfExperience = users.reduce((accumulator, user) =>{
    accumulator.push(user.yearsOfExperience);
    console.log(accumulator);
    return accumulator;
}, []).reduce((accumulator, years, index, array) => {
    console.log(accumulator);
    accumulator += years;
    if (index === array.length -1){
        return accumulator/array.length;
    }
    return accumulator;
});


console.log(averageYearsOfExperience);


// Use .reduce to get the longest email from the list of users.

// const highestMileages = cars.reduce((accumulator, car) =>{
//     accumulator.push(car.mileage);
//     return accumulator;
//
// }, []).reduce((accumulator, mileage) => {
//     return Math.max(accumulator, mileage);
// });


// function countWords(sentence) {
//     const words = sentence.split(" "); // transform a sentence into an array
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === "undefined"){
//             //if the word is not yet present in our object, set its value to 1
//             wordCounts[word] = 1;
//         } else {
//             //otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); //Start with an empty object, end of words.reduce
//     return wordCountObject
// }


//In class demonstration

let longestEmail = users.reduce((currentLongestEmail, user) =>{
    // if (currentLongestEmail.length > user.email.length){
    //     return currentLongestEmail;
    // } else {
    //     return user.email
    // }
    return currentLongestEmail.length > user.email.length ? currentLongestEmail : user.email;
})

console.log(longestEmail);


// const longestUserEmail = users.reduce((accumulator, user) =>{
//
//     accumulator.push(user.email);
//     return accumulator;
// }, []).reduce((accumulator, email) =>{
//     return
// });
//
// console.log(longestUserEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


// let userNames = users.reduce((list, user)=>{
//     return list += (user.name + ", ");
// }, "Your instructors are: ")
//
// console.log(userNames);

let userNamesBetter = users.reduce((pre, user, index, usersArray)=>{
    let beginning;
    let end;
    if (pre){//on the first iteration of the loop
        beginning = ", ";
    } else {
        beginning = "Your instructors are: ";
    }
    if (index == (users.usersArray -1)){
        end = ".";
    }
    return pre + `${beginning}${user.name}${end}`
    //
    // return pre + `${pre ? ", ": "Your Instructors are: "}${user.name}${(index == (usersArray.length -1)) ? "." : ""}`
}, "");

console.log(userNamesBetter);


// Use .reduce to get the unique list of languages from the list of users.


let uniqueLanguages = users.reduce((accumulator, user)=>{
    user.languages.forEach(function(language){
        if (!accumulator.includes(language)){
            accumulator.push(language);
        }
    });
    return accumulator;
}, []);

console.log(uniqueLanguages);