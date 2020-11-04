![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Express Router

Express tiene enrutamiento integrado que nos permite asignar manejadores de solicitudes específicos a rutas específicas. Una ruta es un verbo combinado con una URL, por ejemplo:

```txt
GET /cheeses
PUT /cheeses/:id
POST /cheeses/:id/comments
```

## Rutas de ejemplo

Podemos manejar rutas específicas en el archivo del servidor principal, sin embargo, si queremos estructurar nuestro código base es una forma lógica, usando MVC por ejemplo, debemos crear un archivo de enrutador dedicado:

```js
import express from 'express';
import cheesesController from '..controllers/cheeses';

const router = express.Router();

router.get('/cheeses', cheesesController.index);
router.put('/cheeses/:id', cheesesController.update);
router.post('/cheeses/:id/comments', cheesesController.createComment);

export default router;
```

## Rutas RESTful

También podemos conectar varios manejadores a una sola URL usando el método `route`. Imagina un enrutador completamente RESTful:

```js
import express from 'express';
import cheesesController from '..controllers/cheeses';

const router = express.Router();

router
  .route('/cheeses')
  .get(cheesesController.index)
  .post(cheesesController.create);

router
  .route('/cheeses/:id')
  .get(cheesesController.show)
  .put(cheesesController.update)
  .delete(cheesesController.delete);

export default router;
```

Esto puede hacer que nuestro código sea un poco más ordenado y más fácil de leer.

## Prefijando rutas

Conectar nuestro enrutador al archivo del servidor principal es tan simple como:

```js
import express from 'express';
import routes from './config/routes';

app.use(routes);
```

También podemos prefijar las rutas así:

```js
app.use('/api', routes);
```

Todas las rutas en el enrutador comenzarán ahora con `/api`. Esto es particularmente útil si desea servir un front-end de React desde el servidor que también sirve a los endpoints de la API.

## Parametros URL

Podemos crear _parámetros_ en las URL usando dos puntos, así:

```js
router.route('/cheeses/:id').get(cheesesController.show);
```

Esto coincidirá con cualquier URL que comience con `/cheeses/` seguido de cualquier cosa. Todo lo que se encuentra donde está `:id` en la URL se almacenará como un parámetro en el objeto de solicitud en el controlador de solicitudes.

| path                         | URL                      | `req.params`                   |
| :--------------------------- | :----------------------- | :----------------------------- |
| `/cheeses/:id`               | `/cheeses/123`           | `{ id: '123' }`                |
| `/users/:username`           | `/users/mickyginger`     | `{ username: 'mickyginger' }`  |
| `/cheeses/:id/posts/:postId` | `/cheeses/123/posts/456` | `{ id: '123', postId: '456' }` |

Entonces podríamos usarlo en un controlador de solicitud de ruta SHOW:

```js
router.route('/cheeses/:id').get((req, res) => {
  Cheese.findById(req.params.id).then((cheese) => res.json(cheese));
});
```

## Otras lecturas

- [Routing - Express](https://expressjs.com/en/guide/routing.html)
- [Learn to Use the New Router in ExpressJS 4.0](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)
- [Express req.params and req.query](https://coursework.vschool.io/express-params-and-query/)
