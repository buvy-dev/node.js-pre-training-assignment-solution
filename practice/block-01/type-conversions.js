// String
let value = true;
console.log(typeof value); // "true" - it's shows true like boolean value, 
// but it's string

value = String(value);
console.log(typeof value); 

// Numeric
console.log(typeof ("6" / "2"));

let str = "123";
console.log(typeof str);

let num = Number(str);

console.log(typeof num);

let age = Number("text");
console.log(age);

let convNum1 = Number(undefined);
let convNum2 = Number(null);
let convNum3 = Number(true);
let convNum4 = Number(false);
let convNum5 = Number('  234  ');
let convNum6 = Number('14v3s');
let convNum7 = Number('');
console.log(convNum1, convNum2, convNum3, convNum4, convNum5, convNum6, convNum7);

// Boolean
// false
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// true
console.log(Boolean(' '));
console.log(Boolean('dssdfs'));
console.log(Boolean('0'));
console.log(Boolean(5 - 2));


