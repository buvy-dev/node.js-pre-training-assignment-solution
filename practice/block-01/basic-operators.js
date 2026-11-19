let x = 1, y = 1;

// Unary -
x = -x;
console.log(x);

// Binary -
console.log(y - x);

// Remainder
console.log(5 % 2);
console.log(8 % 3);
console.log(8 % 4);

// Exponentiation
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16

console.log(4 ** (1/2));
console.log(8 ** (1/3));

// + with String
let s = 'my' + 'string'
console.log(s);

console.log('1' + 2); // 12
console.log(2 + '1'); // 21
console.log(2 + 2 + '1'); // 41
console.log('1' + 2 + 2); // 122
// other operators work only with numbers and always 
// convert their operands to numbers

console.log(6 - '2'); // 4
console.log('6' / '2'); // 3

// Unary + 
let z = 1;
console.log(+z); // 1

let q = -2;
console.log(+q); // -2

console.log(+true); // 1
console.log(+''); // 0
console.log(+'1'); // 1

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23
console.log(+apples + +oranges); // 5
// the longer variant
// console.log(Number(apples) + Number(oranges));

let w = 2 * 2 + 1;
console.log(w);

// Assignment = returns a value. Not reccomend to write like that
let a = 1;
let b = 2;

let c = 3 - (a = b + 1); // 3 - 3

console.log(a); // 3
console.log(c); // 0 

// Chain assignment
let d, i, f;

d = i = f = 2 + 2;
// But better:
f = 2 + 2;
i = f;
d = i;

console.log(d); // 4
console.log(i); // 4
console.log(f); // 4

// Modify-in-place
let n = 2;
n += 5; // 7
n *= 2; // 14

console.log(n);

n = 2;
n *= 3 + 5; // 16
console.log(n);

// Increment/decrement 
// work ONLY with variables (5++ for example's not correct)
let counter = 2;
counter++; // 3
console.log(counter);

counter = 2;
counter--; // 1
console.log(counter);

// postfix (counter++) and prefix (++counter) forms
counter = 1;
a = ++counter; // returns new value (2) to variable "a"
console.log(a);

counter = 1;
a = counter++; // returns old value (1) to variable "a"
console.log(a);

let counter2 = 0;
counter2++;
++counter2; // 2
console.log(counter2);

let counter3 = 0;
console.log(++counter3); // 1
counter3 = 0;
console.log(counter3++); // 0

// It's bad style
let counter4 = 1;
console.log(2 * ++counter4); // 4
counter4 = 1;
console.log(2 * counter4++); // 2

// It's good style (one line - one action)
let counter5 = 1;
console.log(2 * counter5); // 2
counter5++; // 3

// Comma - has precedence lower than "="
let v = (1 + 2, 3 + 4); // 7
console.log(v);

v = 1 + 2, 3 + 4 // 3 
// because , has precedence lower than = and = returns result earlier than ,
console.log(v);

// Practice

// "10"
// NaN or -1 -> -1
// false -> 1
// 2
// 6
// "9px"
// "$45"
// 2
// NaN
// "-95" or "   -9   5" -> "   -9   5"
// NaN or -14 -> -14
// null -> 1
// undefined -> NaN
// NaN -> -2

let m = "1";
let j = "2";

console.log(+m + +j);