// Arithmetic Operations
let a = 10;
let b = 3;

console.log(a + b);      // Addition: 13
console.log(a - b);      // Subtraction: 7
console.log(a * b);      // Multiplication: 30
console.log(a / b);      // Division: 3.333...
console.log(a % b);      // Modulus (remainder): 1
console.log(a ** b);     // Exponentiation: 1000

// Assignment Operations
let x = 5;
x += 3;                  // x = x + 3 → 8
x -= 2;                  // x = x - 2 → 6
x *= 2;                  // x = x * 2 → 12
x /= 4;                  // x = x / 4 → 3

// Comparison Operations
console.log(a > b);      // true
console.log(a < b);      // false
console.log(a == b);     // false
console.log(a === b);    // false (strict equality)
console.log(a != b);     // true
console.log(a !== b);    // true (strict inequality)

// Logical Operations
console.log(true && false);  // AND: false
console.log(true || false);  // OR: true
console.log(!true);          // NOT: false

// Increment/Decrement
let count = 0;
count++;                 // Increment: 1
count--;                 // Decrement: 0

// Ternary Operation
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);     // Adult