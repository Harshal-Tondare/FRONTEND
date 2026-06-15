let div = document.querySelector("div"); // accessing div
let ul = document.querySelector("ul"); // accessing ul
let lis = document.querySelectorAll("li"); // accessing li

div.addEventListener("click", function(){
    console.log("div and clicked");
});


ul.addEventListener("click", function(event){
    event.stopPropagation(); // to stop event bubbleing
    console.log("ul and clicked");
});


for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
    console.log("li was clicked");
})
}
