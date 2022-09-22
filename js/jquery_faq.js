"use strict"
// console.log("Welcome to the jQuery FAQ!");

$(function() {
    // let hidden = {
    //     "visibility": "hidden"
    // };
    //
    //
    // let highlight = {
    //     "background-color": "#FF0",
    //     "width": "fit-content"
    // };

    let descriptionDetails = $(".invisible")


    $("dl").before('<div class="createdContent"><a href="#" class="showTheFaqs">Show the FAQs</a></div>');



        $(".createdContent").on("click", ".showTheFaqs", function(){
            {descriptionDetails.toggleClass("invisible")}
    });


        //bonus
    $("dt").on("click", function() {
        $(this).toggleClass("highlight");
    });

});