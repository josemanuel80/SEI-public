// *  ----- ARROW FUNCTION SYNTAX ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the function below

function sayHello() {
  return 'Hello World';
}

console.log(sayHello());

// ? We write the function using the arrow function syntax, store the function in a const "newSayHello". Console.log the result of calling both functions to check your work.

const newSayHello = () => {
  return 'Hola Mundo 🌍';
};

console.log({
  sayHello: sayHello(),
  newSayHello: newSayHello(),
});

// * **********************************************************************************

// ? Uncomment the function below

function greetSomeone(name) {
  return `Hello ${name}`;
}

const newGreetSomeone = (name) => {
  return `Hello ${name}`;
};

console.log({
  greetSomeone: greetSomeone('Ismael'),
  newGreetSomeone: newGreetSomeone('Alicia'),
});

// ? We write the function using the arrow function syntax, store the function in a const "newGreetSomeone". Console.log the result of calling both functions to check your work.

// * **********************************************************************************

// ? Uncomment the function below

function customGreetSomeone(greeting, name) {
  return `${greeting} ${name}`;
}

// ? We write the function using the arrow function syntax, store the function in a const "newCustomGreetSomeone". Console.log the result of calling both functions to check your work.

const newCustomGreetSomeone = (greeting, name) => {
  return `${greeting} ${name}`;
};

console.log({
  customGreetSomeone: customGreetSomeone('Hola', 'Jose Manuel'),
  newCustomGreetSomeone: newCustomGreetSomeone('Buenos dias', 'Carmen'),
});

// * **********************************************************************************
