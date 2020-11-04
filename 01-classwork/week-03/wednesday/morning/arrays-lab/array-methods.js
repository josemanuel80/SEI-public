// *  ----- ARRAY METHODS  ------ *

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// ? Define an array called "foods", add a few strings of different food items, and log the array to the console
const foods = [
  'arepa',
  'hallaca',
  'cachapa',
  'huevo chimbo',
  'pabellon criollo',
];

const foods = [
  'arepa'
  'banana',
  'hallaca',
  'cachapa',
  'huevo chimbo',
  'pabellon criollo',
];

// ? Using the array method "push", add another food item to the end of the array, and log it again.

foods.push('polvorosa de pollo');
console.log(foods);

// ? Use the array method "splice" to remove the first item of the array

foods.splice(0, 1);
console.log(foods);

<<<<<<< HEAD
// ? Define a const "joined". Assign its value to the foods array to a string of all the array items joined together. Use the array method "join"

const joined = foods.join(' ');
console.log(joined);
=======
// ? Define a const "joined".
// Assign its value to the foods array to a string of all the array items joined together.Use the array method "join"

const joined = foods.join(' ');
console.log(joined);

const heroes = [
  {
    name: 'Batman',
    publisher: 'DC',
  },
  {
    name: 'The Flash',
    publisher: 'DC',
  },

  {
    name: 'Captain Marvel',
    publisher: 'Marvel',
  },
];

console.log(heroes.join());

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.join());
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c
