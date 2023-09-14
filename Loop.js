// Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.

// let numbers1 = 1;
// while (numbers1 <= 10) {
//   console.log(numbers1);
//   numbers1 = numbers1 + 1;
// }

// Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.

// for (let numbers2 = 2; numbers2 <= 20; numbers2 = numbers2 + 2) {
//   console.log(numbers2);
// }

// Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.

// let numbers3 = 1;
// let sum = 0;
// while (numbers3 <= 100) {
//   console.log(numbers3);
//   sum = sum + numbers3;
//   numbers3 = numbers3 + 1;
// }
// console.log(sum);

// Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.

const numbers4 = [2, 4, 6, 8, 10];
let sum2 = 0;

for (let counter = 0; counter < numbers4.length; counter = counter + 1) {
  sum2 = sum2 + numbers4[counter];
}
console.log(sum2);
