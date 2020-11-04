const box = document.querySelector('.box');
const codeDisplay = document.querySelector('.display > p > code');
const counterDisplay = document.querySelector('.counter > p > span');

let counter = 0;

const blowTank = () => {
  box.classList.add('blow-tank');
};

const handleBoxClick = (event) => {
  const { type, target } = event;
  codeDisplay.innerText = type;
  counterDisplay.innerText = counter + 1;
  counter++;
  blowTank();
  target.removeEventListener('click', handleBoxClick);
};

const hadleWindowKeypress = (event) => {
  const { key, type } = event;

  if (key === 'a') {
    codeDisplay.innerText = type;
    counterDisplay.innerText = counter + 1;
    counter++;
  }
};

box.addEventListener('click', handleBoxClick);

window.addEventListener('keypress', hadleWindowKeypress);
