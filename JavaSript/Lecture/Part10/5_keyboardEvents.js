// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    // console.log("key = ",event.key);
    console.log("code = ",event.code); // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
    if(event.code == "KeyU") {console.log("character moves forward");}
    else if(event.code == "KeyD") {console.log("character moves backward");}
    else if(event.code == "KeyL") {console.log("character moves Left");}
    else if(event.code == "KeyR") {console.log("character moves Right");}
    // console.log("key was pressed");
});

// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function() {
//     console.log("key was released");
// });