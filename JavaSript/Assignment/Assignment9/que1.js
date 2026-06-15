let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");

let h1 = document.createElement("h1");
document.innerHTML = "<u>DOM Practise</u>";
h1.classList("h1style");
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practise";
document.querySelector("body").append(p);