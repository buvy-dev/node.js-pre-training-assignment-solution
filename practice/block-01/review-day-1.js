// 1 - Copy value of variable name into variable admin. Value of name stay "Timofey"
let admin, name;

name = "Timofey";
admin = name;

console.log(admin);


// 2 - в первом случае интерпретатор вернет ошибку с сообщением, что 
// значение константы нельзя переприсваивать. Во втором случае - 
// подозреваю тоже выдаст ошибку но точно я не знаю потому что я еще 
// не изучал как работает такая конструкция (подозреваю коллекция в JS). 
// На javascript.info в темах которые я прошел она еще не изучалась

// 3
console.log(typeof 42, typeof "42", typeof true, typeof undefined);
// number, string, boolean, undefined
console.log(typeof null, typeof [], typeof function () {});
// object (error in JS), [] и function () {} еще не изучал, 
// но подозреваю что массив и function
console.log(typeof 10n, typeof Symbol("id"));
// bigint, symbol

// 4
console.log("Task 4:")
console.log(1 / 0, -1 / 0, "abc" / 2); // Infinity, -Infinity, NaN
console.log(0.1 + 0.2 === 0.3); // false - особенности хранения чисел 
// JS в десятичной системе

// 5
console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33
console.log("6" / "2", "6" * "2", "6" - 2, "6" + 2); // 3, 12, 4, 62

// 6
let a = 1, b = 2;
let c = 3 - (a + b); // c = 0
let d = c++ + ++c; // d = 0 + 2
// a = 1, b = 2, c = 2, d = 2

// 7 
let n = 100;
let devider = n - (n % 7);
console.log(devider, n - devider)

// 8
console.log(Number("  12  "), Number("12px"), Number(""), Number(null), Number(undefined), Number(true));
// 12, NaN, 0, 0, NaN, 1
console.log(Boolean("0"), Boolean(0), Boolean(" "), Boolean(""), Boolean([]), Boolean(NaN));
// true, false, true, false, без понятия про [], false

// 9 
console.log(String(null), String(undefined), String([1, 2]), String({}), 5 + null, 5 + undefined, "5" + null)
// null, undefined, хз, хз, 5, NaN, 5null

// 10
let input = +"15";
console.log(10 + input); // 25
input = +" 7 ";
console.log(10 + input); // 17
input = +"3.5";
console.log(10 + input); // 13.5
input = +"abc";
console.log(10 + input); // здесь как я понимаю нужно делать проверку if на NaN но этого я еще не учил
input = +"";
console.log(10 + input); // 10