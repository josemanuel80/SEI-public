![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Intro a Express

[Express.js](http://expressjs.com/) se describe a sí mismo como "un marco de aplicación web de node.js mínimo y flexible".

## ¿Qué es un marco web?

Cuando desees crear un sitio web desde cero, hay tareas comunes que deberá realizar. Los marcos ocultan el código estándar y de infraestructura relacionado con el manejo de solicitudes y respuestas HTTP. La cantidad oculta depende del marco.

Express es un marco web mínimo y si has usado [Sinatra](http://www.sinatrarb.com/) en el mundo Ruby, mucho de esto le resultará familiar.

Como cualquier abstracción, Express oculta partes difíciles de la creación de un marco web y dice "no se preocupe, no es necesario que comprenda esta parte". Hace cosas por ti para que no tengas que preocuparte. En otras palabras, es mágico.

También es buena magia. Mucha gente usa Express, incluidos MySpace, Klout y Netflix.

## Instalación de Express

Digamos que queremos escribir la aplicación "Hello World" con Express.

Primero necesitamos instalar `express`. Hacemos esto usando `yarn` que es un administrador de paquetes de Node.

Primero usemos el comando `yarn init` para crear un nuevo archivo` package.json`.

```bash
$ yarn init
```

Usemos esta información:

- **name:** intro-to-express
- **entry:** point: app.js

Para el resto, puede presionar enter. A continuación, instale express con

```bash
$ yarn add express
```

Ahora debería ver un nuevo directorio llamado `node_modules`. Se agregará este paquete al archivo package.json, echa un vistazo:

```json
"dependencies": {
  "express": "^4.13.4"
}
```

A continuación, creemos un nuevo archivo llamado `app.js`:

```bash
$ touch app.js
```

Una vez que hayas hecho eso, la aplicación es bastante similar.

Primero, importamos Express.

```javascript
// Require the stuff we need
import express from 'express';
```

Luego creamos una variable llamada `app` que es una invocación de `express()`.

```javascript
// Require the stuff we need
import express from 'express';

// Build the app
const app = express();

// This is similar to Node.js' http module
// const app = http.createServer()
```

Luego agregamos algo de middleware, es solo una función. Pasamos esto a `app.use`.

```javascript
// Require the stuff we need
import express from 'express';

// Build the app
const app = express();

// Add some middleware
app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});
```

Luego creamos el servidor y comenzamos a escuchar las solicitudes entrantes en un puerto específico.

```javascript
// Require the stuff we need
var express = require('express');

// Build the app
var app = express();

// Add some middleware
app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

// Start it up!
app.listen(4000, () => console.log('Express is up and running'));
```

Ejecutemos este código con:

```bash
$ node app.js
```

Ahora deberías ver "¡Hola mundo!".

## ¿Qué es el middleware?

Cada pieza de middleware es un controlador de solicitudes. Comienza mirando el primer controlador de solicitudes, luego mira el siguiente, luego el siguiente, y así sucesivamente.

Así es como se ve básicamente el middleware:

```javascript
function myFunMiddleware(request, response, next) {
  // Do stuff with the request and response.
  // When we're all done, call next() to defer to the next middleware.
  next();
}
```

## Middleware de registro básico

Cuando iniciamos un servidor, comenzamos en el middleware superior y avanzamos hasta el final. Entonces, si quisiéramos agregar un registro simple a nuestra aplicación, ¡podríamos hacerlo!

```js
import express from 'express';
const app = express();

// Logging middleware
app.use((req, res, next) => {
  console.log(`In comes a ${req.method} request to ${req.url}`);
  next();
});

// Send "hello world"
app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

// Start it up!
app.listen(4000, () => console.log('Express is up and running'));
```

Si ejecuta esta aplicación y visita `http: // localhost: 4000`, verá que su servidor está registrando algunas cosas y verá su página.

```sh
Express is up and running
In comes a GET request to /
```

## Morgan

Si bien puede escribir el suyo por completo, hay una tonelada de middleware por ahí. Eliminemos nuestro registrador personalizado y usemos [Morgan](https://github.com/expressjs/morgan), un buen registrador para Express.

```bash
$ yarn add morgan
```

and give this a try:

```js
import express from 'express';
const morgan = require('morgan');
const app = express();

app.use(morgan());
// Fun fact: morgan() returns a function.

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

app.listen(4000, () => console.log('Express is up and running'));
```

Visita `http://localhost:4000` y verás algunos registros. Gracias, Morgan.

## Una pequeña aplicación con Express

Uno podría imaginarse uniendo algún middleware para construir una aplicación. Quizás lo harías así:

```javascript
import express from 'express';
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

// Homepage
app.use((req, res, next) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the homepage!');
    // The middleware stops here.
  } else {
    next();
  }
});

// About page
app.use((req, res, next) => {
  if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the about page!');
    // The middleware stops here.
  } else {
    next();
  }
});

// 404'd!
app.use((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 error!');
});

app.listen(4000, () => console.log('Express is up and running'));
```

Pruébalo visitando: `http://localhost:4000 /`, `http://localhost:4000/about` y` http://localhost:4000/cat` (para el 404).

Sin embargo ... "¡Esto es feo! No me gusta", dices.

La gente de Express es inteligente. Saben que esta fealdad no servirá. Son gente inteligente.

## Enrutamiento

Express nos ofrece algo llamado "enrutamiento" que nos permite crear middleware para URL específicas y verbos HTTP:

```javascript
import express from 'express';
const app = express();

app.all('*', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
});

app.get('/', (req, res) => {
  res.end('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.end('Welcome to the about page!');
});

app.get('*', (req, res) => {
  res.end('404!');
});

app.listen(4000, () => console.log('Express is up and running'));
```

Las tres llamadas a `app.get` son el sistema de enrutamiento de Express. También podrían ser `app.post`, que responden a solicitudes POST, o PUT, o cualquiera de los verbos HTTP.

El primer argumento es una ruta, como `/about` o `/`. El segundo argumento es un controlador de solicitudes similar a lo que hemos visto antes. Para citar [la documentación de Express](http://expressjs.com/api.html#app.VERB):

> [Estos manejadores de solicitudes] se comportan como middleware, con la única excepción de que estas devoluciones de llamada pueden invocar `siguiente ('ruta')` para evitar las devoluciones de llamada de ruta restantes. Este mecanismo se puede utilizar para realizar las condiciones previas en una ruta y luego pasar el control a las rutas posteriores cuando no hay razón para continuar con la ruta coincidente.

En resumen: son básicamente middleware como hemos visto antes. Son solo funciones, como antes.

## Manejo de datos del cliente

Los datos enviados desde el cliente al servidor se dividen en trozos de datos binarios antes de enviarse a través de Internet. Cada fragmento puede tomar una ruta diferente al servidor, por lo que necesitamos algo para volver a unir esos fragmentos y convertirlos en el tipo de datos correcto.

Podríamos hacer esto nosotros mismos, pero probablemente sea mejor usar un paquete de terceros. La solución _de facto_ es _body-parser_. Podemos instalarlo así:

```js
import express from 'express';
import bodyParser from 'body-parser';

// we can set bodyParser to handle a number of different types of data
// in this case we are setting it up to handle JSON
express.use(bodyParser.json());
```

## Manejo avanzado de solicitudes

Express aumenta los objetos de solicitud y respuesta que se le pasan en cada controlador de solicitudes. [Los documentos de la API](http://expressjs.com/api.html) explican todo, pero veamos un par de ejemplos.

Una sutileza que te dan es un método de "redireccionamiento". Aquí hay unos ejemplos:

```js
app.get('/go', (req, res) => {
  res.redirect('/');
});

app.get('/google', (req, res) => {
  res.redirect('http://www.google.com/');
});
```

**Nota:** Deberá comentar para evitar el error "No se pueden configurar los encabezados después de enviarlos". Este error significa que ya está en el estado Body o Finished, pero alguna función intentó establecer un encabezado o statusCode.

```js
// app.all('*', (req, res, next) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   next()
// })
```

## Archivos estáticos

Si queremos servir archivos estáticos como archivos css o js, necesitamos configurar nuestra aplicación para hacer esto.

Primero, creemos una nueva carpeta; la convención es que la carpeta debe llamarse `public`:

```bash
$ mkdir public
$ mkdir public/css
$ touch public/css/style.css
```

Luego, dentro de este archivo css, agreguemos:

```css
body {
  background: red;
}
```

Ahora solicitemos ese archivo en nuestro index.html:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Intro to Express</title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body></body>
</html>
```

Luego, en `app.js` necesitamos configurar algo de [middleware](http://expressjs.com/en/starter/static-files.html).

```js
// Setup public folder to serve static files
app.use(express.static(`${__dirname}/public`));
```

Ahora, si vuelve a cargar la aplicación, ¡debería ver que el body es rojo!

## Nodemon

Es molesto tener que detener e iniciar el servidor cada vez que cambia un archivo, ¿no es así?

Hay un par de opciones diferentes para solucionar esto, pero una muy buena es [nodemon](http://nodemon.io/).

Install with:

```bash
yarn global add nodemon
```

Ahora, en lugar de ejecutar el código con `node`, usa `nodemon`:

```bash
nodemon app.js
```

¡Ahora puede dejar el servidor en funcionamiento!

## Resumen

Hemos hecho bastante aquí. Hemos mirado:

- Cómo configurar Express
- Cómo crear acciones de ruta
- Cómo configurar Express para mostrar vistas
- Cómo configurar Express para servir archivos estáticos

No se preocupe si se siente un poco abrumado, ¡usaremos mucho Express durante este curso!

## Lecturas adicionales

- [Connect middleware](http://stephensugden.com/middleware_guide/)
- [Express 4](http://evanhahn.com/understanding-express/)
- [Body Parser](https://github.com/expressjs/body-parser)
