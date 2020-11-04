// *  ----- FILTERING ARRAYS ------ *

// * 🦉 Practice

// ! ⚠️ Remember to comment out your practice code before attempting below, "cmd" + "/"

// ? Uncomment the following array

const fruits = [
  'apple',
  'pear',
  'strawberry',
  'kiwi',
  'passion fruit',
  'mango',
];
<<<<<<< HEAD

// ? Define a const "smallFruits" and assign it value of the fruits array, filtered to only contain fruits with 4 charaters or less

const lessThanFourLetters = (fruit) => {
=======

console.log(fruits);

// ? Define a const "smallFruits" and assign it value of the fruits array, filtered to only contain fruits with 4 charaters or less

const lessThanFourLetters = (fruit, iterator, array) => {
  // console.log({
  //   iterator,
  //   array,
  //   fruit,
  // });
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c
  if (fruit.length <= 4) {
    return fruit;
  }
};

const smallFruits = fruits.filter(lessThanFourLetters);
console.log(smallFruits);

<<<<<<< HEAD
=======
// const smallFruits = [];

// fruits.forEach((fruit) => {
//   if (fruit.length <= 4) {
//     smallFruits.push(fruit);
//   }
// });

// console.log(smallFruits);

>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c
// ? Log the "smallFruits" array and expect to see -> ['pear', 'kiwi']

// ? Define a const "bigFruits" and assign it the value of the fruits array, filtered to only contain fruits with more than 6 characters

fruit.length;

const greatherThanSixLetter = (fruit) => {
  if (fruit.length >= 6) {
    return fruit;
  }
};

const bigFruits = fruits.filter(greaterThanSixLetter);
console.log(bigFruits);

bigFruits.push(null);

// ? Log the "bigFruits" array and expect to see -> ['stawberry', 'passion fruit']

<<<<<<< HEAD
// ? Define a const "mediumFruits" and assign it the value of the fruits array, filtered to only contain fruits with more than 4 characters but less than or equal to 6 characters

const mediumFruits = frutis.filter((fruit) => {
  if (fruit.length > 4 && fruit.lenght <= 6) return fruit;
});

// ? Log the "mediumFruits" array and expect to see -> ['apple', 'mango']
=======
const greaterThanSixLetter = (fruit) => {
  if (fruit.length >= 6) {
    return fruit;
  }
};

const bigFruits = fruits.filter(greaterThanSixLetter);
console.log(bigFruits);

bigFruits.push(null);

// ? Define a const "mediumFruits" and assign it the value of the fruits array,
// filtered to only contain fruits with more than 4 characters but less than or equal to 6 characters

const mediumFruits = fruits.filter((fruit) => {
  if (fruit.length > 4 && fruit.length <= 6) {
    return fruit;
  }
});

console.log(mediumFruits);
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c

console.log(mediumFruits);
// ? Log the original "fruits" array. What has happened to it?

// *  ----- MAPPING ARRAYS ------ *

// * 🦉 Practice

// ! ⚠️ Remember to comment out your practice code before attempting below, "cmd" + "/"

// ? Uncomment the following array

const cities = ['London', 'New York', 'Paris', 'Tokyo', 'Los Angeles'];

const cityWordLength = (city) => {
<<<<<<< HEAD
  return city, length;
=======
  return city.length;
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c
};

const cityLengths = cities.map(cityWordLength);

<<<<<<< HEAD
const cityLenghts = cities.map();
=======
console.log(cityLengths);
>>>>>>> bff158717c906a75fd3f5c9bbef441d7fc7faa0c

// ? Define a const "cityLengths" and assign it the value of the cities array, mapped into an array indicating the length of each city string

// ? Log the "cityLengths" array and expect to see -> [6, 8, 5, 5, 11]
console.log(cities.forEach((city) => console.log(city)));

const shoutingACity = (city) => {
  return `$city`;
};

// ? Define a const "cityShouts" and and assign it the value of the cities array, mapped into an array where all the strings have been transformed to uppercase with a '!' on the end
// ? Log the "cityShouts" array and expect to see ->  'LONDON!', 'NEW YORK!', 'PARIS!', 'TOKYO!', 'LOS ANGELES!' ]

const shoutingACity = (city) => {
  return `${city.toUpperCase()}!`;
};

const cityShouts = cities.map(shoutingACity);

console.log(cityShouts);

// ? Log the original "cities array. What has happened to it?
