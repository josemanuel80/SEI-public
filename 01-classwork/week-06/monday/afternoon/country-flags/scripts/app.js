// 3.1 getCountries es una funcion que conecta con un API y
// como es una funcion que maneja Request / Respone debo esperar por ella (Es una promesa)
const getCountries = async () => {
  // Hago la peticion (Request) al API a traves de parametro de URL (endpoint)
  // y guardo la respusta en una variable
  const response = await fetch('https://restcountries.eu/rest/v2/all');
  // Luego deserializo el contenido de la respuesta en formato JSON
  const data = await response.json();
  // Devuelvo el JSON
  return data;
};

const countryTemplate = document.querySelector('template');
const countriesWrapper = document.querySelector('.countries');

// 2. Render countries es una funcion iniciada por un EventListener
// y como somos buenos desarrolladores undicamos que su argumento es un evento,
// tambien como es una funcion que va a manejar promesas utilizo la sintaxis de async/await

const renderCountries = async (_event) => {
  // 3. Llamo una function que maneja la peticion al Countries API y me devuelve la data
  const countries = await getCountries();

  // 4. La data es un array de objetos e itero y por cada uno de ellos hago lo siguiente
  countries.forEach((country) => {
    // Utilizando sintaxis de ES6 desconstruyo el objeto country y el asigno el valor
    // de las propiedades name, nativeName, flag a variables homonimas
    const { name, nativeName, flag } = country;

    // Por cada bucle le pido al DOM que clone el HTML dentro de template
    const clone = countryTemplate.content.cloneNode(true);

    // Dentro del template busco los siguientes elmentos
    const firstP = clone.querySelector('p:first-of-type');
    const secondP = clone.querySelector('p:last-of-type');
    const img = clone.querySelector('img');
    //const option = clone.querySelector('option');

    // Luego asigno el texto o atributos HTML de las variables creadas en la linea 29
    firstP.innerText = name;
    secondP.innerText = nativeName;

    img.setAttribute('src', flag);
    img.setAttribute('alt', name);
    //option.setAttribute('value', nativeName);

    // Apendo el clone al elemento de HTML section con la clase countries,
    // inicializado en la linea 14
    countriesWrapper.appendChild(clone);
  });
};

// 1. Cuando HTML se carga en la pagina va ejecutar renderCountries
document.addEventListener('DOMContentLoaded', renderCountries);
