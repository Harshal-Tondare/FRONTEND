h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}
// callbacks nesting -> callback Hell
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => { // pehla color change hoga tabhi ye hoga
        changeColor("green", 1000, () =>{
            changeColor("purple", 1000);
        });
    });
});

// setTimeout(changeColor("red"), 1000);
// setTimeout(changeColor("orange"), 2000);
// setTimeout(changeColor("green"), 3000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "limegreen";
// }, 3000);

