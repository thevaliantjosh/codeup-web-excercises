"use strict"

// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let output = "";

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

console.log(`Array returned after using prices.map ${pricesAfterTax}`)
// const [prices, pricesAfterTax] = prices

//.map: Transforms each element in the collection
const doubleArray = prices. map(price => price * 2)
console.log(doubleArray)
console.log(prices)


const desserts = ["Sherbert", "Whisky Cake", "Eclair", "Cupcake"];

const eatingDessert = desserts.map(dessert => `Eating ${dessert}`)

eatingDessert.forEach(element => {
    $("div").append(`<p>${element}</p>`)
})


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
console.log(mileages);//You will see every mileage in the cars array of objects

const newObject = cars.map(car => {
    delete car.mileage;
    return car;
})


//without using .map







