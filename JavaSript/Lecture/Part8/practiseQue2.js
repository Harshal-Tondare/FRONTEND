//Create a function to find the min number in an array
let arr = [1,4,2,5,6,7,2,9,2];
let min = arr.reduce((min,el) => {
    if(min < el) {
        return min;
    }
    else{
        return el;
    }  
})  