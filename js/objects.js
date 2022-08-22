//alert("Welcome to Objects");
//objects are declared with curly braces
//it a series of key value pairs seperated by commas
//the last key value pair should not have a comma
//currentWeather is the object
//the properties are everything in the curly braces.
let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"

}
//Use dot notation to access object property values under most circumstances
// console.log(currentWeather.temp);
// console.log(currentWeather.feels_like);
// console.log(currentWeather["humidity"]);
// let userChoice ="clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp"
// console.log(currentWeather[userChoice]);
//bracket notation allows you to use variables
//name of the object than a dot, then name of the property

//object properties are varaibles, and can be uses the same as any other varible
//
// if(currentWeather.temp > 95) {
//     console.log("It's kind of hot")
// } else {
//     console.log("It's cool today for Texas");
// }
//loop through an Array using for in loop;
// for (let property in currentWeather) {
//     console.log(property + ": " + currentWeather[property])
// }

//dynamically add new properties to an object that already exists

// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);


//Arrays of Objects:
//With Arrays you use bracket notation plus the index:
//to access a property in the object use hourlyWeather[0].time; 0 expresses the first obeject and then you use the dot notation to access the property.
let hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];
// console.log(hourlyWeather[0]);

//Loop over an array of objects

// for (let i = 0; i < hourlyWeather.length; i++) {
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`)
// }

//for each loop, takes three arguments. 1. The value of the element 2. the index of the element 3. The Array object being traversed. It executes a provided function once for each array. It will always start at the beginning of the array.
// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like: ${forecast.feels_like}`)
// );

//Array of objects where within the objects their are properties that are objects
let texasInfo = [
    {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
];

// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);


//A Method is a property whose value is a function
//"this" represents the object that the method is trying to call
//Using function in objects
//Let's create a controller object to handle anything players or game object do that affects the state of the game. The controller might handle taking user input and calculating the users effect on the game.

let controller = {
    attack: function(attacker, defender) {
        let defenderHPBeforeAttack = defender.hitPoints;
        let damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
    }

}



//The view object handles output
let view = {
    displayAttackResults: function(attacker, defender, defenderHPBeforeAttack, damage) {
        console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points.`)
        console.log(attacker.name + " attacks!");
        console.log(`${attacker.name} does ${damage} hit points of damage!`);
        console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
        console.log("----------------");
    }

}

let model = {
    fighter: {
        name: "Arata",
        hitPoints: 18,
        maxDamage: 8

    },


    monster: {
        name: "Goblin",
        hitPoints: 8,
        maxDamage: 6

    }

}


//fighter.attack(monster);
//fighter["attack"](monster);

controller.attack(model.fighter, model.monster);
controller.attack(model.monster, model.fighter);