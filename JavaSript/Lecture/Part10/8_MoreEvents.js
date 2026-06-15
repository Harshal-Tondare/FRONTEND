let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("change event"); // state btn initial and final
    console.log("final value = ", this.value);
});

user.addEventListener("input", function () {
    console.log("input event"); // minor changes can trigger
    console.log("final value = ", this.value);
});