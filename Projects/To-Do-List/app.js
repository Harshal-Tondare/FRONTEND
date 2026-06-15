let todo =  []; // array declaration

let req = prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("--------------");
        for(let i=0; i<todo.length;i++){ //printing task
            console.log(i, todo[i]);
        }
         console.log("--------------");
    }
    else if(req=="add"){
        let task = prompt("please enter your task you want to add");
        todo.push(task); //adding task to array
        console.log("task added");
    }
    else if(req =="delete"){
        let idx = prompt("please enter your task index");
        todo.splice(idx,1); //deleting task from array
        console.log("task deleted");
    }
    else{
        console.log("invalid request, please try again");
    }
  let req = prompt("please enter your request");

      
}