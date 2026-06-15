//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args.map((v) => v * 2)];
};
doubleAndReturnArgs([1, 2, 3], 4, 4); // [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4);// [2 ,20 ,8]