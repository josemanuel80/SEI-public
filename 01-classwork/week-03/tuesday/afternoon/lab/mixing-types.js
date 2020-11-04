// * ----- Mezclando tipos 🕺 ------ *

// * 🦉 Práctica

//! ⚠️Recuerde comentar su código de práctica antes de intentar a continuación, "cmd" + "/"

//? Declare dos "consts", "numOne" y "numTwo", establezca sus valores en  strings numéricos '10' y '5'

const numOne = '10';

const numTwo = '5';

//? Declare una nueva variable con "let" llamado resultado, use el operador "+" para asignarle un valor e imprime para que produzca "105"

let resultado;

resultado = numOne + numTwo;

console.log(resultado);

//? ¿Cuál es el tipo de resultado actualmente? Imprime usando la función incorporada "typeof ()"

console.log(typeof resultado);

//? Ahora vuelva a asignar el resultado para agregar el número 45 e imprime. -> 150

resultado = parseInt(resultado) + 45;
console.log(resultado);

//? Imprime el resultado en typeof de nuevo, ¿cuál será ahora?

console.log(typeof resultado);
