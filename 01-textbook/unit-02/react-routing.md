![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Enrutamiento en React (_React routing_)

React no viene con un enrutador incorporado, por lo que depende de ti decidir cómo enrutar su aplicación.

Tus principales opciones son:

- Crea el tuyo
- Utiliza [React Router](https://reacttraining.com/react-router/)
- Utiliza otro enrutador de terceros

Generalmente, los desarrolladores usan React Router a menos que tengan una buena razón para no hacerlo. Está bien documentado y hay mucha ayuda en línea.

Sin embargo, una pequeña advertencia: ha habido una serie de iteraciones de React Router. Actualmente es v5, que es muy diferente a v2 y v3. Así que asegúrese de saber qué versión está utilizando.

## Installation

Instalar con `npm` o `yarn`:

```sh
yarn add react-router-dom
```

> **Note**: React Router tiene un paquete separado para React Native: `react-router-native`. Ambos paquetes dependen de `react-router` que se instala automáticamente.

Hay tres componentes principales que instalar:

- `<BrowserRouter />`: el componente principal principal
- `<Route />`: Una ruta o 'página' individual
- `<Link />`: Un componente auxiliar para cambiar la URL
- `<Switch />`: Un componente auxiliar para administrar URL ambiguas

Importarlos a tu proyecto de esta manera:

```js
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
```

## Un ejemplo simple

> **Note**: El componente `Router` tiene que tener solo un elemento JSX, por lo que siempre necesitas envolver tus rutas en un`<div>`.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Otras lecturas

- [React Router v4 Docs](https://reacttraining.com/react-router/web/example/basic)
- [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
