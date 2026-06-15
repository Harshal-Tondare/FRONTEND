// DOM represents a document with a logical tree
//it allows us to manipulate/change webpage content (HTML elements)

// console.dir(document);

/*
let smallImages = document.getElementsByClassName("oldImg"); // return html collection
for(let i=0;i<smallImages.length;i++){
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed. `);
}
// */
 
// Query Selectors -> select single element (first one)
// same syntax as of css selsctor

console.dir(document.querySelector('h1')); // select first h1 element
console.dir(document.querySelector("#description")); // selct first element with id = "description"
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector('p')); // will select the first paragraph 

console.dir(document.querySelector("div a")); // will provide the single anchor tag
console.dir(document.querySelectorAll("div a"));// selesct all anchor tag in div


let links = document.querySelectorAll('.box a');

for(link of links){
    link.style.color = "purple"; // inline style
}
// for(let i = 0;i<links.length;i++){
//     links[i].style.color = "purple";
// }
