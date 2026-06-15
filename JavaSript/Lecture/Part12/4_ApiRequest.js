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


/*
=========================================
FETCH API USING PROMISE CHAINING
=========================================

Concepts Covered:
1. fetch() returns a Promise containing the HTTP response.
2. Response data is not directly readable.
3. res.json() converts JSON response into a JavaScript object.
4. .then() handles successful promise resolution.
5. Multiple API calls can be chained by returning another fetch().
6. .catch() handles any error in the entire chain.
7. JavaScript continues executing synchronous code without waiting.

Flow:
fetch(url)
   ↓
Response Object
   ↓
res.json()
   ↓
Readable Data
   ↓
Second API Request
   ↓
Second Data
   ↓
Error Handling (.catch)

Important:
- "I am happy" prints first because fetch() is asynchronous.
- Returning res.json() passes parsed data to the next .then().
- Returning fetch(url) starts another API request in the chain.
*/
