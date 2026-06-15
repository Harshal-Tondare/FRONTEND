const favMovie = 'avatar';

let guess = prompt("guess my favourite movie");

while((guess!=favMovie) && (guess!="quit")){
    guess = promp("wrong guess. please try again");
}
if(guess ==favMovie){
    console.log("congrats!")
}else {
    console.log("you quit");
}

let  i =1;
 while(i<=5){
    if(i==3) break;
    console.log(i);
    i++;
 }