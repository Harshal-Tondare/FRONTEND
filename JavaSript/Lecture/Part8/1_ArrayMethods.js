let arr = [1,2,3,4,5];

arr.forEach((el) => { // for each for individuals entity in array
    console.log(el);
});

arr.forEach(function (el){
    console.log(el);
});

// let print = function (el){
//     console.log(el);
// };
// arr.forEach(print); 




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

arr1.forEach((student) => {
    console.log(student.marks);
})
