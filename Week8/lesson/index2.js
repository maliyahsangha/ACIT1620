let a = 10;
console.log(typeof a);
a = "John";
// initially a number, then changed to a string and logged in the console
console.log(typeof a);
console.log(a);

console.log(Math.floor(10 + Math.random() * 100)); // 0 to 1 (1 is exclusive, 0 is inclusive)
// floor is used to convert it into an integer
// the 100 is exclusive, so it will generate up to 99.9, and floor rounds down to the nearest integer (NOT 100)

// 0.99 * 100 = 99.99 + 10 = 109.99

// Math.floor(Math.random() * (max-min+1))