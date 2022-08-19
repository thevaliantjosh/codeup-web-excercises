//alert("Welcome to Arrays lecture!");

//declaring an array literal:

let groceryList = ["bread", "eggs",  "butter", "milk"]

//remember the first element of an Array has an index of 0

//to access any of the items you need to use the index

//arrays begin at 0 so start at 0. if the length of the array is 4 and the index of the last item is 3, then you need to
//i will let you get the first element of the array (i = 0) then with each loop iteration (i++) and will stop at groceryList.length(which is 4 in this case);
// for(let i = 0; i < groceryList.length; i++ ) {
//     if (i === groceryList.length -1) {
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ");
//     }
//
// }

//alert("hello arrays");

let myVideoGames = ["Grim Dawn", "Morrowind", "Diablo 3", "Oblivion"];
//console.log(myVideoGames);
for(let j = 0; j < myVideoGames.length; j++) {
    if (j === myVideoGames.length -1) {
        console.log("I am currently playing " + myVideoGames[j] + ".")
    } else {
        console.log("I have played " + myVideoGames[j] + " and ");
    }
}

//Class demso
let texasCities = ["San Antonio", "Dallas", "Houston", "Austin"];
// for (let k = 0; k < texasCities.length; k++) {
//     if (k % 2 === 1) {
//         console.log(texasCities[k] + " is an odd city.");
//     } else {
//         console.log(texasCities[k]);
//     }
//
// }

function outputArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
// outputArray(texasCities);

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

/*forEach loop takes an anonymous function the function we pass to the forEach loop
has up to three parameters.
*The First Parameter represents the array elements
The second parameter represents the element index
The third parameter represents the array itself
The second and third parameters are optional

 */

prices.forEach(function(price, index) {
    console.log("item number " + (index +1) + " costs " + price);
})


//arrow function example
myVideoGames.forEach(game => {
    console.log("I like to play " + game)
});

//Array Methods
//Adding and element to an array
groceryList.push("potatoes");
console.log(groceryList);
//removing an element from an array;
groceryList.pop();
console.log(groceryList);

//add and remove from the beginning of the array with .unshift
groceryList.unshift("sliced cheddar", "Bacon");
console.log(groceryList);

//shift will take away

groceryList.shift();
console.log(groceryList);

let indexOfButter = groceryList.indexOf("butter");
console.log(indexOfButter);

//directly replace something at any known index by assigning a new value at that point

groceryList[indexOfButter] = "Peanut Butter"
console.log(groceryList);

//let bread = groceryList[0];
//assign new value to the index of the element [] in the array
groceryList[1] = "Tortillas";
console.log(groceryList)
//.slice() takes a start index and an end index the end index will not include that element
let firstHalfOfGroceryList = groceryList.slice(0, 2);
console.log(firstHalfOfGroceryList);

let secondHalfOfGroceryList = groceryList.slice(2);
console.log(secondHalfOfGroceryList);

//you need to slice twice to preserve the second part of the array
//.push() with .concat
firstHalfOfGroceryList.push("Butter");
groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
console.log(groceryList);

//.reverse() change the order of the array

groceryList.reverse();
console.log(groceryList);

groceryList.sort();
console.log(groceryList);
console.log(groceryList.reverse());

//sorting numbers in numeric order
prices.sort(function(a,b) {
    return a-b;
})
console.log(prices);

console.log(groceryList.sort());


// for (let i = 0; i < groceryList.length; i++) {
//     groceryList[i] = groceryList[i].toLowerCase();
// }
// console.log(groceryList.sort());

groceryList.forEach((item, index, array) => {
    array[index] = item.toLowerCase();
    })
console.log(groceryList);