"use strict"
console.log("jQuery Selectors");

//put a $ in front of variables that ar jQuery object methods

$(function(){
    const $refToLibrary = $("#library");
    //id selector to alter content
    // refToLibrary.text("jQuery makes life easier");
    //get reference to content
    // console.log(refToLibrary.text());
    let li3text = $refToLibrary.text();
    $refToLibrary.text(li3text + " makes life easier");

    //you can select classes with jQuery

    // $(".framework").css('border', '1px solid black');
    //making more than one css property at a time
    $(".framework").css({
        'border': '1px solid black',
        'width': 'fit-content'
    });
    //selecting all paragraph and all list items on the page and chaining methods
    $("p, li").text("I've taken over.").css("color", "hotpink");
})