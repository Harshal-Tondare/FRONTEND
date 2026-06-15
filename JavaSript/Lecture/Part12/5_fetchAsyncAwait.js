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

