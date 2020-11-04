// *  ----- OBJECT METHODS  ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️ Comment out your practice code before attempting below, "cmd" + "/"

// ? Create a car object, which has properties for the following:
// ? brand(String)
// ? speed in mph(Number)

// ? slowDown: which decrements the car's current speed.

// ? Both methods should also console log the following string, passing in the brand name and new speed value: "The (brand) is travelling at (speed)mph"

// ? Test drive your cars by invoking their methods.
const car = {
  brand: 'Toyota',
  topSpeed: 140,
  speedUp() {
    this.topSpeed = this.topSpeed + 1;
    this.printInConsole();
  },
  slowDown() {
    this.topSpeed = this.topSpeed - 1;
    this.printInConsole();
  },
  printInConsole() {
    return console.log(
      `The ${this.brand} is travelling at ${this.topSpeed}mph`,
    );
  },
};

const carOne = {
  brand: 'Seat',
  topSpeed: 140,
  speedUp() {
    this.topSpeed = this.topSpeed + 1;
    this.printInConsole();
  },
  slowDown() {
    this.topSpeed = this.topSpeed - 1;
    this.printInConsole();
  },
  printInConsole() {
    return console.log(
      `The ${this.brand} is travelling at ${this.topSpeed}mph`,
    );
  },
};

const carThree = {
  brand: 'Mini Cooper',
  topSpeed: 160,
  speedUp() {
    this.topSpeed = this.topSpeed + 1;
    this.printInConsole();
  },
  slowDown() {
    this.topSpeed = this.topSpeed - 1;
    this.printInConsole();
  },
  printInConsole() {
    return console.log(
      `The ${this.brand} is travelling at ${this.topSpeed}mph`,
    );
  },
};

// Object factory this is analogue to do Class
const CarMaker = function (brand, topSpeed) {
  this.brand = brand;
  this.topSpeed = topSpeed;

  function speedUp() {
    this.topSpeed = this.topSpeed + 1;
    this.printInConsole();
  }
  function slowDown() {
    this.topSpeed = this.topSpeed - 1;
    this.printInConsole();
  }
  function printInConsole() {
    return console.log(
      `The ${this.brand} is travelling at ${this.topSpeed}mph`,
    );
  }

  return {
    brand: this.brand,
    topSpeed: this.topSpeed,
    speedUp: speedUp,
    slowDown: slowDown,
    printInConsole: printInConsole,
  };
};

const diegoCar = new CarMaker('mercedes benz', 200);

diegoCar.speedUp();
diegoCar.speedUp();
diegoCar.speedUp();
diegoCar.speedUp();
diegoCar.speedUp();
diegoCar.speedUp();

console.log(diegoCar);

console.log(car.speedUp);
console.log(car.speedUp());

console.log('Llame al metodo `speedUp`');
console.log(car);

car.slowDown();
car.slowDown();

console.log('Llame al metodo `slowDown`');
console.log(car);

// ? Create a monkey object, which has the following properties:
// ? name(String)
// ? species(String)
// ? foodsEaten(Array)
// ? And the following methods:
// ? eatSomething(thingAsString) which adds a new item into the monkey's foodsEaten array.
// ? introduce: returns a string introducing itself, including its name, species, and the last food it as eaten.

const monkey = {
  name: 'Jim panzee',
  species: 'araguato',
  foodsEaten: ['ants', 'leaves'],
  eatSomething(thingAsString) {
    this.foodsEaten.push(thingAsString);
  },
  introduce() {
    return console.log(
      `Hi 🐒, my name is ${this.name}, I am from the ${
        this.species
      } specie and the last meal I had is ${
        this.foodsEaten[this.foodsEaten.length - 1]
      }`,
    );
  },
};

monkey.introduce();
monkey.eatSomething('cambur');
monkey.introduce();

// ? Exercise your monkeys by retrieving their properties and using their methods.

// ? BONUS

// ? Create a bag object with the following property:
// ? contents(Array)

// ? The bag should have the following methods:
// ? addItem(String) - pushes a new item into the bag's contents array.
// ? removeItem(String) - removes a given item from the bag's contents array.
// ? listItems - lists all the current contents of the bag.
// ? emptyBag - removes all items from the bag.

// ? Test your methods, logging your bag after each on to make sure they are working!
// ? You may need to do some Googling for this one

// Good example of modelling objects for DataBases (ORM)

const bag = {
  contents: [],
  addItem(string) {
    this.contents.push(string);
  },
  removeItem(string) {
    const index = this.contents.indexOf(string);
    if (index >= 0) {
      this.contents.splice(index, 1);
    }
  },
  listItems() {
    console.log(`${this.contents.join(' ')}`);
  },
  emptyBag() {
    this.contents = [];
  },
};

const bagTwo = {
  contents: [],
  addItem(string) {
    this.contents.push(string);
  },
  removeItem(string) {
    const index = this.contents.indexOf(string);
    if (index >= 0) {
      this.contents.splice(index, 1);
    }
  },
  listItems() {
    console.log(`${this.contents.join(' ')}`);
  },
  emptyBag() {
    this.contents = [];
  },
};

console.log(
  '==========================================================================',
);

console.log(bag);

bag.addItem('peanuts');
bag.addItem('pears');

console.log(bag);

bag.removeItem('peanuts');

console.log(bag);

bag.listItems();

bag.emptyBag();

bag.listItems();

// API

// Application
// Program
// Interface

// Aplication vs Program vs function
