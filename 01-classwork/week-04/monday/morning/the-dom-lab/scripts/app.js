// ! 🚨 HOOK IT ALL UP

// *  ------- ACCESSING A DOM ELEMENT --------

// H1
const h1AsquerySelector = document.querySelector('h1');

// H2
const h2AsQuerySelector = document.querySelector('h2');
const h2AsQuerySelectorUsingId = document.querySelector('#target-element');
const h2AsElementById = document.getElementById('target-element');

console.log({
  h2AsQuerySelector,
  h2AsQuerySelectorUsingId,
  h2AsElementById,
});

// querySelectorAll returns multiple elements as an array like collection called NodeList
const multiElements = document.querySelectorAll('.multi-element');
const multiElementsAsClassName = document.getElementsByClassName(
  'multi-element',
);

// Transform a NodeList to a full array
const multiElementsAsAnArray = Array.from(multiElements);

// Selecting the second of type of .multi-element

const multiElementSecondOfType = document.querySelector(
  '.multi-element:nth-of-type(2)',
);

const multiElementSecondOfTypeComingFromAnArray = multiElementsAsAnArray[1];

console.log({ multiElementSecondOfType });

// *  -------- UPDATE/CHANGE DOM ELEMENT --------
h1AsquerySelector.innerText = 'Sra Carmen';

h1AsquerySelector.classList.add('color-verde');
h1AsquerySelector.classList.remove('color-verde');
// h1AsquerySelector.classList.toggle('color-verde');

// *  -------- CREATING NEW ELEMENT ---------

// Create an element and stored as variable
const parrafo = document.createElement('p');
// Add some content to that element
parrafo.innerText = 'Este es el contenido creado por JS';
// Add the element to the document
document.body.appendChild(parrafo);
// Add a class
parrafo.classList.add('color-verde');

// *  -------- ACCESSING MULTIPLE ELEMENTS --------

// * -------- CHANGE/UPDATE MULTIPLE ELEMENTS AT ONCE --------

const addClassColorVerde = (element) => {
  return element.classList.add('color-verde');
};

multiElementsAsAnArray.forEach(addClassColorVerde);
