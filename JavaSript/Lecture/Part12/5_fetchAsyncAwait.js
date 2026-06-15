// =========================================
// FETCH API USING ASYNC / AWAIT
// =========================================

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await fetch(url); // wait until the asynchronous call (FETCH) end
        let data = await res.json(); // without await Js will not wait and console.log promise ->pending state
        console.log(data);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(e){
        console.log("error - ",e);
    }
    console.log("bye");
}

/*
Concepts Covered:
1. async function always returns a Promise.
2. await pauses execution until the Promise resolves.
3. fetch() performs an API request.
4. res.json() converts JSON response into a JavaScript object.
5. try-catch handles runtime and network errors.
6. Code becomes cleaner and easier to read compared to .then() chains.

Flow:
getFact()
   ↓
await fetch(url)
   ↓
Response Object
   ↓
await res.json()
   ↓
Readable Data
   ↓
Second API Request
   ↓
Display Fact
   ↓
Error Handling

Important:
- await can only be used inside an async function.
- Without await, res.json() returns a pending Promise.
- try-catch works like .catch() for async/await code.
- Execution inside the function pauses until the awaited Promise resolves.
*/
