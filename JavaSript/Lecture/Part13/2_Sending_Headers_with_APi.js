let url = "https://icanhazdadjoke.com/";

async function getJokes(){ // making asynchronous Asynchronous means the program doesn’t freeze while waiting for data from the internet.
    try{
        const config = { headers : {Accept : "application/json"}}
        let res = await axios.get(url, config);
        console.log(res.data);  // Prints the full response object in the console.
    } catch(err) {  
        console.log(err);
    }
}
// Headers = extra information sent between client and server.Headers = extra information sent between client and server.

// Think of them like instructions:

// what data type you want

// authentication

// language  

// etc.