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
    clouds: 75

}
console.log(currentWeather.temp);
//name of the object than a dot, then name of the property

let fighter = {
    name: "Arata",
    hitPoints: 18,
    maxDamage: 8,
    attack: function(opponent) {
        console.log(opponent.name + " has " + opponent.hitPoints + " hit points.");
        console.log(this.name + " attacks!");
        let damage = Math.ceil(Math.random() * this.maxDamage);
        opponent.hitPoints -= damage;
        console.log(this.name + " does " + damage + " points of damage");
        console.log(opponent.name + " now has " + opponent.hitPoints + " hit points.");
    }

}

let monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 6


}