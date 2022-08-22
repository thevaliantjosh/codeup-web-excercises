(function() {
    "use strict";
//alert("Welcome to the Objects Exercise");
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Joshua",
        lastName: "Sprouse",
        sayHello: function(greeting) {
            return (`${greeting} ${this.firstName} ${this.lastName}`)
        }
    }
    console.log(person.sayHello("Hello and Welcome to the Object Exercise"));

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}

    ];

    shoppers.forEach(function(shopper){
        let discount = (shopper.amount > 200 ? shopper.amount * .12 : 0).toFixed(2);
        let total = (shopper.amount - discount).toFixed(2);
        console.log(`${shopper.name} -- total: $${shopper.amount}, discount: $${discount}, final amount: $${total}`);
    })


//        function applyDiscount(discount) {
//            for (let i = 0; i < shoppers.length; i++) {
//                 if (shoppers[i].amount > 200) {
//                     let discountApplied =  shoppers[i].amount - (discount * shoppers[i].amount);
//                     let discountAmount = shoppers[i].amount * discount
//                     console.log(` ${shoppers[i].name}'s Total is: ${shoppers[i].amount} \n discount applied is: ${discountAmount}\n amount after discount: ${discountApplied} `);
//                 } else {
//                     console.log(` ${shoppers[i].name}'s Total is: ${shoppers[i].amount} \n discount applied is: 0\n amount after discount: ${shoppers[i].amount} `)
//                 }
//            }
//        }
//
//
// console.log(applyDiscount(.12));



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title:"The Hitchhikers Guide to the Galaxy",
            author:{
                firstName: "Douglas",
                lastName: "Adams"}
        },
        {
            title:"Mattimeo",
            author:{
                firstName: "Brian",
                lastName: "Jacques"}
        },
        {
            title:"The Last Wish: Introducing The Witcher",
            author:{
                firstName: "Andrzej",
                lastName: "Sapkowski"}
        },
        {
            title:"The Name of the Wind: Kingkiller Chronicle, Book 1",
            author:{
                firstName: "Patrick",
                lastName: "Rothfuss"}
        },
        {
            title: "Harry Potter and the Order of the Phoenix",
            author:{
                firstName: "J.K.",
                lastName: "Rowling"}
        }

    ]


    console.log(books[0].title);
    console.log(books[1].title);
    console.log(books[2].title);
    console.log(books[3].title);
    console.log(books[4].title);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(book, index));
    // {
    // //     console.log("Book # " + (index + 1));
    // //     console.log("Title: " + book.title);
    // //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
    // //     console.log("---")
    // //
    // // })

    function showBookInfo(book, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
        console.log("---")

    }

    books.forEach(function(book, index) {
        //console.log("Book # " + (index + 1));
        showBookInfo(book, index);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    // function createBook(title, firstName, lastName) {
    //     title: title,
    //         author: {
    //         firstName: firstName,
    //             lastName: lastname
    //     }
    // }
    //
    //
    // books.push(createBook("The Great Gatsby", "F. Scott", "Fizgerald"));


})();
