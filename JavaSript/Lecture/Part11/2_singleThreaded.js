// let a = 25;
// console.log(a);
// let b = 10;
// console.log(a + b); 

// synchrous nature ek ke baad ek

setTimeout(function() {
    console.log("apna College");
}, 2000);

setTimeout(function() { // executed by browser added to callstack
    console.log("apna College");
}, 2000);

console.log("hello...");