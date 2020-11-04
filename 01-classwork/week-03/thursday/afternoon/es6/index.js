// Argumentos predeterminados

const royalGreetings = (title = 'Your Majesty', name) => {
  return console.log(`Good afternon your ${title} ${name}`);
};

royalGreetings('Highness', 'Carmen');
royalGreetings(undefined, 'Carmen');

// Parametros rests

const hola = (palabra, ...mensaje) => {
  const restoDelMensaje = mensaje.join(' ');
  return console.log(
    `Esta es la palabra: ${palabra}, este es el resto del mensaje ${restoDelMensaje}`,
  );
};

hola('Yerell');
hola('Daniel', 'gabriel', 'alex', 'jose manuel', 'carlos');

// Estructuracion

const name = 'Ismael';
const age = 22;
const location = 'Ciudad Real de la Mancha';

// const ismael = {
//   name: name,
//   age: age,
//   location: location
// };

const ismael = {
  // name: name,
  name,
  age,
  location,
};

console.log(ismael);

// Destructuracion

const buro = {
  nombre: 'burocracia',
  especie: 'tortoise',
};

console.log(buro);

const { nombre, especie, pedro } = buro;

console.log(nombre);
console.log(especie);
console.log(pedro);

const fruits = ['fresa', 'manzana', 'tomate'];

const [fresa, manzana, tomate] = fruits;

console.log(fresa);
console.log(manzana);
console.log(tomate);
