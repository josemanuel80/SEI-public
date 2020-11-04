// *  ----- CLASSES  ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

class Person {
  constructor(name, age, hometown) {
    this.name = name;
    this.age = age;
    this.hometown = hometown;
  }
  introduce() {
    console.log(`Hi my name is ${this.name} from ${this.hometown}`);
  }
}

const pedro = new Person('Pedro', 42, 'Caracas');

console.log(pedro);

pedro.introduce();

const carlos = new Person('Carlos', 22, 'Sagunto');

console.log(pedro.name);

const nadie = new Person();
nadie.introduce();

// const charlotte = new Person('Charlotte', 28, 'London')

// const jack = new Person('Jack', 30, 'Portsmouth')

// console.log('I am the Charlotte object:', charlotte)
// console.log('I am the Jack object :', jack)

// charlotte.introduce()
// jack.introduce()

// ! ⚠️ Comment out your practice code before attempting below, "cmd" + "/"
// ? Create a Car class, which has properties for the following:
// ? brand(String)
// ? speed in mph(Number)
// ? And the following methods:// ? speedUp: which increments the car's current speed.
// ? slowDown: which decrements the car's current speed.
// ? Both methods should also console log the following string, passing in the brand name and new speed value: "The (brand) is travelling at (speed)mph"
// ? Test drive your cars by invoking their methods.

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  speedUp() {
    this.speed = this.speed + 1;
    this.printInConsole();
  }

  slowDown() {
    this.speed = this.speed - 1;
    this.printInConsole();
  }

  printInConsole() {
    return console.log(`The ${this.brand} is travelling at ${this.speed}mph`);
  }
}

const toyota = new Car('toyota', 140);

const seat = new Car('seat', 160);

const miniCopper = new Car('Mini Cooper', 160);

toyota.printInConsole();
seat.printInConsole();
miniCopper.printInConsole();

toyota.speedUp();
toyota.speedUp();
toyota.speedUp();
toyota.speedUp();

toyota.printInConsole();

console.log(
  ' =================================================================',
);

class Animal {
  constructor(name) {
    this.name = name;
  }
  protest() {
    console.log('What is wrong with you!!!!!');
  }
}

// Class inheritance
class Duck extends Animal {
  super;
  quack() {
    console.log('quack quack');
  }
}

class Dog extends Animal {
  super;
  woof() {
    console.log('woof woof');
  }
}

const donald = new Duck('donald');
donald.quack();
donald.protest();

const pluto = new Dog('pluto');

pluto.woof();
pluto.protest();

// const name = 'Sra. Carmen';
// console.log(typeof name);
console.log(typeof donald);
console.log(donald instanceof Duck);
console.log(donald instanceof Dog);
