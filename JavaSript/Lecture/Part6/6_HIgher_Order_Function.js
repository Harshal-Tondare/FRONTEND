// a function that takes one or multiple functions as arguments and return a function

function multipleGreet(func,count){ // higher order function
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet,2); // greet is a function passing to another function as argument
