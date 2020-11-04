![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Params y Body Parser

Hay varias formas de enviar datos a un servidor. Echemos un vistazo a todos ellos aquí.

## Parámetros URL

Podemos pasar datos en la URL de una ruta usando un parámetro. Vemos estas cosas todo el tiempo. Por ejemplo, si llegó a la página de tu perfil de github, deberías ver tu nombre de usuario en la URL.

```txt
https://github.com/pataruco
```

La página de perfil es la misma para todos los usuarios, excepto que la información que muestra cambiará según la URL. Podemos imitar este comportamiento con Expresponses, usando un parámetro _URL_.

```js
router.get('/:username', usersController.show);
```

Aquí en el enrutador hemos creado un parámetro `username`, prefijando la palabra username en la URL con dos puntos. En lugar de hacer coincidir una ruta que tiene exactamente la palabra nombre de usuario, interpretará cualquier cosa después del `/` _como un_ nombre de usuario.

Express almacenará este nombre de usuario en un objeto llamado `params` en el objeto `request` del controlador.

```js
function showRoute(request, response) {
  console.log(request.params);

  User.findOne({ username: request.params.username }).then((user) =>
    response.json(user),
  );
}
```

Si navegamos ahora a http://localhost:4000/pataruco `request.params` se vería así:

```js
{
  username: 'pataruco';
}
```

Ahora podemos usar este nombre de usuario para recuperar el usuario relevante con el método `findOne`.

Un caso de uso más común es cuando usamos una ID en la URL para recuperar un registro específico en la base de datos, en una ruta SHOW, por ejemplo:

```js
router.route('/cheeses/:id').get(cheesesController.show);
```

```js
function showRoute(request, response) {
  Cheese.findById(request.params.id).then((cheese) => response.json(cheese));
}
```

En este caso, si tuviéramos que navegar a `/cheeses/5c59a677e3440f069cd0a220`, ` request.params` se vería así:

```js
{
  id: '5c59a677e3440f069cd0a220';
}
```

Luego, podemos usar esa identificación para recuperar el registro de _cheese_ relevante en la base de datos.

También puedes ver esto en acción en la API de Dark Sky. Para obtener el pronóstico para una ubicación específica, debemos realizar una solicitud GET para:

```
https://api.darksky.net/forecast/:key/:latlng
```

Donde `key` es su clave secreta y` latlng` es una latitud y longitud separadas por comas, por ejemplo:

```txt
https://api.darksky.net/forecast/a8a8aba4c0420ee0616b86a0ba2c64c7/37.8267,-122.4233
```

## Query string (Cadena de consulta)

También podemos enviar datos en la cadena de consulta. Una cadena de consulta es la sección de la URL que tiene el prefijo "?" Y nos permite enviar información en forma de pares propiedad/valor al servidor. Se usa más comúnmente cuando se realizan solicitudes GET para modificar la cantidad de datos que se devuelven.

Here is an example:

```
https://boohoo.co.uk/shoes/men?color=red&style=leisure
```

La cadena de consulta se ve así: `color=red&style=leisure`, y podría ser interpretada por un objeto JavaScript así:`{color: red, style: leisure}`. De hecho, las respuestas Express harán esto por nosotros y almacenarán el objeto creado en `request.query`.

```js
router.route('/cheeses').get(cheesesController.index);
```

```js
function indexRoute(request, response) {
  console.log(request.query);

  Cheese.find(request.query).then((cheeses) => response.json(cheeses));
}
```

Al pasar un objeto al método `find`, podemos limitar la respuesta a los quesos que coinciden con propiedades específicas.

Por ejemplo, `Cheese.find ({origin: 'France'})` solo devolverá quesos que tengan un origen en Francia. Dado que `request.query` será un objeto con las propiedades de la cadena de consulta, podemos pasar` request.query` directamente al método de búsqueda. Luego, podemos usar la cadena de consulta para devolver quesos de propiedades específicas.

## Body parser

Hasta ahora hemos mostrado cómo enviar datos en la URL. Sin embargo, es posible que esa no sea siempre la mejor forma de enviar datos. La URL solo puede contener una cierta cantidad de caracteres y, de todos modos, es probable que no desee enviar una contraseña en la URL.

Si queremos enviar JSON o datos de formulario al servidor, se dividirán en pequeños paquetes de datos binarios, se enviarán a través de Internet y luego se volverán a poner juntos en el servidor. Si bien podemos escribir código para hacer esto nosotros mismos, es mejor usar un módulo de terceros que esté bien probado y mantenido para hacer esto por nosotros.

El paquete _de facto_ para manejar este tipo de datos es Body Parser. Podemos instalarlo con npm o Yarn, luego configurarlo así:

```js
import express from 'express';
import bodyParser from 'body-parser';
import routes from './config/routes';

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(4000, () => console.log('Listening to port 4000'));
```

> **Nota** Hemos configurado Body Parser para manejar JSON en este momento. Hay diferentes configuraciones para los datos del formulario, consulte los documentos para obtener más información.

Observe que Body Parser debe cargarse _antes_ de nuestras rutas, ya que necesitaremos los datos dentro de los controladores, que están conectados a las rutas.

Con eso instalado, ahora podemos acceder a cualquier dato JSON dentro de nuestros controladores así:

```js
function createRoute(request, response) {
  console.log(request.body);

  Cheese.create(request.body)
    .then((cheese) => response.json(cheese))
    .catch((err) => response.status(422).json(err.errors));
}
```

Como puedes ver, los datos JSON se almacenan en `request.body`, como un objeto JavaScript. Ahora podemos usar este objeto como los datos necesarios para hacer el queso.

## Overview

| Type             | Stored on        | Example route  | Example URL              | Example data                         | Notes                         |
| :--------------- | :--------------- | :------------- | :----------------------- | :----------------------------------- | :---------------------------- |
| URL Parameter    | `request.params` | `/cheeses/:id` | `/cheeses/123`           | `{ id: '123' }`                      |                               |
| Query string     | `request.query`  | `/cheeses`     | `/cheeses?origin=France` | `{ origin: 'France' }`               |                               |
| requestuest body | `request.body`   | `/cheeses`     | `/cheeses`               | `{ name: 'Brie', origin: 'France' }` | requestuiresponse Body Parser |

## Further reading

- [Body Parser - npm](https://github.com/expressjs/body-parser)
- [Expresponses request.params and request.query - V School](https://coursework.vschool.io/express-params-and-query/)
