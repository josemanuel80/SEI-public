/******************************************/
// Destructuring
/******************************************/
// Arrays
const countries = [
  'venezuela',
  'españa',
  'reino unido',
  'estonia',
  'colombia',
  'peru',
];

// const venezuela = countries[0];
// const españa = countries[1];

const [venezuela, españa] = countries;

console.log({ venezuela, españa });

// Objects
const student = {
  name: 'alejandro',
  nationality: 'spanish',
  age: 29,
  dogLover: false,
  videGameaficionado: false,
};

// const name = student.name;
// const name = student['name'];

const { age, name } = student;

console.log({ name, age });

/******************************************/
// Estructuring
/******************************************/

const instructorName = 'Gabriel';
const placeOfBirth = 'Bilbao';
const dob = new Date('08/01/1994');
const boardGamesAficionado = true;

const gabrielNormal = {
  instructorName: instructorName,
  placeOfBirth: placeOfBirth,
  dob: dob,
  boardGamesAficionado: boardGamesAficionado,
};

// Aplica los principios DRY (Don't repeat yourself) // Wet
// RTFM -> TL;DR (sinopsis o sumario)

const gabrielDestructuring = {
  placeOfBirth,
  dob,
  boardGamesAficionado,
};

console.log({ gabrielDestructuring });

/******************************************/
// Template literals
/******************************************/

const studentName = 'jose aurelio';
const pedro = `Pedro`;

const sentence =
  'Hola ' + pedro + ' conoces a ' + studentName + ' y su edad es  ' + age;

const sentenceAsTemplateLiteral = `Hola ${pedro} conoces a ${studentName} y su edad es ${age}. Aqui van los paises: ${countries.join(
  ', ',
)}`;

console.log(sentence);
console.log(sentenceAsTemplateLiteral);

/******************************************/
// Arrow functions
/******************************************/

var thing = '🎮';

function greeting(name) {
  return `Hola ${name} 👋`;
}

const constante = 'pedro';
let changeble = 'alex';

function setToUppercase(country) {
  console.log(country.toUpperCase());
}

countries.forEach(setToUppercase);

countries.forEach(function (country) {
  console.log(`${country} 🇺🇳`);
});

countries.forEach((country) => {
  console.log(country);
});

var hola = function () {
  console.log('hola');
};

hola();

const holaPerinola = () => {
  console.log('Hola Perinola 👋');
};

holaPerinola();

const alex = {
  name: 'Alex',
  sayHello: function () {
    console.log('Hola soy ' + this.name);
  },
};

// const guy = {
//   name: 'Guy',
//   sayHello: () => {
//     console.log('Hola soy ' + this.name);
//   },
// };

const guy = {
  name: 'Guy',
  sayHello() {
    console.log('Hola soy ' + this.name);
  },
};

alex.sayHello();
guy.sayHello();

// Spread operator
// (Spread - Difundir - Esparcir)
