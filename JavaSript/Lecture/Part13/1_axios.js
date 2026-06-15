let btn = document.querySelector("button");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src ", link);
});

async function getImage() {
    try{
        let res = await axios.get(url2); 
        return (res.data.message); // console se kiya hai dekke console.log(res) likh ke
    }
    catch(err){
        console.log("Error - ",err);
        return "NO IMAGE Found";
    }
}

/**
 
let btn = document.querySelector("button");

btn.addEventListener("click", async () => { // async callback to use await
    let fact = await getFacts(); // because getfact is async function 
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});


let url = "https://catfact.ninja/fact";


async function getFacts() {
    try{
        let res = await axios.get(url); // returns a promise and gives response directly in Json format
        return res.data.fact;
    }
    catch(err){
        console.log("Error - ",err);
        return "NO Fact Found";
    }
}
 */