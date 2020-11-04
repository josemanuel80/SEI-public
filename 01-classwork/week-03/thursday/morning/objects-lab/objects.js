// *  ----- OBJECTS  ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️ Comment out your practice code before attempting below, "cmd" + "/"

// ? Create a "car" object, which has properties for the following: brand (string), number of seats (number), color (string), topSpeed (nubers), is a manual transmission (boolean)

const car = {
  brand: 'Toyota',
  color: 'yellow',
  topSpeed: 140,
  manualTransmission: true,
  numberOfSeats: 7,
};
// ? Log the whole object
console.log(car);

// ? Log just the number of seats
console.log(car['numberOfSeats']);
console.log(car.numberOfSeats);

// ? Log the string 'The (car color) (car brand) has (car number of seats) and a top speed of (car top speed)'

console.log(
  `The ${car.color} ${car['brand']} has ${car.numberOfSeats} seats and a top speed of ${car['topSpeed']} km/h`,
);

// ? Create a "myClass" objects, it should have the following properties: class name (string), location (string), number of students (number), student names (array - add 4 classmemebers as strings)
const myClass = {
  name: 'SEI ES 01',
  location: 'online (ES-GB)',
  number: 20,
  students: ['alicia', 'carmen', 'victor', 'carlos'],
};
// ? Log the whole object
console.log(myClass);

// ? Log the just the location

console.log(myClass.location);
console.log(myClass['location']);

// ? Log the string '(class name) at (class location) has  (class number od students) students in it'

console.log(
  `${myClass.name} at ${myClass.location} has  ${myClass.number} students in it`,
);

// ? Create a person objects with the foloowing properties: name (string), pet (object with its own properties: name (string), age (number), species (string))

const person = {
  name: 'Pedro',
  pet: {
    name: 'burocracia',
    age: 20,
    species: 'morrocoy',
  },
};

// ? Log the whole object'
console.log(person);
// ? Log just the person pet object
console.log(person.pet);
// ? Log the string '(person name) has a (person pet age) (person pet species) that is (person pet age) years old'
console.log(
  `${person.name} has a ${person.pet.species} that is ${person.pet.age} years old`,
);
