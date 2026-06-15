const sum = (a,b) => {
    console.log(a+b);
};
sum(2,5);
// arrow function can be use as value or used in higher order function

const cube = n => {
    return (n*n*n);
};
let c = cube(3);
console.log(c);

const pow = (a, b) => {
    return a**b;
}
pow(2,4);
// Arrow function having implicit return
const mul = (a, b) => (a*b);
mul(2,3);