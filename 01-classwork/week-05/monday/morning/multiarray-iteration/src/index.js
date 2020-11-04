const southAmerica = ['ve', 'ar', 'uy', 'co'];
const centralAmerica = ['pa', 'ni', 'bz', 'do'];
const northAmerica = ['us', 'mx', 'ca'];

const america = [southAmerica, centralAmerica, northAmerica];

const europe = ['gb', 'es', 'pl', 'ee', 'pt'];

const world = [america, europe];

console.log({
  world,
});

printOnScreenLevelTwo = (worldItemItem) => {
  const isArraySecondLevel = Array.isArray(worldItemItem);

  if (isArraySecondLevel) {
    worldItemItem.forEach((isArraySecondLevelItem) => {
      console.log({ isArraySecondLevelItem });
    });
  } else {
    console.log({ worldItemItem });
  }
};

printOnScreen = (worldItem) => {
  const isArrayTopLevel = Array.isArray(worldItem);

  if (isArrayTopLevel) {
    worldItem.forEach(printOnScreenLevelTwo);
  }
};

world.forEach(printOnScreen);

// const co = world[0][0][3];

// console.log({ co });
