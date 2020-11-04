const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');
const nieto = document.getElementById('nieto');

const renderColorOnScreen = (color) => {
  document.body.classList = '';
  document.body.classList.add(color);
};

const renderScreenYellow = (event) => {
  event.stopPropagation();
  renderColorOnScreen('yellow');
};

const renderScreenBlue = (event) => {
  event.stopPropagation();
  renderColorOnScreen('blue');
};

padre.addEventListener('click', renderScreenYellow);

hijo.addEventListener('click', renderScreenBlue);
