// *  ----- OBJECT DESTRUCTURING SYNTAX------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the following object

const cat = {
  name: 'Cheeseburger',
  age: 3,
  location: 'London',
  owner: 'Jack',
};

// const location = cat.location;

// ? Using the object destructuring syntax, assign the value of the location property to a const with the same name as its key and console.log below
const { location } = cat;

// ? Do the same again, but for name and age.
const { age } = cat;

console.log({ age, location });

// ? and again for owner, but change the "const" name to be "catOwner"

// const catOwner = cat.owner;
const { owner: catOwner } = cat;
console.log({ catOwner, cat });

// * **********************************************************************************

// ? Uncomment the following function declaration and its call.

function add(obj) {
  return obj.firstNumber + obj.secondNumber;
}

function add(obj) {
  const { firstNumber, secondNumber } = obj;
  return firstNumber + secondNumber;
}

function add({ firstNumber, secondNumber }) {
  return firstNumber + secondNumber;
}

console.log(add({ firstNumber: 10, secondNumber: 20 }));

// ? Attempt to refactor the parameters of the add function, to use the destructuring syntax.

const xavierSchoolForGifted = ['storm', 'jean grey', 'cyclops'];

const [storm, jeanGrey, cyclops] = xavierSchoolForGifted;
const [pedro, alex, gabriel] = xavierSchoolForGifted;

console.log({ storm, jeanGrey, cyclops });

console.log({ pedro, alex, gabriel });
