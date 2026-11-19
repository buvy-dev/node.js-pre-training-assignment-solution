// Dynamically typed Language 
let message = 'hello';
message = 123456;

// Number
let n = 123; // integer
n = 12.345; // floating-point

console.log(1/0); // Infinity
console.log(Infinity); // Infinity

console.log('not a number' / 2); // NaN
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN

console.log(NaN ** 0); // 1

// BigInt 
// > (2^53-1) 
// or 
// < (2^53-1)
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // same

const bigInt = 43758937285378275834789749857498357388n;

// String
let name = "John";

console.log(`Hello, ${name}!`);

console.log(`the result is ${1 + 2}`);

console.log("the result is ${1 + 2}"); // wrong 

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 6 > 9;
console.log(isGreater);

// "null" value
// "nothing"
let age = null;

// "undefined" value
// value is not assigned
let age2;
console.log(age2);

// not reccomended to use undefined as a value, use null instead
let age3 = 100;
age3 = undefined;
console.log(age3);

// Object and Symbol

// "typeof" operator return "string"
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "text"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"
typeof null; // "object" oficially a bug in JS
typeof alert; // "function" 

// Task
let name2 = "Ilya";
console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name2"}`); // hello name2
console.log(`hello ${name2}`); // hello Ilya

