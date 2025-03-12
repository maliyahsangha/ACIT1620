// let dogName = "rover";
// let dogWeight = 23;
// if(dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// }
// else {
//     console.log(dogName + " says woof woof")
// }

// dogName = "Spot";
// dogWeight = 19;
// if(dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// }
// else {
//     console.log(dogName + " says woof woof")
// }

// dogName = "Spike";
// dogWeight = 25;
// if(dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// }
// else {
//     console.log(dogName + " says woof woof")
// }


// function bark(name, weight) {
//     if(weight > 20) {
//         console.log(name + " says WOOF WOOF");
//     }
//     else {
//         console.log(name + " says woof woof");
//     }
// }

// bark("Rover", 23);
// bark("Spot", 13);
// bark("Spike", 53);
// bark("Lady", 17);


// let x = 32;
// let y = 44;
// let radius = 5;

// let centerX = 0;
// let centerY = 0;
// let width = 600; let height = 400;

// function setup(width, height) {
//     centerX = width / 2;
//     centerY = height / 2;
// }

// function computeDistance(x1, y1, x2, y2) {
//     let dx = x1 - x2;
//     let dy = y1 - y2;
//     let d2 = (dx * dx) + (dy * dy);
//     let d = Math.sqrt(d2);
//     return d;
// }

// function circleArea(r) {
//     let area = Math.PI * r * r;
//     return area;
// }

// setup(width, height);
// let area = circleArea(radius)
// let distance = computeDistance(x, y, centerX, centerY);
// alert("Area: " + area);
// alert("Distance: " + distance); 


// ARRAYS

// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 
//     48, 69,34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52,
//     61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
// ];

// let i = 0;
// let highScore = 0;
// while(i < scores.length) {
//     console.log("Bubble solution #" + i + " score: " + scores[i]);
//     if (scores[i] > highScore) {
//         highScore = scores[i];
//     }
//     i = i + 1;
// }
// console.log("Bubble tests: " + scores.length);
// console.log("Highest Bulle Score: " + highScore);

// let bestSolutions = [];
// for (let i = 0; i < scores.length; i++) {
//     if(scores[i] == highScore) {
//         bestSolutions.push(i);
//     }
// }

// console.log("Solutions with the highest score: " + bestSolutions);

let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

let num = new Array(5);
console.log(num); // expected: [5] - creates an empty array with 5 elements *AVOID

// let arr = Array.of(5);
// console.log(arr); // [5] - correct

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1,2,3,4]
// arr.pop();
// console.log(arr); // [1,2,3] - deletes 4 (pop() deletes the last value that was inserted)
// arr.unshift(0);
// console.log(arr); // [0,1,2,3] - adds 0 to the beginning
// arr.shift(); 
// console.log(arr); // [1,2,3] - removes the first value which was 0

// console.log(arr.indexOf(2)); // returns 1
// console.log(arr.indexOf(7)); // -1 (not found)

// console.log(arr.lastIndexOf(2)); // 1 

// console.log(arr.includes(2)); // checks if an element exists or not, returns a boolean (true/false)

// arr.splice(2,1,10,20); // starting from the 2nd position, delete 1 element, insert 10 and 20
// console.log(arr);

// console.log(arr.slice(1,3)); // starts from the begin index, but ends one smaller than the end index

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let combined = arr1.concat(arr2);
// console.log(combined); // [1,2,3,4,5,6]

// let words = ["Hello", "World"];
// console.log(words.join(" ")); // "Hello World"

// let sentence = "JavaScript is fun";
// let wordsArray = sentence.split(" "); // ["Javascript", "is", "fun"] - string into array

// function add(a,b) {
//     return a+b;
// }

// console.log(add(2,3));

const add = (a,b) => a + b; // arrow function - 
console.log(add(2,3));

const multiply = (a,b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
};

console.log(multiply(4,5)); // returns 20

const square = x => x * x;
console.log(square(6)); // returns 36

const greet = () => "Hello, world!";
console.log(greet()); // returns "Hello, world!"

// DOM - Document Object Model ** important

