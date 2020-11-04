// *  ----- REDUCE  ------ *

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

<<<<<<< HEAD
// ? Define a const "total", assign its value to be the result of calling "reduce" on the numArray, returning the total sum of all numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = 0;

numbers.forEach((num) => {
  result = result + num;
});

console.log(result);

const adding = (result, num) => {
  return result + num;
};

const total = numbers.reduce(adding, 0);

console.log(total);

const students = ['humaira', 'carmen', 'nieves,'alicia' ];




// ? Log out "total" should return -> 55
=======
let result = 0;
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c

numbers.forEach((num) => {
  result = result + num;
});

console.log(result);

const adding = (result, num) => {
  return result + num;
};

const total = numbers.reduce(adding, 0);

console.log(total);

const students = ['humaira', 'carmen', 'nieves', 'alicia'];

const combiningStrings = (previousString, actualString) => {
  return `${previousString}${actualString}`;
};

const allStudentsTogether = students.reduce(combiningStrings, '');

console.log(allStudentsTogether);
