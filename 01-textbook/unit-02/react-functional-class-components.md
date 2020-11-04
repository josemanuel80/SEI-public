![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# React componentes funcionales y clásicos

Hay dos tipos de componentes que podemos crear en una aplicación React: **Funcional** y **Clásico**.

En términos generales, debe usar el estilo **funcional**, a menos que necesite:

- Estado interno
- Ganchos de ciclo de vida
- Solicitudes AJAX o lógica compleja

## Funcional

```js
const MyComponent = (props) => {
  return <h1 className={props.className}>Hello World!</h1>;
};
```

- Sencillo
- Sin estado
- Presentacional
- Preferido
- Fácil de probar
- Devuelve JSX

Los componentes funcionales a menudo se denominan **componentes tontos** porque son puramente de presentación y no deben contener ninguna lógica.

Aceptan `props` de un componente principal y no tienen un estado interno.

Son fáciles de probar porque no tienen lógica propia. Siempre generarán la misma salida si los `props` que reciben son los mismos.

## Clásico

```js
class MyComponent extends React.Component {
  render() {
    return <h1 className="header">Hello World!</h1>;
  }
}
```

- Mas complejo
- con estado
- Contiene lógica
- Tiene ganchos de ciclo de vida
- Más difícil de probar
- Necesita un método de renderizado con devoluciones JSX

Los componentes clásicos también se conocen como **componentes inteligentes**. Por lo general, contienen toda la lógica que los componentes funcionales necesitan para funcionar.

Los componentes clásicos tienen `lifecycle hooks` que permiten realizar la lógica en determinados momentos durante la vida del componente.

Están disponibles los siguientes `hooks` de ciclo de vida:

#### Mounting (rendering)

- `componentWillMount()`
- `render()`
- `componentDidMount()`

#### Updating

- `componentWillReceiveProps()`
- `shouldComponentUpdate()`
- `componentWillUpdate()`
- `render()`
- `componentDidUpdate()`

#### Unmounting (destroying)

- `componentWillUnmount()`

> **Nota:** El _hook_ mas comun es `componentDidMount()`.

Los componentes clásicos son más difíciles de probar porque generalmente contienen una lógica compleja que se puede ejecutar en diferentes momentos durante su ciclo de vida. También podrían realizar solicitudes AJAX y manejar eventos DOM como "click" y "submit".

## Un ejemplo simple

Bien, veamos cómo podemos usar componentes tanto clásicos como funcionales juntos. Vamos a tomar algunos datos estáticos almacenados en el "estado" de un componente clásico y los presentaremos usando un componente funcional.

También veremos algunas características nuevas de ES6 en el camino.

### Adding some data

Abre el código de inicio. Comenzaremos agregando algún estado al componente `App`:

```js
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counties: [{
        name: 'Greater London',
        population: 8778500,
        borderedBy: [
          'Essex',
          'Kent',
          'Buckinghamshire',
          'Berkshire',
          'Hertfordshire',
          'Surrey'
        ]
      }, {
        name: 'Essex',
        population: 1802200,
        borderedBy: [
          'Greater London',
          'Hertfordshire',
          'Kent',
          'Suffolk',
          'Cambridgeshire'
        ]
      }, {
        name: 'Hertfordshire',
        population: 1176700,
        borderedBy: [
          'Essex',
          'Greater London',
          'Cambridgeshire',
          'Bedfordshire',
          'Buckinghamshire',
          'Berkshire',
          'Surrey'
        ]
      }]
    };

  }

  render() {
    .
    .
    .
  }
}
```

Muy bien, ahora tenemos algunos datos con los que trabajar, podemos comenzar a desarrollar la aplicación. Vamos a crear un componente tonto `County` para mostrar los datos de cada condado.

```sh
mkdir src/components && touch src/components/County.js
```

```js
import React from 'react';

const County = () => {
  return <div>County data goes here...</div>;
};

export default County;
```

Ok, Ahora importalo a `app.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import County from './components/County';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counties: [{ ... }, { ... }, { ... }]
    };

  }

  render() {
    return (
      <div>
        {this.state.counties.map((county, i) => <County key={i} {...county} />)}
      </div>
    );
  }
}
```

Vaya, ¿qué está haciendo `.map ()`, qué es esta `key={i}` y qué tonterías es `{...county}`?

### Bucles en React

#### `.map()`

El método `.map ()` crea una nuevo array a partir de un array existente. Es un poco como `.forEach ()` pero devuelve un array del mismo tamaño que el array existente con el contenido especificado en la función de devolución de llamada.

En este caso, hemos creado una array de tres componentes `County`, uno para cada objeto de condado en ` this.state`.

Esto

```js
<div>
  {this.state.counties.map((county, i) => (
    <County key={i} {...county} />
  ))}
</div>
```

Se convierte en esto

```js
<div>
  [
  <County key={0} {...county} />,
  <County key={1} {...county} />,
  <County key={2} {...county} />]
</div>
```

Verá esto mucho en el desarrollo de React.

#### `key`

React requiere el prop `key` cuando se procesan componentes en un bucle. Si los datos subyacentes cambian, React quiere una manera fácil de saber qué componentes deben cambiarse o eliminarse. Colocar un identificador único (como un índice) en el prop `key` hará bien el trabajo.

```
Warning: Each child in an array or iterator should have a unique "key" prop.
```

#### `{...county}`

Este es el operador ES6 `spread` en acción. Es un buen atajo para hacer esto:

```js
<County
  key={2}
  name={county.name}
  population={county.population}
  borderedBy={county.borderedBy}
/>
```

Por supuesto que simplemente podríamos haber hecho esto:

```js
<County key={2} county={county} />
```

Pero es importante que nos acostumbremos a usar el operador `spread`, ya que es ampliamente utilizado por la comunidad React.

### Visualización de los datos dentro del componente `County`

Ahora deberíamos ver "Los datos del condado van aquí ..." tres veces en la pantalla. Actualicemos el componente `County` para manejar los datos que se pasan a través de` props`:

```js
import React from 'react';

const County = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        Population: <strong>{props.population}</strong>
      </p>
      <p>Bordered by:</p>
      <ul>
        {props.borderedBy.map((county, i) => (
          <li key={i}>{county}</li>
        ))}
      </ul>
    </div>
  );
};

export default County;
```

Ahora deberíamos ver la información de los tres condados mostrada en la pantalla.

Observe que hemos usado `.map ()` nuevamente para recorrer el array `borderedBy`, lo que nos ha requerido usar la propiedad` key` en la etiqueta `<li>`.

Los datos que pasamos al componente con nuestro operador `spread` se han adjuntado al argumento` props`. Usando la desestructuración de ES6 podemos refactorizar nuestro código ligeramente:

```js
import React from 'react';

const County = ({ name, population, borderedBy }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        Population: <strong>{population}</strong>
      </p>
      <p>Bordered by:</p>
      <ul>
        {borderedBy.map((county, i) => (
          <li key={i}>{county}</li>
        ))}
      </ul>
    </div>
  );
};

export default County;
```

Aquí hemos extraído las propiedades del objeto `props` dentro de la parte del argumento de la declaración de la función de flecha, creando variables independientes` nombre`, `población` y `borderedBy`.

## Conclusión

En términos generales, queremos dividir nuestras aplicaciones en componentes más pequeños. Los componentes clásicos o _smart_ se utilizan para mantener la lógica y el estado. Los componentes funcionales o _dumb_ deben usarse para mostrar solo datos.

Debido a que los componentes funcionales son más simples y reutilizables, requieren menos cálculo y son fáciles de probar, por lo que siempre debe preferirlos a los componentes clásicos.

Sin embargo, si necesita almacenar datos en el estado o necesita realizar solicitudes de lógica compleja o AJAX, debe utilizar un componente clásico.

## Más lecturas

- [State and Lifecycle - React](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [React.Component - React](https://facebook.github.io/react/docs/react-component.html)
