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
console.log(`The prices Array: ${prices}`)


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

/*Your saying here for Each object you want to extract the mileage from the object in the array of objects you want to extract the key value pair of mileage.*/
const mileages = cars.map(car => car.mileage);
// console.log(mileages);//You will see every mileage in the cars array of objects

// const newObject = cars.map(car => {
//     delete car.mileage;
//     return car;
// })


//without using .map
//(element, index, array)
//


const under10K = cars.filter(car => car.mileage < 10000);

// console.log(under10K[0].mileage)

under10K.forEach(({make, model, mileage}, index) => {
    output += `<p>Car number ${index + 1}: I found a ${make} ${model} with ${mileage} miles</p>`
    $("#output").html(output)
})


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



console.log(`all items under $10 ${under10DollarsWithTax}`);

//any time your getting a total or an average, you need an accumulator variable
//accumulator
//element
//

const totalCost = prices.reduce(function (total, price){
    return total + price;
})

//At index 0 it is like it does let total = arrayElement[0]

let total = prices.reduce(function(total, itemPrice, index){
    console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
    return total + itemPrice;
});
$("#output").append(`<p>The total is ${totalCost}</p>`);

console.log(totalCost);

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

console.log(`Using .filter to get the evens: ${evens.join(", ")}`)
console.log(evens);

//Using .map
//For .map, the return value of the callback will be the new value of the element

const increment = numbers.map(number => number + 1)

console.log(increment);

//Using .reduce
/*Used to reduce a collection to a single value. Most commonly, we will use it to transform a collection into a primitive value*/

const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0)

console.log(sum);

//Using .reduce
/*You can use .reduce to transform the shape of a collection.
If we want to count the number of occurrences of a certain word in an array of words, we can transform our array of strings into an object whose property names are each word, and whose values are the number of times each words appears.
*/

const salesPeople = [
    {name: "Jim Halpert", sales: 100},
    {name:"Dwight Schrute", sales: 50 },
    {name:"Andy Bernard", sales: 150},
]

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0)

console.log(`Adding the total of all Sales in Each object in an array using .reduce: ${totalSales}`);

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
    }, {}); //Start with an empty object
    return wordCountObject
}



console.log(countWords("Mary had a little lamb little lamb little lamb"))