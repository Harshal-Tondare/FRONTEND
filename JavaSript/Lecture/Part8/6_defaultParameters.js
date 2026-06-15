// Giving a Default value to the arguments
function sum(a = 2, b){
    return a + b;  
}
sum(1,3); // 4
sum(1); // a = 1, b = undefined

// try to use default parameter at the end of function argument