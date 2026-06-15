// "This keyword refers to an object that executing the current piece of code"

const student = {
    name: "harshal", // key value pair
    age: 21,
    eng: 95,
    math: 93,
    phy: 98,
    getAvg(){ // method defined
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
function getAvg(){
    console.log(this); // by default window object
}

 