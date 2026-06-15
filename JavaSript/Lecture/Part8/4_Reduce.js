// reduce array to a single value
let nums = [1,2,3,4];
// arr.reduce(reducer function with 2 variables for(accumulator, element));
let finalValue = nums.reduce( (res, el) => (res+el));
console.log(finalValue);