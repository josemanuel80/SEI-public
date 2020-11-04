// *  ----- ARRAY ITERATION ------ *

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// ? Define an array "students" and add some strings of names. Write a for loop that will log each item from the array in order.

<<<<<<< HEAD
const students = ['humaira', 'carmen', 'marina', 'alicia'];

for (var i = 0; i < 10; i = i++) {
  console.log(iterator);
  console.log(students[iterator]);
}

for (var i = 0; i < students.length; i++) {
  console.log(i);
  console.log(students[i]);
}

for (let i = 0; i < instructor.length; i++) {
  console.log(i);
  console.log(instructor.charAt(i));
}
=======
//    iterator declation; loop contiion to stop; what happens in each loop

// for (var iterator = 0; iterator < 10; iterator = iterator + 1) {
//   console.log(iterator);
// }

const students = ['humaira', 'carmen', 'nieves', 'alicia'];

for (var iterator = 0; iterator < students.length; iterator = iterator + 1) {
  console.log(iterator);
  console.log(students[iterator]);
  console.log(students);
}

// for (let i = 0; i < students.length; i++) {
//   console.log(i);
//   console.log(students[i]);
// }

// const instructor = 'Pedro';

// for (let i = 0; i < instructor.length; i++) {
//   console.log(i);
//   console.log(instructor.charAt(i));
// }
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c

// ? Write a for loop that console logs each students name in order

// ? Write a forEach statment that console logs each students name, but with the letters of the name reversed.

<<<<<<< HEAD
consr printOnScreen = (string) => {
  return console.log(string);
};

const reverseString = (string) => {
  const reverseStr = string.split('').reverse().join('');
  return console.log(reverseStr);
};

//printOnScreen('Mario');

students.forEach(reverseString);


students.forEach((string) => {
  const reverseStr = string.split('').reverse().join('');
  return console.log(reverseStr);
});

=======
const printOnScreen = (string) => {
  return console.log(string);
};

const reverseString = (string, iterator, array) => {
  const reverseStr = string.split('').reverse().join('');
  console.log({
    string,
    iterator,
    array,
  });
  return console.log(reverseStr);
};

// printOnScreen('Mario');

students.forEach(reverseString);

// students.forEach((string) => {
//   const reverseStr = string.split('').reverse().join('');
//   return console.log(reverseStr);
// });
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c
