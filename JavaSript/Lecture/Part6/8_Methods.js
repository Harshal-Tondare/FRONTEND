// actions that can be performed on an object
const calculator = {
    num : 55,
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }
};
// method shorthand
/*
const calculator = {
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    mul(a, b){
        return a * b;
    }
};
*/