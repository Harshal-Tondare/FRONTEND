// Expand an iterable into multiple values
   let arr = [1,2,3,4,5,6,7,8,9,54,3,2];
   Math.min(...arr); // all values of arr goes individually in to the function

   console.log(...arr);

   console.log(..."apnaCollege");

   // SPREAD ARRAY LITERALS

   let Arr = [1,2,3,4,5];
   let newArr = [...Arr];

   let odd = [1,3,5,7,9];
   let even = [0,2,4,6,8];
   let nums = [...odd,...even]; // order matters
    console.log(nums);

   //SPREAD OBJECT LITERLS

    const data = {
        email: "ironman@gmail.com",
        passsword: "abcd", 
    };

    const dataCopy = {...data, id: 123};//data copied and also new property assigned

    let Arr2 = [1,2,3,4,5]; // val
    let obj1 = {...Arr2}; // obj -> key: val key will be index of array