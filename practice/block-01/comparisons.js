// '==' - equality
// '-' - assignment
// '!=' - not equals

console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

let result = 5 > 4; // true
console.log(result);

// "a" > "A"
console.log("a" > "A");

// different types? - convert to numbers
console.log('2' > 1); // true
console.log('01' == 1); // true

console.log(true == 1); // true
console.log(false == 0); // true

// funny consequence
let a = 0;
console.log(Boolean(a)); // false

let b = '0';
console.log(Boolean(b)); // true

console.log(a == b); // true!

// strict (non-)equality operator - equality without type conversion
console.log(0 == false); // true
console.log('' == false); // true

console.log(0 === false); // false - types are different
console.log(0 !== false); // true

console.log(null === undefined); // false
// Important
console.log(null == undefined); // true - only if they're equal (==)

console.log(null > 0); // false - null to a number
// null равно только undefined и ничему другому
console.log(null == 0); // false
console.log( null >= 0); // true - null to a number

// NaN in comparisons - always false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// Practice
console.log('Practice results:')

console.log(5 > 4); // true
console.log('apple' > 'pineapple'); // false
console.log('2' > '12'); // false -> true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // true -> false