// que1) write an arrow function that return square of a number

const square = (n) => n*n;
console.log(square(3));

//que2) write a function that print hello world 5 times in interval os 2 sec each

let id = setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval Ran");
},10000);