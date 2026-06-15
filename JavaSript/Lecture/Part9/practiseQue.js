let para1 = document.createElement('p'); // paragraph created without text in it
para1.innerText = "hey i am harshal";
document.querySelector('body').prepend(para1);

para1.classList.add("red");


let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
document.querySelector('body').prepend(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");

h1.innerText = "I am in a div";
para2.innerText = "Me Too!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector('body').prepend(div);
