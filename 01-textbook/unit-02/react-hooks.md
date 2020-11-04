![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# React Hooks

En 2018, el equipo de React presentó Hooks to React. Los _hooks_ (ganchos )son esencialmente una forma de 'enganchar' a React _lifecycle_ y _state_ de una manera hermosa. No agrega nada nuevo a la funcionalidad de React - su _syntactic sugar_ sobre los componentes clásicos. Sin embargo, mejora enormemente la legibilidad y componibilidad de sus componentes.

## `State` con hooks

Así es como usaríamos un _hook_ de React para una aplicación de contador con `state`:

```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Update my count in a pure functional way */}
      <button onClick={() => setCount(count + 1)}>Click me to count</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));
```

`UseState` es un _hook_ para obtener y establecer un fragmento de estado.

Inicializamos nuestro estado de contador con un valor apropiado (0 en este caso, para comenzar nuestro conteo en 0). Pero para otros ejemplos, esto podría ser un objeto, unarray o cualquier otro tipo de JavaScript.

`UseState` es una función que siempre devuelve una matriz de 2 elementos. La línea:

```js
const [count, setCount] = useState(0);
```

_desestructura_ esa array en dos variables con nombre (aquí elegimos los nombres):

- `count`: el valor de la cuenta en sí
- `setCount`: Una _función para actualizar el recuento_ (esto reemplazará nuestra necesidad de usar _this.setState_)

Luego, en el JSX devuelto a continuación:

```js
<p>You clicked {count} times</p>;
{
  /* Update my count in a pure functional way */
}
<button onClick={() => setCount(count + 1)}>Click me to count!</button>;
```

Usamos nuestro `count` para mostrar el recuento, y `setCount` cuando se hace clic en el botón para aumentar el recuento en 1.

## `Lifecycle` con hooks

Los _hooks_ reemplazan gran parte de la necesidad de usar funciones del ciclo de vida de React, como `componentWillMount`. Hasta ahora hemos usado estas funciones de ciclo de vida para hacer llamadas a API, así que ahora lo hacemos con el hook `useEffect`.

```js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const DonutsApp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://ga-doughnuts.herokuapp.com/donuts')
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
    return () => console.log('Unmounting component');
  }, []);

  return (
    <div>
      {data.map((item, id) => (
        <p key={id}>{item.style}</p>
      ))}
    </div>
  );
};

ReactDOM.render(<DonutsApp />, document.getElementById('root'));
```

Para capturar el estado real de nuestras _donuts_, usamos `useState`, como en el ejemplo de count. Luego almacenamos nuestra respuesta API como `data`, que luego podemos mapear cuando renderizamos nuestra aplicación.

> **Nota**: que `setData` y `data` solo son responsables de representar _donuts_, por lo que si quisiéramos tener varios partes de estado en nuestra aplicación, como contadores, usaríamos `useState` varias veces para todas las piezas diferentes que necesitamos.

Sin embargo, la principal diferencia aquí es `useEffect`:

```js
useEffect(() => {
  fetch('https://ga-doughnuts.herokuapp.com/donuts')
    .then((resp) => resp.json())
    .then((resp) => setData(resp));
  return () => console.log('Unmounting component');
}, []);
```

Este código llamará a la API de _donuts_ una vez cuando se monte nuestro componente, y establecerá nuestra `data` para que sean los _donuts_ cuando vuelva nuestra respuesta.

`useEffect` es una función que toma dos argumentos:

- Una función para llamar.
- Cuándo llamar a esta función.

Para el segundo argumento, hay 3 casos principales. **Esto es importante de entender**

- si se trata de un array vacío `[]`, como en nuestro ejemplo anterior, llamará a la función una vez, cuando el componente se procese por primera vez (perfecto para llamadas únicas a la API)
- Si este array contiene valores `[a, b, c]`, donde `a`, `b` y `c` son partes de estado que pueden cambiar, esta función se llamará siempre que cambie cualquiera de estos valores.
- Si no se proporciona el segundo argumento, la función se llamará después de cada renderizado. Entonces, no incluir una matriz vacía como este segundo argumento, en nuestro ejemplo, haría infinitas llamadas a nuestra API, ¡lo cual definitivamente no queremos!

### Sumario

¡Eso es todo por lo básico de los _hooks_! Definitivamente, mira el video de Dan Abramov en _hooks_, que puedes encontrar a continuación:

https://reactjs.org/docs/hooks-intro.html

Y echa un vistazo a los otros _hooks_ que existen. Estos dos que hemos aprendido anteriormente son, con mucho, los más comunes y pueden reemplazar nuestra necesidad de depender en gran medida de los componentes de React basados en clases.
