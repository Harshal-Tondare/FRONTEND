let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault(); // stop the default kaam
    alert("form submitted");
});
