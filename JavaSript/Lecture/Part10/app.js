let btns = document.querySelectorAll("button");
console.dir(btns);

// btns.onclick = function() {
//     alert("button was clicked");
// }

for(btn of btns){
    // btn.onclick = sayhello;
    // btn.onclick = sayName;
    // btn.onmouseenter = function () {
    //     console.log("you entered a button");
    // }
    // console.dir(btn);

    // btn.addEventListener("click",sayhello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked me");
    });
}

function sayhello() {
    alert("Hello!");
}

function sayName() {
    alert("Apna College");
}
// Eent Listeners -> when we click button only one value is printed so event listener is used

// ek aisa method jo events ke liye listen krta hai yani wo wait krta hai ki kab page pr event hoga aur kab kaam hoga

// Events Listeners can be multiple for single object

