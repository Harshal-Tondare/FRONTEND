// Allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args){
    return args.reduce((add,el) => add+el);
}

function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us", args[i]);
    }
}
// console sum(1,2,3,4);

function min(){
    console.log(arguments.length); 
}