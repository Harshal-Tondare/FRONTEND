// LEXICAL SCOPE -> A variable defined. outside a function can be acesssed inside another function defined after the variable declaration the OPPOSITE IS NOT TRUE

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerfunc(){
        let a = 10;
        console.log(x);
        console.log(y);
    }
    innerfunc();
    console.log(a);
}

