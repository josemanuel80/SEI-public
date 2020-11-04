// *  ----- MORE ARRAY METHODS  ------ *

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// ? Uncomment the array below

const breakfastItems = ['eggs', 'bacon', 'toast', 'beans'];

// ? Define a const "moreThanFour" and assign it the return value of calling the array method 'every' on the array.
<<<<<<< HEAD
//The function provided to every should determine whether a string is more than 4 characters.

const isMoreThanFourChar = (string) => {
  if (string.length > 4) {
    return true;
  }
};

const moreThanFour = breakfastItems.every(isMoreThanFourChar);

console.log(moreThanFour);
=======
// The function provided to every should determine whether a string is more than 4 characters.
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c

const isMoreThanFourChar = (string) => {
  return string.length > 4;
};

const moreThanFour = breakfastItems.every(isMoreThanFourChar);
console.log(moreThanFour);
// ? Define a const "someMoreThanFour" and do the same as above, but with the array method 'some'. What is the difference in the final output?

const someMoreThanFour = breakfastItems.some(isMoreThanFourChar);
console.log(someMoreThanFour);

// ? Define a const "beansIndex" and assign it the value of calling the array method 'indexOf' to find the index of the string 'beans' Log your result to confirm

const beansIndex = breakfastItems.indexOf('beans');
console.log(beansIndex);

<<<<<<< HEAD
=======
const pedroIndex = breakfastItems.indexOf('pedro');
console.log(pedroIndex);
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c
// ? Uncomment the below array

const ducks = ['duck', 'duck', 'duck', 'duck', 'goose', 'duck', 'duck'];

// ? Define a const "goose" and assign it the value of using the array method 'find' on the ducks array, the function should find and return the 'goose' string

const findAGoose = (bird) => {
  return bird === 'goose';
};

const goose = ducks.find(findAGoose);

<<<<<<< HEAD
console.log(gooose);
=======
console.log(goose);
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c
