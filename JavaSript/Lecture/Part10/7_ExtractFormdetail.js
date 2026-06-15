let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault(); // action wale url pr nahi jayenge
    console.dir(form);

    let user = this.elements[0]; // document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    conaole.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
})