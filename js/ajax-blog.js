"use strict"
// console.log("Welcome to the Ajax Blog!");
$(function() {
    updateBlogs();
        $("#updatePosts").on("click", function () {

                $("#posts").children().remove();
                updateBlogs()

        });
});
function updateBlogs() {
    $.ajax("data/blog.json").done(function(data){
        console.log(data);
        data.forEach(function(blog){

                let categoriesTemplate = "";
                for(let i = 0; i < blog.categories.length; i++){
                    // console.log("Inside Categories For Loop")
                    categoriesTemplate += `<a href="#" class="card-link px-1">${blog.categories[i]}</a>`;
                }
                let postTemplate = `
                     <div class="card mx-1 w-auto">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${blog.date}</h6>
                            <p class="card-text">${blog.content}</p>
                            ${categoriesTemplate}
                        </div>
                    </div>`;
                console.log(postTemplate);
                $("#posts").append(postTemplate);


        })
    });
}