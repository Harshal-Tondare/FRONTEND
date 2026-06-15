let num = [1,2,3,4];
// map returna a new array with changes element
let double = num.map((el) => {
    return el*2;
});
console.log(double);


let arr1 = [
    {
        name: "harshal",
        marks: 95,
    },
    {
        name: "Govind",
        marks: 92, 
    },
    {
        name: "Rahul",
        marks: 94,
    }];

let gpa = students.map((el) => {
    return el.marks / 10;
});

// filter. callback true el added false el rejected

let nums = [1,2,3,4,5,6,7,8,9,10];
let ans = nums.filter( (el) => {
    return el % 2 == 0; // even -> true , odd -> false
})
