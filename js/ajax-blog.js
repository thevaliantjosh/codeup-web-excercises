"use strict"
console.log("Welcome to the Ajax Blog!");
//
// $(function() {
//     loadTable();
//     // alertThis('whatever you want it to say', /'the second message');
//
//     $("#refresh").on("click", function(){
//         $("#insertProducts").children().remove();
//         loadTable();
//         // alertThis('Seriously, whatever goes here gets sent into the function to be used', 'and here comes the second one');
//     });
// });
//
// function loadTable() {
//     $.ajax("data/inventory.json").done(function(data){
//         console.log(data);
//         let counter = 0;
//         data.forEach(function(tool){
//             counter++;
//             //console.log(`title: ${tool.title} quantity: ${tool.quantity} price: ${tool.price} categories: ${tool.categories}`)
//             let toolTemplate = `
//                     <tr>
//                         <th scope="rowgroup">${counter}</th>
//                         <td>${tool.title}</td>
//                         <td>${tool.quantity}</td>
//                         <td>${tool.price}</td>
//                         <td>${tool.categories}</td>
//                     </tr>`;
//             $("#insertProducts").append(toolTemplate);
//         })
//     });
// }
$(function() {
    updateBlogs();
        $("#updatePosts").on("click", function () {
            if (blog.date.includes("2022")){
                $("#posts").children().remove();
                updateBlogs()
            }
        });
});
function updateBlogs() {
    $.ajax("data/blog.json").done(function(data){
        console.log(data);
        data.forEach(function(blog){

                let categoriesTemplate = "";
                for(let i = 0; i < blog.categories.length; i++){
                    // console.log("Inside Categoreis For Loop")
                    categoriesTemplate += `<a href="#" class="card-link px-1">${blog.categories[i]}</a>`;
                }
                let postTemplate = `
                     <div class="card mx-1" style="width: 20rem;">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${blog.date}</h6>
                            <p class="card-text">${blog.content}</p>
                            ${categoriesTemplate}
                        </div>
                    </div>`;

                // <a href="#" class="card-link">${blog.categories}</a>
                console.log(postTemplate);
                $("#posts").append(postTemplate);


        })
    });
}