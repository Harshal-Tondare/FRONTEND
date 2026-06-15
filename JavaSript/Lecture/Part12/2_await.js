/*
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10) + 1;
            console.lohg(num);
            resolve();
        }, 1000);
    });
}
async function demo() {
    await getNum(); // jab tak iska Promise resolve/rejectt nahi hop jata tab tak baki call holld pe rahegi
    await getNum();
    await getNum();
}
*/


h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("promise rejected");
            }
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    })
   
}
async function demo(){
    try { // handling rejections , try{code having error chances}
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
    }
    catch(err) {
        console.log("err caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
    console.log("new number :",a+3);
}

// changeColor("red", 1000)
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
// })
// .then(() => {
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
// })
// .then(() => {
//     console.log("green color was completed");
//     return changeColor("purple", 1000);
// })
// .then(() => {
//     console.log("purple color was completed");
// })
