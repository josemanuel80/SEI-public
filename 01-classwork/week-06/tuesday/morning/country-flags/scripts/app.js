//*********************************************** */
// Elements
//*********************************************** */

const countryTemplate = document.querySelector('template');
const countriesWrapper = document.querySelector('.countries');

const select = document.querySelector('select');
const form = document.querySelector('form');

const searchInput = document.getElementById('search');

//*********************************************** */
// Helper functions
//*********************************************** */

const getCountries = async (region) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/${region}`);
  const data = await response.json();
  return data;
};

const renderCountries = (countries) => {
  countries.forEach((country) => {
    const { name, nativeName, flag } = country;

    const clone = countryTemplate.content.cloneNode(true);

    const firstP = clone.querySelector('p:first-of-type');
    const secondP = clone.querySelector('p:last-of-type');
    const img = clone.querySelector('img');

    firstP.innerText = name;
    secondP.innerText = nativeName;

    img.setAttribute('src', flag);
    img.setAttribute('alt', name);

    countriesWrapper.appendChild(clone);
  });
};

const eraseCountries = () => {
  countriesWrapper.innerHTML = '';
};

//*********************************************** */
// Event Handlers
//*********************************************** */

// 2.Render countries hace lo siguiente
const renderAllCountries = async (event) => {
  // 2.1 Utilizando la modularidad de la function getCountries donde puede cambiar dinamicamente el URL del endpoint
  // Hago una peticion al endpoint https://restcountries.eu/rest/v2/all y me devuelve una respuesta que luego serializo en JSON
  // un array de todos los paises disponibles en el API
  const countries = await getCountries('all');

  // 2.2 Una vez obtenido el array de countries llamo a la function renderCountries que permite leer un array de countries dinamicamennte
  // e imprimirlos en pantalla
  await renderCountries(countries);
};

// SELECT handleChange hace lo siguiente:
const handleChange = async (event) => {
  // 1 obtiene el valor escogido por el usuario
  const value = event.target.value;
  // 2 Evalua si el valor escogido por el usuario es un string con una dimension mayor a cero
  const isNotAnEmptyString = value.length > 0;

  // 3 Si el valor es mayor a cero, ejecuta lo siguiente
  if (isNotAnEmptyString) {
    // 4 crea utilizando un literal template un string que es el la parte final del URL del endpoint que quiero hacer la peticion
    const region = `region/${value.toLowerCase()}`;
    // 5 Hace la peticion al endpoint https://restcountries.eu/rest/v2/region/{region} (ejemplo: https://restcountries.eu/rest/v2/region/europe)
    // Y guarda el resultado deserializado en JSON en la variable regionCountries
    const regionCountries = await getCountries(region);
    // 6 Utilizando la function eraseCountries, borra todo el HTML contenido dentro de la section con la clase countries
    eraseCountries();
    // 7 Una vez obtenido el array de countries llamo a la function renderCountries que permite leer un array de countries dinamicamennte
    // e imprimirlos en pantalla
    renderCountries(regionCountries);
  }
};

// SUBMIT handleSubmit hace lo siguiente:
const handleSubmit = async (event) => {
  // 1 Previene el comportmiento preseterminado de la forma que es hacer una peticion al URL descrito en el atributo action
  event.preventDefault();

  // 2 obtiene el valor escogido por el usuario llamando al valor del input de search
  const value = searchInput.value;
  // 3 Evalua si el valor escogido por el usuario es un string con una dimension mayor a cero
  const isNotAnEmptyString = value.length > 0;
  // 4 Si el valor es mayor a cero, ejecuta lo siguiente
  if (isNotAnEmptyString) {
    // 5 crea utilizando un literal template un string que es el la parte final del URL del endpoint que quiero hacer la peticion
    const searchString = `name/${value.toLowerCase()}`;
    // 6 Hace la peticion al endpoint https://restcountries.eu/rest/v2/name/{name} (ejemplo: https://restcountries.eu/rest/v2/name/esp)
    // Y guarda el resultado deserializado en JSON en la variable countries
    const countries = await getCountries(searchString);
    // 7 Utilizando la function eraseCountries, borra todo el HTML contenido dentro de la section con la clase countries
    eraseCountries();
    // 8 Una vez obtenido el array de countries llamo a la function renderCountries que permite leer un array de countries dinamicamennte
    // e imprimirlos en pantalla
    renderCountries(countries);
  }
};

//*********************************************** */
// Event Listeners
//*********************************************** */

// 1. Cuando la pagina carga todo el HTML llama a renderAllCountries
document.addEventListener('DOMContentLoaded', renderAllCountries);

// SELECT Cuando el usuario cambia en la lista de opciones y escoge una region o no,
// Llama a la funcion handleChange
select.addEventListener('change', handleChange);

// SUBMIT Cuando el usuario hace submit a la forma se llama a la funcion handleSubmit
form.addEventListener('submit', handleSubmit);
