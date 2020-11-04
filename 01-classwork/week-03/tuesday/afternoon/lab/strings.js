// * ----- Strings ------ *

// * 🦉 Práctica

//! ⚠️Recuerde comentar su código de práctica antes de intentar a continuación, "cmd" + "/"

//? Define un string como constante, imprime ese string y su longitud en la consola

const animal = 'snake';
console.log(animal.length);

//? Usando la sintaxis "+" y el string definida anteriormente, console.log el string "La palabra (myString) es (myStringLength) larga"

const plant = 'rose';

console.log(plant + animal);

console.log(
  `${plant} ${animal} => viene de la plantilla literal(en inglés "template literals")`,
);

//? Vuelva a intentarlo utilizando la sintaxis "` `".

// * ---- MÉTODOS DE STRING 🧪 ---- *

// * 🦉 Práctica

//! ⚠️Recuerde comentar su código de práctica antes de intentar a continuación, "cmd" + "/"

//? Declare el valor de string 'javascript' como una constante todo en minúsculas, usando métodos de string haga lo siguiente:

const javascript = 'javascript';

//? imprime el string en la consola todo en mayúsculas -> 'JAVASCRIPT'

console.log(javascript.toUpperCase());

//? imprime el título en mayúscula -> 'Javascript'

const JsEnMayuscula = javascript.charAt(0).toUpperCase() + javascript.slice(1);

console.log(JsEnMayuscula);

//? Bono, regístrelo así -> 'JavaScript 😎'

const JSMayuscula =
  javascript.charAt(0).toUpperCase() +
  javascript.slice(1, 4) +
  javascript.charAt(4).toUpperCase() +
  javascript.slice(5);

console.log(JSMayuscula);
