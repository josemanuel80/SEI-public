# React Routing lab

Este es el código de dos dias de code along para escribir una aplicacion de react que escribe, lee, actualiza y borra un recurso (`student`)

Las convenciones seguidas en los URL de esta aplicación siguien una arquitectura [REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional)

## URL's

| ¿Qué hace?                          | URL en el cliente | Petición (_Request al servidor_)          | CRUD       |
| ----------------------------------- | ----------------- | ----------------------------------------- | ---------- |
| Lista a todos los estudiantes       | `/students`       | `GET` `https://<URLBASE>/students`        | **Read**   |
| Muestra a un estudiante estudiantes | `/students/:id`   | `GET` `https://<URLBASE>/students/:id`    | **Read**   |
| Edita valores de un estudiante      | `/students/:id`   | `PUT` `https://<URLBASE>/students/:id`    | **Update** |
| Crea un nuevo estudiante            | `/student/new`    | `POST` `https://<URLBASE>/students`       | **Create** |
| Borra un estudiante                 | NA                | `DELETE` `https://<URLBASE>/students/:id` | **Delete** |

## Instalación

1. Desde la raíz de esta aplicación instala las dependencias:
   ```sh
   yarn
   ```

## Ejecución

Este proyecto fue inicializado usando `create-react-app`, por lo tanto los siguientes scritps estan disponibles para ti:

- `yarn start` para inicializar un servidor local y compilador
- `yarn build` para compilar en HTML, CSS y JavaScript dentro de un directorio llamado **build**

## Peticiones al API

Este es un recurso didáctico que utiliza un servicio que produce un API para hacer prototipos. El servicio se llama [crudcrud](https://crudcrud.com/) y tiene limitaciones en numero de peticiones, por tal razon cuando visites este proyecto en el futuro (después del 13 de diciembre del 2020) debes hacer lo siguiente:

- Ve a la página Web de [crudcrud](https://crudcrud.com/)
- Toma el valor de identicacion unico que muestra, ejemplo `64f80fccb0c94730ace48b5ed8fd9e5b`
- Dirigite al archivo [`api`](./src/lib/api.js) dentro de la carpeta **lib**
- Cambia el valor que ves en por el valor que tomas en crud:

```js
// Línea 2
const UNIQUE_RESOURCE = '64f80fccb0c94730ace48b5ed8fd9e5b';
```

- Utilizando la aplicación de escritorio [Postman](https://www.postman.com/), haz peticiones que creen nuevos `students`, ejemplo:

- `POST` `https://crudcrud.com/api/64f80fccb0c94730ace48b5ed8fd9e5b/students` donde el payload es JSON

> **Nota** este sería la petición en [cURL](https://en.wikipedia.org/wiki/CURL) por línea de comando

```sh
curl --location --request POST 'https://crudcrud.com/api/64f80fccb0c94730ace48b5ed8fd9e5b/students' \
--header 'Content-Type: application/json' \
--data-raw '  {
    "name": "Gabriel Goiri",
    "location": "United Kingdom",
    "githubUsername": "gaboTheKing"
  }'
```
