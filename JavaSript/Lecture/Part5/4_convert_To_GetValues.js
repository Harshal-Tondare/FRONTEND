// JS automatically converts object keys to string
// even if we made the number as a key, the number will be converted to string

const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : "e"
};

// obj[2]--> 2 is converted as '2' string and match with key '2' as string 
console.log(obj[1]);
//Dot notation is for valid identifiers.
// Bracket notation is for everything else.