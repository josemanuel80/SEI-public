const removeTransition = (event) => event.target.classList.remove('playing');

const playSoundForLetter = (event) => {
  const pressedLetter = event.key;

  const audio = document.querySelector(`audio[data-key="${pressedLetter}"]`);
  const letterBox = document.querySelector(`div[data-key="${pressedLetter}"]`);

  if (audio && letterBox) {
    audio.currentTime = 0;
    audio.play();

    letterBox.classList.add('playing');
    letterBox.addEventListener('transitionend', removeTransition);
  }
};

window.addEventListener('keypress', playSoundForLetter);
