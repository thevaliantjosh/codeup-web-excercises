(function(){
    "use strict";
//alert("Welcome to Planets Strings Exercise!");
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');


    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsWithBreaks = planetsArray.join('<br>');
    console.log(planetsWithBreaks);

    let planetsDiv = document.getElementById("planets");
    planetsDiv.innerHTML = planetsWithBreaks;

    let planetsList = planetsArray.join("</li><li>");
    planetsList = "<ul><li>" + planetsList + "</li></ul>";
    planetsDiv.innerHTML += planetsList;






})();
