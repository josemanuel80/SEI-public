// *  ----- ARRAY SPREAD SYNTAX ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the following array

const dogs = ['labrador', 'beagle', 'shitzu', 'dalmatian'];

const newDogs = [...dogs, 'bulldog', 'american standford'];

// ? Using the spread syntax, define a const "newDogs" and assign it value of an array, with the contents of the dogs array spread inside and a new dog breed added to the end of the array.
// ? eg => ['labrador', 'beagle', 'shitzu', 'dalmation', 'bulldog']

// ? console log both arrays to make sure the original dogs array has not been changed

console.log({
  dogs: dogs,
  newDogs: newDogs,
});

console.log({ newDogs, dogs });

// * **********************************************************************************

// ? Uncomment the following array

const fruits = ['apple', 'pear', 'banana', 'cherry'];

// ? Using the spread syntax, create a new array as a const "newFruits", it should contain the values from the fruits array, but with a new fruit added to the beggining of the array.
// ? eg => ['kiwi', 'apple', 'pear', 'bananna', 'cherry']

const newFruits = ['mango', 'passion fruit', 'pineapple', ...fruits];

// ? console log both arrays to make sure the original fruits array has not been changed

console.log({ fruits, newFruits });

console.log('Ismael');
console.warn('⚠️ Thermonuclear threat');
console.error('ERRROR');

console.table(fruits);

// * **********************************************************************************

// ? Uncomment the following array

const sports = ['football', 'tennis', 'cricket'];

// ? Using spread, make a new array "newSports", containing the values of the sports array, but with a new sport added to the beginning and end of the new array.
// ? eg => ['basketball', 'football', 'tennis', 'cricket', 'hockey']

const newSports = ['table tennis', ...sports, 'swimming', 'basketball'];

console.log({
  sports,
  newSports,
});

// ? console log both arrays to make sure the original sports array has not been changed

// * **********************************************************************************

// ? *** BONUS ***

// ? Uncomment the following array

const numbers = [1, 2, 3, 4, 6, 7, 8, 9];
//
// ? Create a const "fixedNumbers", using the spread syntax and slice() method, insert the number 5 at the correct index in the array to fix the sequence.

const primeraPorcion = numbers.slice(0, 4);
const segundaPorcion = numbers.slice(4);

const fixedNumbers = [...primeraPorcion, 5, ...segundaPorcion];

const fixedNumbersOneLine = [...numbers.slice(0, 4), 5, ...numbers.slice(4)];

console.log({
  primeraPorcion,
  segundaPorcion,
  fixedNumbers,
  fixedNumbersOneLine,
});

// ? console log both arrays to make sure the original number array has not been changed

// * **********************************************************************************
