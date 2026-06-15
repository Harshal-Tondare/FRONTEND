/*
function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success();
    } else {
        failure();
    }
}
*/
// savetoDb(
//     "apna college",
//     () =>{ // success hoga tabhi hum naya data pass karenge
//     console.log("success : your data was saved.");
//     savetoDb(
//         "hello world",
//         ()=>{
//         console.log("success2 : data2 was saved")
//         },
//         ()=>{
//         console.log("failure2 : weak connection. data not saved");
//         }
//     );
//  },
    // () => {
    //     console.log("failure : weak connection. data not saved.");
    // }
    // );




// Promise are objects 
// promises have state pending, fulfiled, rejected
// promise objcet have 2 callback resolve an reject
function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) resolve("success : data was saved");  // result-> success: data was saved
        else reject("failure : weak connection");
        // error sent-> failure : weak connection
    });
}
// savetoDb("apna college");


// let req = savetoDb("apna college") req->promise object
savetoDb("apna college") 
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise : ",result);
        return savetoDb("helloworld");// return 2nd promise object
    })
    .then((result) => { // if 2nd promise is resolved
        console.log("data2 saved");
        console.log("result of promise : ",result);
        return savetoDb("shraddha");
    })
    .then((result) => {
        console.log("data3 was saved");
        console.log("result of promise : ",result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise : ",error);
    })

// PROMISE CHAINING -> multiple then single catch
// promises are rejected nd resolved with some data (valid results or errors)