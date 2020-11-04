// * ----- NÚMEROS 🧮 ------

// * 🦉 Práctica

//! ⚠️Recuerde comentar su código de práctica antes de intentar a continuación, "cmd" + "/"

//? Defina una "const" con la etiqueta "num" y asigne el valor 10
const num = 10;

//? Defina una variable "resultado" usando la palabra clave "let", asigne su valor a nuestro "num" + 50 e imprima -> 60

let resultado;

resultado = num + 50;

console.log(resultado);

//? reasignar "resultado", para que sea el valor de sí mismo dividido por 2 e imprima -> 30

resultado = resultado / 2;

console.log(resultado);

//? reasignar "resultado" nuevamente, para que sea el valor de sí mismo menos 9 -> 21

resultado = resultado / 3;
console.log(resultado);

//? reasignar "resultado" de nuevo, para que sea el valor de sí mismo dividido por 7 -> 3

// * ----- Math Object 🧮 ------

// * 🦉 Práctica

//! ⚠️Recuerde comentar su código de práctica antes de intentar a continuación, "cmd" + "/"

//? Usando el objeto matemático integrado, intente lo siguiente:

//? Imprime el flotador 3.3 al número más cercano

const flotador = Math.round(3.3);

console.log(flotador);

//? Imprime el flotador 10.8 redondeado a 10

const floor = Math.floor(10.8);
console.log(floor);

//? Imprime el flotador 4.2 redondeando a 5

const ceil = Math.ceil(4.2);
console.log(ceil);

//? Imprime un número aleatorio entre 1 y 10

const randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);
