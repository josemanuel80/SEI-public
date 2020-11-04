// *  ----- OBJECT SPREAD SYNTAX ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the following object

const duck = {
  name: 'Donald',
  species: 'duck',
  age: 85,
};

const employedDuck = {
  ...duck,
  job: 'sailor',
};

// ? Define a const "employedDuck", assign it the value of a new object with the contents of the duck object spread inside, and a new property added "job" with the value "sailor".
// ? eg => { name: 'Donald', species: 'duck', age: 85, job: 'sailor' }

// ? console log both objects to make sure the original duck object has not been changed

console.log({
  duck,
  employedDuck,
});

// * **********************************************************************************

// ? Uncomment the following object

const person = {
  name: 'Alex',
  hometown: 'London',
  age: 31,
  greetings() {
    return console.log(`Hola, my name is ${this.name}`);
  },
};

// ? Define a const "olderPerson" assign it the value of a new object with the contents of the person object, but with the age propety changed to 31.
// ? eg =>  { name: 'Dave', hometown: 'London', age: '31' }

const olderPerson = {
  ...person,
  age: 42,
  name: 'Joseph',
  greetings: 'Chao',
};

// ? console log both objects to make sure the original duck object has not been changed

console.log({
  person,
  olderPerson,
});
// * **********************************************************************************

// ? Uncomment the following object

const dog = {
  name: 'Scooby',
  breed: 'Great Dane',
  hasTreats: false,
  color: 'brown',
};

// ? Define a const "happyDog" assign it the value of a new object with the contents of the contents object, but with the hasTreats propety changed to true, and a new property added "numberOfTreats" set to 100.
// ? eg =>  { name: 'Scooby', breed: 'Great Dane', hasTreats: true, numberOfTreats: 100 }

const happyDog = {
  ...dog,
  hasTreats: true,
  numberOfTreats: 100,
};

// ? console log both objects to make sure the original dog object has not been changed

console.log({ dog, happyDog });

// * **********************************************************************************

// ? Uncomment the following objects

const objectA = {
  food: 'pizza',
  animal: 'cat',
};

const objectB = {
  color: 'red',
  car: 'ford',
};

// ? Create a new object "mergedObject" which is assigned the value of objectA and objectB merged together.
// ? eg =>  { food: 'pizza', animal: 'cat', color: 'red', car: 'ford' }

const instructors = ['Alex', 'Gabriel', 'Pedro'];
const students = ['Alejandro', 'Mario', 'Victor', 'Alicia'];

const mergedObject = {
  ...objectB,
  ...objectA,
  // students: students,
  students,
  instructors,
};

// ? Console log the new merged object and both originals to ensure they have not changed.

console.log({ mergedObject });

// * **********************************************************************************
