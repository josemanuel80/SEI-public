// RELOJ ⌚️

const screen = document.querySelector('.screen');

const getTimeAsString = (date) => {
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const sec =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hour}:${min}:${sec}`;
};

const renderTimeOnScreen = () => {
  const now = new Date();
  screen.innerText = getTimeAsString(now);
};

const renderTimeOnScreenAsIntervals = (event) => {
  return setInterval(renderTimeOnScreen, 100);
};

window.addEventListener('DOMContentLoaded', renderTimeOnScreenAsIntervals);

/////////////////////////////////////////////////////////////////////////

// Timer ⏲

// Cuando apreto el boton de start, inicia una cuenta regresiva en la pantalla

// ejecucion

let count = 10;
let intervalId = null;

const renderTimerTime = () => {
  if (count === 0) {
    clearInterval(intervalId);
  } else {
    count = count - 1;
    timerScreen.innerText = count;
  }
};

const startTimer = (event) => {
  if (count > 0 && count < 10) {
    timerScreen.innerText = count;
    clearInterval(intervalId);
  } else {
    intervalId = setInterval(renderTimerTime, 1000);
  }
};

// elemento

const startButton = document.getElementById('start');
const timerScreen = document.querySelector('#timer .screen');

// evento

startButton.addEventListener('click', startTimer);

// Cuando  apreto el boton de reset, la cuenta regresiva para y regresa a 10

// ejecucion

const stopTimer = (event) => {
  clearInterval(intervalId);
  timerScreen.innerText = 10;
  count = 10;
  intervalId = null;
};

// elemento
const resetButton = document.getElementById('reset');

// evento
resetButton.addEventListener('click', stopTimer);
