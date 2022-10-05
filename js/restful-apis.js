"use strict"
// alert("Welcome to Restful API's");

/*API --- Application Programming Interface
* a set of rules defining how applications and/ or devices can connect ot each other and communicate with one another
*
* REST means Representational State Transfer
*A pattern of design principles for APIs
*REST APIs communicate via HTTP requests
*
*In a REST API communication via HTTP reqeuests is used to perfomr the standard set of actions called CRUD
* Create, Read, Update, Delete
* HTTP only enables two kinds of request GET and POST
*
* REST API creates different request types
*
* JSON Javascript Object Notation - is not mandatory but is popular becuase
* it is both human and machine-readable
* */

//https://glitch.com/stingy-prickle-sternum
//URL constants:
const booksURL = "https://stingy-prickle-sternum.glitch.me/books"


const moviesURL = "https://stingy-prickle-sternum.glitch.me/movies"


//The R in CRUD is Read



function getMovies(){
    fetch("https://stingy-prickle-sternum.glitch.me/movies")
        .then(response => response.json())
        .then(data => console.log(data));
}

getMovies();

//The C in CRUD is Create:

//In order to put Books in the Books array in the Json we have to make a POST request

const bookToPost = {
    title: "Eleanor of Aquitaine",
    author: {
        firstName: "Ralph",
        lastName: "Turner"
    }
}

const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(bookToPost)
}

//Create a Read for the books

function getBooks(){
    fetch(booksURL)
        .then(response => response.json())
        .then(data => console.log(data));
}

getBooks();//We see an empty array thus far, because we havent posted the books array yet


//The below code will post the book to the books array in the json
// fetch(booksURL, postOptions).then(getBooks)

//The U in CRUD is Update
//With PUT and PATCH requests
//Well use PUT to replace the entire content
//Well use PATCH to modify only part of the entry

let modification = {
    title: "Eleanor of Aquitaine: Queen of France, Queen of England"
}

const patchOptions = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(modification)
}

//We need to grab the ID from the book we are modifying

// fetch(booksURL + "/1", patchOptions).then(getBooks);



//PUT Request

modification = {
    title: "Eleanor of Aquitaine and the Four Kings",
    author: {
        firstName: "Amy",
        lastName: "Kelly"
    }
}

const putOptions = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(modification)
}

//This will put the updated modifications to the 1st book
// fetch(booksURL +"/1", putOptions).then(getBooks);

//The D in CRUD is delete

const deleteOptions = {
    method: "DELETE",
    headers: {
        "Content-Type": "applications/json"
    }
}

fetch(booksURL +"/1", deleteOptions).then(getBooks);