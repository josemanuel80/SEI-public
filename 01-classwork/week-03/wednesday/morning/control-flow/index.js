/* Control Flow */

// if...else statements
function areYouAllowToDrink(age) {
  let allowToDrink;

  if (age < 16) {
    allowToDrink = 'Go to home and drink milk with biscuits';
    return console.log(allowToDrink);
  }

  // Using &&
  if (age >= 16 && age < 18) {
    allowToDrink = `You can drink in the pub with a meal with your parent's supervision`;
    return console.log(allowToDrink);
  }

  if (age >= 18) {
    allowToDrink = 'Yes! you are allow to drink in the Great Britain 🇬🇧 🍺';
    return console.log(allowToDrink);
  }

  // Set a default if any evaluations not match
  if (typeof age !== 'number') {
    allowToDrink = 'You need a number to evaluate age';
    return console.log(allowToDrink);
  }
}

// Switch statement
function areYouAllowToDrinkAsSwitch(age) {
  let allowToDrink;

  // Evaluation against what is between parenthesis on line 35
  switch (true) {
    case age < 16:
      allowToDrink = 'Go to home and drink milk with biscuits';
      break;
    case age >= 16 && age < 18:
      allowToDrink = `You can drink in the pub with a meal with your parent's supervision`;
      break;
    case age >= 18:
      allowToDrink = 'Yes! you are allow to drink in the Great Britain 🇬🇧 🍺';
      break;
    // Set a default if any evaluations not match (equal to example on line 23)
    default:
      allowToDrink = 'You need a number to evaluate age';
      break;
  }
  return console.log(allowToDrink);
}

areYouAllowToDrinkAsSwitch(1);
areYouAllowToDrinkAsSwitch(17);
areYouAllowToDrinkAsSwitch(32);
areYouAllowToDrinkAsSwitch('Soy texto');

// Ternary syntax example

function areYouSpanish(birthCountryIsoCode) {
  let message;
  birthCountryIsoCode === 'es'
    ? (message = 'Eres español')
    : (message = 'No eres español');
  // return console.log(message);
  // let message;

  // Lines from 62 to 64 are the same as lines from 70 to 74

  // if (birthCountryIsoCode === 'es') {
  //   message = 'Eres español';
  // } else {
  //   message = 'No eres español';
  // }
  return console.log(message);
}

// areYouSpanish('ve');
// areYouSpanish('gb');
// areYouSpanish('es');

// Comparison using OR (||)
function areYouEuropean(birthCountryIsoCode) {
  let message;

  if (
    // If one of the statements return true, it would return everything true
    birthCountryIsoCode === 'es' ||
    birthCountryIsoCode === 'gb' ||
    birthCountryIsoCode === 'de' ||
    birthCountryIsoCode === 'ee'
  ) {
    message = 'you are european';
  } else {
    message = 'you are not european';
  }

  return console.log(message);
}

areYouEuropean('ve');
areYouEuropean('ee');
areYouEuropean('es');
areYouEuropean('gb');
areYouEuropean('co');
areYouEuropean('pe');
