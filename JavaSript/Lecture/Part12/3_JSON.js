let jsonRes = 
 '{"fact":"Approximately 1/3 of cat owers think their pets are able to read their minds.","length":78}'; // JSON data response (string format)

let validRes = JSON.parse(jsonRes); // convert string data into JS Object
console.log(validRes.fact);

let student = {
    name : "Harshal",
    Roll : 23,
    marks : 97,
};
// notes
// Accesaing data from the Json
// JSON.parse(data) method -> To parse a string data into a JS object
// JSON.stringify(json) Method -> To parse a Js Object into JSON