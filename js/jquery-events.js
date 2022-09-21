"use strict"
console.log("Welcome to the jQuery Events Lecture");

$(function(){
    //we have to select the button on the page
    //we use the "on" method instead of "click" here
    //The function is the event listener (or Handler, or callback)
    //Register the on("click"...) to the handler of function()
    //Then the alert will be fired on click
    $("#clickMe").on("click", function(){
        alert(`You clicked the button with Id of: "#clickMe"!`)
    });
    //Below is the create and element method
    $("#create-an-element").on("click", function(){
        //select the element that caused the event to be triggered w/ $(this)
        $(this).after("<button class='will-this-work'>I'm a new element! Look at me!</button>")
        // $(".will-this-work").on("click", function(){
        //     alert("OoOOOOOoooOWEEEEEEEE!!!!");
        // })
    });
//We put this dynamic alert inside a <section> element in the html
    //we then listen for an .on("click....) inside the section
    //instead of using the entire document [$(document)]
    $("#dynamic-content").on("click", ".will-this-work", function()
    {
        {alert("OoOOOOOoooOWEEEEEEEE!!!!")}
    })

        $(".box")
            .hover(function(){
            $(this).addClass("hotpink");

            },
            function(){
                $(this).removeClass("hotpink");
            })
        .click(function () {
            if($(this).hasClass("blue")){
                $(this).removeClass("blue")
            }
            else {
                $(this).addClass("blue");
            }

        });



    $(document).keydown(function(e) {
        // alert("You just pressed a key down")
        console.log(e.originalEvent.key);
    })

});
