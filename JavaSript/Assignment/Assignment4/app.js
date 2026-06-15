// Que 1

/*
let arr = [1,2,3,4,5,6,2,3];
let num =2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
*/

//Que 2

/*
let num = 287152;
let count =0;
let copy = num;
while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
*/

// Que 3
/*
let num = 12345;
let sum = 0;
while(num>0){
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
console.log("Sum of digits:", sum);
*/

//QUE 4
/*
let n = 12;
let prd = 1;
for(let i =2;i<n;i++){
    prd*=i
}
console.log("factorial of", n, "is", prd);
*/
// Que 5
/*
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Maximum value in the array is:", max);
*/
