let fullFillPromise = true;

const getIceCream = () => {
  return new Promise((resolve, reject) => {
    if (fullFillPromise) {
      resolve('Here is your Ice Cream 🍦');
    } else {
      reject('No Ice Cream for you ❌');
    }
  });
};

console.log('nombrando la function ===> ', getIceCream);
console.log('llamando la function ===> ', getIceCream());

getIceCream().then((data) => console.log({ data }));

fullFillPromise = false;

getIceCream()
  .then((data) => console.log({ data }))
  .catch((data) => console.log({ data }));

fullFillPromise = true;

const start = async () => {
  let data = await getIceCream();
  console.log('Dentro de start');
  console.log(data);
};

start();

const startTwo = async () => {
  let data;
  try {
    data = await getIceCream();
  } catch (error) {
    console.error(error);
  }

  console.log('Dentro de startwo', data);
};

startTwo();
