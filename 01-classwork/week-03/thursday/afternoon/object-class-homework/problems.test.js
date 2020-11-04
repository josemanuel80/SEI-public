/* eslint-disable no-undef */
const problems = require('./problems');

describe('laptop', () => {
  test('debe tener la propiedad `fabricado` como una string', () => {
    expect(problems.laptop).toHaveProperty('fabricado');
    expect(typeof problems.laptop.fabricado).toBe('string');
  });

  test('debe tener la propiedad `modelo` como una string', () => {
    expect(problems.laptop).toHaveProperty('modelo');
    expect(typeof problems.laptop.modelo).toBe('string');
  });

  test('debe tener la propiedad `ram` como un numero', () => {
    expect(problems.laptop).toHaveProperty('ram');
    expect(typeof problems.laptop.ram).toBe('number');
  });

  test('debe tener la propiedad `almacenamiento` como un numero', () => {
    expect(problems.laptop).toHaveProperty('almacenamiento');
    expect(typeof problems.laptop.almacenamiento).toBe('number');
  });
});

describe('botellaVino', () => {
  test('debe tener la propiedad `nombre` como una string', () => {
    expect(problems.botellaVino).toHaveProperty('nombre');
    expect(typeof problems.botellaVino.nombre).toBe('string');
  });

  test('debe tener la propiedad `uva` como una string', () => {
    expect(problems.botellaVino).toHaveProperty('uva');
    expect(typeof problems.botellaVino.uva).toBe('string');
  });

  test('debe tener la propiedad `añejo` como un numero', () => {
    expect(problems.botellaVino).toHaveProperty('añejo');
    expect(typeof problems.botellaVino.añejo).toBe('number');
  });

  test('debe tener la propiedad `cantidad` como un numeror', () => {
    expect(problems.botellaVino).toHaveProperty('cantidad');
    expect(typeof problems.botellaVino.cantidad).toBe('number');
  });

  test('debe tener la propiedad `cantidadRestante` como un numero', () => {
    expect(problems.botellaVino).toHaveProperty('cantidadRestante');
    expect(typeof problems.botellaVino.cantidadRestante).toBe('number');
  });

  test('debe tener un metodo `drink`', () => {
    expect(typeof problems.botellaVino.drink).toBe('function');
  });

  test('debe quitar la cantidad dada de `cantidadRestante`', () => {
    problems.botellaVino.cantidadRestante = 750;
    problems.botellaVino.drink(250);
    expect(problems.botellaVino.cantidadRestante).toEqual(500);
  });

  test('debe tener un metodo `refill`', () => {
    expect(typeof problems.botellaVino.refill).toBe('function');
  });

  test('debe añadir la cantidad dada de `cantidadRestante`', () => {
    problems.botellaVino.cantidadRestante = 500;
    problems.botellaVino.refill(250);
    expect(problems.botellaVino.cantidadRestante).toEqual(750);
  });
});

describe('Producto', () => {
  let product;

  beforeEach(() => {
    product = new problems.Producto('iPhone', 'Latest model', 800);
  });

  test('debe tener la propiedad `nombre` como una string', () => {
    expect(product).toHaveProperty('nombre');
    expect(typeof product.nombre).toEqual('string');
  });

  test('debe tener la propiedad `descripcion` como una string', () => {
    expect(product).toHaveProperty('descripcion');
    expect(typeof product.descripcion).toEqual('string');
  });

  test('debe tener la propiedad `precio` como un numero', () => {
    expect(product).toHaveProperty('precio');
    expect(typeof product.precio).toEqual('number');
  });
});

describe('Cesta', () => {
  let cart, shirt, cap, trainers;

  beforeEach(() => {
    cart = new problems.Cesta();
    shirt = new problems.Producto('Shirt', 'White, 16" collar, long-sleve', 20);
    cap = new problems.Producto('Cap', 'Orange, snap-back', 30);
    trainers = new problems.Producto('Trainers', 'Adidas Campus, navy', 70);
  });

  it('debe tener la propiedad `contents` como un array', () => {
    expect(cart).toHaveProperty('contents');
    expect(typeof cart.contents).toEqual('object');
  });

  it('debe tener un metodo `addItem`', () => {
    expect(typeof cart.addItem).toBe('function');
  });

  it('debe poder añadir un item en `contents`', () => {
    cart.addItem(shirt);
    expect(cart.contents.length).toEqual(1);
  });

  it('debe tener un metodo `removeItem`', () => {
    expect(typeof cart.removeItem).toBe('function');
  });

  it('debe poder eliminar un item de `contents`', () => {
    cart.addItem(shirt);
    cart.addItem(trainers);
    cart.removeItem(shirt);
    expect(cart.contents.length).toEqual(1);
  });

  it('debe tener un metodo `empty`', () => {
    expect(typeof cart.empty).toBe('function');
  });

  it('debe poder eliminar los items de `contents`', () => {
    cart.addItem(cap);
    cart.addItem(shirt);
    cart.addItem(trainers);
    cart.empty();
    expect(cart.contents.length).toEqual(0);
  });

  it('debe tener un metodo `getTotal`', () => {
    expect(typeof cart.getTotal).toBe('function');
  });

  it('debe sumar los precios de todos los items en `contents`', () => {
    cart.addItem(cap);
    cart.addItem(shirt);
    cart.addItem(trainers);
    expect(cart.getTotal()).toEqual(120);
  });
});

xdescribe('Forma', () => {
  let shape;

  beforeEach(() => {
    shape = new problems.Forma(10, 20);
  });

  it('debe tener la propiedad `ancho` como un numero', () => {
    expect(shape).toHaveProperty('ancho');
    expect(typeof shape.ancho).toEqual('number');
  });

  it('debe tener la propiedad `altura` como un numero', () => {
    expect(shape).toHaveProperty('altura');
    expect(typeof shape.altura).toEqual('number');
  });

  it('debe tener un metodo `getArea`', () => {
    expect(typeof shape.getArea).toEqual('function');
  });

  it('debe calcular el area de la froma', () => {
    expect(shape.getArea()).toEqual(200);
  });

  it('debe tener un metodo `getPerimeter`', () => {
    expect(typeof shape.getPerimeter).toEqual('function');
  });

  it('debe calcula el perimetro de la forma', () => {
    expect(shape.getPerimeter()).toEqual(60);
  });
});

xdescribe('Cuadrado', () => {
  let shape;

  beforeEach(() => {
    shape = new problems.Cuadrado(20);
  });

  it('Debe extender la clase Forma', () => {
    expect(shape instanceof problems.Forma).toEqual(true);
  });

  it('debe tener la propiedad `ancho` como un numero', () => {
    expect(shape).toHaveProperty('ancho');
    expect(typeof shape.ancho).toEqual('number');
  });

  it('debe tener la propiedad `altura` como un numero', () => {
    expect(shape).toHaveProperty('altura');
    expect(typeof shape.altura).toEqual('number');
  });

  it('debe tener un metodo `getArea`', () => {
    expect(typeof shape.getArea).toEqual('function');
  });

  it('debe calcular el area de un cuadrado', () => {
    expect(shape.getArea()).toEqual(400);
  });

  it('debe tener un metodo `getPerimeter`', () => {
    expect(typeof shape.getPerimeter).toEqual('function');
  });

  it('debe calcular el perimetro de un cuadrado', () => {
    expect(shape.getPerimeter()).toEqual(80);
  });
});

xdescribe('Triangulo', () => {
  let shape;

  beforeEach(() => {
    shape = new problems.Triangulo(10, 20);
  });

  it('Debe extender la clase Forma', () => {
    expect(shape instanceof problems.Forma).toEqual(true);
  });

  it('debe tener la propiedad `ancho` como un numero', () => {
    expect(shape).toHaveProperty('ancho');
    expect(typeof shape.ancho).toEqual('number');
  });

  it('debe tener la propiedad `altura` como un numero', () => {
    expect(shape).toHaveProperty('altura');
    expect(typeof shape.altura).toEqual('number');
  });

  it('debe tener un metodo `getArea`', () => {
    expect(typeof shape.getArea).toEqual('function');
  });

  it('debe calcular el area de un triangulo', () => {
    expect(shape.getArea()).toEqual(100);
  });

  it('debe tener un metodo `getPerimeter`', () => {
    expect(typeof shape.getPerimeter).toEqual('function');
  });

  it('debe calcular el perimetro de un triangulo', () => {
    expect(shape.getPerimeter()).toEqual(37.63441361516796);
  });
});
