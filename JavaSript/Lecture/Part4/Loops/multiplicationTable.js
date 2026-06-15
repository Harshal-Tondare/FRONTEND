let n = prompt("write your number"); // prompt have string as response
n = parseInt(n); // convert into number(integer)
for(let i = n; i<=(n*10); i=i+n){
    console.log(i);
}