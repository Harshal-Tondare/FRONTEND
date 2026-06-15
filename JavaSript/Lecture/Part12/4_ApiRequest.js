let url = "https://catfact.ninja/fact";

fetch(url) // return a Promise in form of response 
    .then((res) => {
        console.log(res); // we have the data but not readable format
        return res.json(); // return a promise and make data to readable/access
    })
    .then((data) => {
            console.log("data1 = ",data);
            return fetch(url); // 2nd request
        })
        .then((res) => {
            return res.json();
        })
        .then((data2) => {
            console.log("data2 = ",data2);
        })
    .catch((err) => {
        console.log("ERROR - ",err);
    });

console.log("i am happy");