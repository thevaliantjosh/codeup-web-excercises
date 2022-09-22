"use strict"

/*1) Lets take a look at the .each method
* 2) notice that we put an index into the .each method
* 3) This will allow us to target indexes of a certain value*/


$(function () {
    // lets loop through the "li's with .each method
    //

    const listItems = $("li")

    listItems.each(function(index, element){
        if (index % 2 !==0) {
            $(element).css("font-style", "italic");
        }

    });

    listItems.first().css("font-size", "larger");

    // $("li a").last().css("text-decoration", "underline dotted");

    $("button").on("click", function(){
        // $("ul").children().toggleClass("sansSerif");
        $("ul").last().children().children().toggleClass("sansSerif").css("text-decoration", "underline dotted");
    })


    $("h2").css({
        "border": "1px solid black",
        "backgroundColor": "lightgrey",
        "width": "fit-content",
        "padding": "1px",
        "boxShadow": "1px 1px"
    }).on("click", function(){
            $(this).next().slideToggle();
        });

    //you can select header p to select the paragraph that is a decendant of header. adding .parent() will select the parent of the header
    $("header p").hover(function(){
        $(this).parent().toggleClass("darkMode");
    })




    //lets target the last list item of the first ul list

    //you could select it like this to accomplish the same thing
    //however you can pass the .each method an index, to target what you like
    // $("li").css("font-style", "italic");
});