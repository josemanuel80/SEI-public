const jugador1 = document.querySelector('.jugador1');
const jugador2 = document.querySelector('.jugador2');
const resultado = document.querySelector('.resultado');
const botones = document.querySelectorAll('button.eleccion');
const resetBtn = document.querySelector('button.reset');

const condicionesGanar = {
  piedra: 'tijeras',
  papel: 'piedra',
  tijeras: 'papel',
};

const elecciones = Object.keys(condicionesGanar);

function hacerEleccion() {
  return elecciones[Math.floor(Math.random() * elecciones.length)];
}

function encontrarGanador(eleccionJugador1, eleccionJugador2) {
  if (condicionesGanar[eleccionJugador1] === eleccionJugador2)
    return 'El jugador 1 gana';
  if (condicionesGanar[eleccionJugador2] === eleccionJugador1)
    return 'El jugador 2 gana';
  return 'Empate';
}

function play(event) {
  const eleccionJugador1 = event.target.textContent;
  const eleccionJugador2 = hacerEleccion();
  const ganador = encontrarGanador(eleccionJugador1, eleccionJugador2);

  jugador1.textContent = eleccionJugador1;
  jugador2.textContent = eleccionJugador2;
  resultado.textContent = ganador;
}

function reset() {
  jugador1.textContent = '';
  jugador2.textContent = '';
  resultado.textContent = '';
}

botones.forEach((button) => button.addEventListener('click', play));
resetBtn.addEventListener('click', reset);
