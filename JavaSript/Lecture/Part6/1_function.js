function hello(){ // function functionName(){}
    console.log("hello");
}
// calling function
hello();

function printName(){
    console.log("harshal");
}
printName();
function print1to5(){
    for(let i=1; i<=5;i++){
        console.log(i);
    }
}
print1to5();

// Function with Arguments
function printName1(name){
    console.log(name)
}
printName1("Harshal tondare");

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`)
}

printInfo("harshal",23);
printInfo(14);

// return keyword
function sum(a,b){
    return a+b;
}
let s = sum(2,3);
console.log(s);
