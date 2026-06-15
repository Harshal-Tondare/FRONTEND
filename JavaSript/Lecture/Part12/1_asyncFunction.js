async function greet() { // async function
    throw "404 page not found"; // throw an random error means .catch will perform
    return "hello!"; // return a Promise
}

greet() // return a Promise
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : ",result);
})
.catch((err) => {
    console.log("promise was rejected with error : ",err)
})


let demo = async () => {
    return 5;
} // return Promise