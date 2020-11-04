<<<<<<< HEAD
=======
// 1 - Programaticamente crear celdas en HTML y pegarlas en la pagina
//    dentro del elemento con la clase .grid

>>>>>>> 3eda19d7b95d2c473a0c67c8dfde0bb1f30cd003
const width = 10;
const height = width;

const cellCount = width * height;
<<<<<<< HEAD
document.querySelector('grid');

for (let index = 0; index < cellCount; indexx = index + 1) {
  console.log(index);
  const cell = document.createElement('div');
  cell.innerText = index;
  grid.appenChild(cell);
}

const handleKeyPress = (event) => {
  const { key } = event;

  console.log({ key });

  switch (key) {
    case 'ArrowUp':
      console.log('Voy pa arriba');
      break;
    case 'ArrowRight':
      console.log('Voy pa la derecha');
      break;
    case 'ArrowDown':
      console.log('Voy pa abajo');
      break;
    case 'ArrowRight':
      console.log('Voy a la izquierda');
      break;
    default:
      console.log('esta no kappa');
      break;
  }
};
=======

const grid = document.querySelector('.grid');

const cells = [];

for (let index = 0; index < cellCount; index = index + 1) {
  const cell = document.createElement('div');
  cell.innerText = index;
  grid.appendChild(cell);
  cells.push(cell);
}

// 2 - Crear un eventlistener de navegador que escuche a las teclas de arriba, abajo, izquierda y derecha, las demas rechazarlas

let pikaPosition = 89;

const addPika = (index) => cells[index].classList.add('pika');
const removePika = (index) => cells[index].classList.remove('pika');

const handleKeyPress = (event) => {
  const { key } = event;

  const x = pikaPosition % 10;
  const y = Math.floor(pikaPosition / 10);

  // 3 - Mover a Pikachu de un cuadro al otro dependiendo la orientación y la dirección
  //  3.1  ¿Cómo puedo saber en que coordenas Pikachu se encuentra?

  removePika(pikaPosition);

  switch (key) {
    case 'ArrowUp':
      if (y > 0) {
        pikaPosition = pikaPosition - width;
      }
      break;
    case 'ArrowRight':
      if (x < width - 1) {
        pikaPosition++;
      }
      break;
    case 'ArrowDown':
      if (y < width - 1) {
        pikaPosition = pikaPosition + width;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        pikaPosition--;
      }

      break;
    default:
      console.log('Eso no es una flecha flaco');
      break;
  }
  addPika(pikaPosition);
};

addPika(pikaPosition);

window.addEventListener('keyup', handleKeyPress);
>>>>>>> 3eda19d7b95d2c473a0c67c8dfde0bb1f30cd003
