let greet = "hello"; // Global Scope

function changeGreet(){
    let greet = "namaste";// function Scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);// lexical Scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();