/*
Crea un objeto que describa un portátil. Debe tener las siguientes propiedades:

fabricado (string)
modelo (string)
ram (number)
almacenamiento (number)
*/

const laptop = {
  fabricado: 'Alejandro',
  modelo: 'Ultra power super uff',
  ram: 40000000,
  almacenamiento: 1000000000000000,
};

/*
Crea un objeto que describa una botella de vino. Debe tener las siguientes propiedades:

nombre (string)
uva (string, eg: Merlot)
añejo (number, eg: 2017)
cantidad (number, eg: 750)
cantidadRestante (number, eg: 750)

Debe tener los siguientes métodos:

drink(cantidad) - quita `cantidad` a la `cantidadRestante`
refill(cantidad) - añade `cantidad` a la `cantidadRestante`

*/

const botellaVino = {
  nombre: 'rioja',
  uva: 'Merlot',
  añejo: 2017,
  cantidad: 750,
  cantidadRestante: 5000,
  drink(cantidad) {
    this.cantidadRestante = this.cantidadRestante - cantidad;
  },
  refill(cantidad) {
    this.cantidadRestante = this.cantidadRestante + cantidad;
  },
};

/*
crea una clase de Producto que tenga las siguientes propiedades:

nombre(string)
descripcion (string)
precio (number)
*/

class Producto {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
/*
crea una clase de Cesta que tenga las siguientes propiedades:

contents (array)

y los siguientes métodos:

addItem(item) - añade el item dado en el array de contenidos
removeItem(item) - elimina el item dado del array de contenidos
empty() - elimina todos los items del array de contenidos
getTotal() - devuelve el precio total de todos los items del array de contenidos 
*/

class Cesta {
  constructor(contents) {
    this.contents = contents;
    addItem: function() {      
    splice(item1, item2, item3);
    }
    removeItem(item);
    {
      delete (item1, item2, item3);
    }
    empty();
    {
      delete (item1, item2, item3);
    }
    getTotal();
    {
      console.log();
    }
  }
}

/*
Escribe una clase Forma que tenga las siguientes propiedades:

ancho (number)
altura (number)

y los siguientes métodos:

getArea() - calcula el area de la forma
getPerimeter() - calcula el perimetro de la forma
*/

class Forma {}

/*
Escribe una clase Cuadrado que se extienda de la clase Forma de arriba. Debe tener las mismas propiedades y métodos que la clase Forma, pero sólo toma un ancho cuando se encuentra establecida. La altura debe ser automáticamente establecida para ser igual al ancho.
*/

class Cuadrado extends Forma {}

/*
Escribe una clase Triangulo que se extienda de la clase Forma de arriba. Debe tener las mismas propiedades

ancho (number)
altura (number)

y los siguientes métodos:

getArea() - calcula el perimetro del triangulo
getPerimeter() - calcula el perimetro del triangulo (asumiendo que es un triangulo rectangulo, asi que ancho + altura + √ancho + √altura)
*/

class Triangulo extends Forma {}

// por favor no alterar abajo! ✋

module.exports = {
  laptop,
  botellaVino,
  Producto,
  Cesta,
  Forma,
  Cuadrado,
  Triangulo,
};
