//- Cuando un usuario hace su elección (piedra, papel o tijera), también se debe generar aleatoriamente una elección del ordenador
/*
- Escribir algo de lógica para determinar quién ha ganado
- Mostrar la elección del jugador y la elección del ordenador
- Mostrar el ganador en la página
- Cuando se hace clic en el botón de reinicio, se borran las opciones y el ganador de la pantalla
*/
// Hacer elementos en HTML para piedra, papel o tijera
//Añadir elemento de click en cada uno
//Cuando hay click
//1 saber el valor del elemento que hice click (piedra o papel o tijera)
//2 crear aleatoriamente una selección para el ordenador
//3 comparar la elección del usuario vs la maquina y declarar resultado (gana)

// Imprimir en pantalla

//Selección del usuario
//Selección de la computadora
//Resultadodel match

//Crear un boton que reinicie otro match
//borrar ganador
//borrar Seleción del ususario
//borrar Selción de la computadora
//borrar resultado del match

//Añadir elemento de click en cada uno
//Elemento
const buttonsoptions = document.querySelectorAll('button');
const newbuttonsoptions = document.querySelectorAll('button');
//Evento
buttonsoptions.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

const buttonsoptions1 = new buttonsoptions(clientButtonclicked);

//Ejecucción

function clientButtonclicked(event) {
  const Buttonclicked = event.target;
  const lengthclickedButton = Buttonclicked.innerText.toLowerCase();
}

function handleButtonClick(event) {
  const clickedButton = event.target;
  const valueClickedButton = clickedButton.innerText.toLowerCase();
  const computerChoice = randomComputerChoice();
  declareMatchResult(valueClickedButton, computerChoice);
}

function declareMatchResult(userOption, machineOption) {
  let matchResult;
  switch (true) {
    case machineOption - userOption == 2:
      matchResult = 'user wins';
      break;

    case userOption == machineOption:
      matchResult = 'tie';
      break;

    case userOption - machineOption === 2:
      matchResult = 'computer wins';
      break;

    default:
      break;
  }
}

function randomComputerChoice() {
  const choices = ['piedra', 'papel', 'tijera'];
  const randomIndex = Math.floor(Math.random() + 3);
  return choices[randomIndex];
}
