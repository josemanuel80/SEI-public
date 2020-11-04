![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Monorepo

> O cómo colocar React sobre mi servidor express 😎

## ¿Qué es?

Es una práctica en el desarrollo de software que permite a varios paquetes (módulos) ser interdependientes

## ¿Cómo crear uno desde cero?

Usando `yarn` como manejador de paquetes y `lerna` es muy fácil. Para el siguiente ejercicio tomaremos un servidor API creado por nosotros mismos y le crearemos un cliente en React

1. En `development` crea un directorio, (para este ejemplo el directorio lo llamaremos monorepo) y navega dentro de él

   ```sh
   mkdir monorepo
   cd monorepo
   ```

2. Crea un manifiesto de node y contesta todas las preguntas

   ```sh
   yarn init
   ```

3. Instala `lerna` como una dependencia de desarrollo

   ```sh
   yarn add lerna -D
   ```

4. Copia y pega cualquier aplicacion de servidor express que hayas hecho en clase y pégala adentro del directorio raíz `monorepo` (para este ejemplo usaremos el proyecto creado en clase llamado [cuestion-de-tiempo](https://git.generalassemb.ly/sei-es/01-classwork/tree/master/week-08/thursday/morning/cuestion-de-tiempo))

   ```sh
   cp -R ~/development/cuestion-de-tiempo .
   ```

5. Cambia el nombre del directorio **cuestion-de-tiempo** a **server**

   ```sh
   mv cuestion-de-tiempo server
   ```

6. Borra el directorio `node_modules` del paquete server

   ```sh
   rm -rf ./server/node_modules
   ```

7. Abre tu editor de texto y en el manifiesto de paquetes (`package.json`) del directorio raíz agrega las siguiente propiedades:

   ```json
   // monorepo/package.json
   // ...
     "workspaces": [
       "server"
     ],
     "private": true
   // ...
   ```

8. En tu editor de text, abre el manifiesto de paquetes (`package.json`) del directorio `server` modifica el valor de la propiedad `"name"` la siguiente propiedad a `server`:

   ```json
   // monorepo/server/package.json
   // ...
     "name": "server" // Antes era cuestion-de-tiempo
   // ...
   ```

9. Crea en el directorio raiz un archivo llamado `lerna.json` y agrega lo siguiente:

   ```json
   // monorepo/lerna.json
   {
     "lerna": "3.22.1", // Coloca la version de lerna instalada
     "npmClient": "yarn",
     "packages": ["server"], // Coloco los paquetes internos
     "useWorkspaces": true,
     "version": "1.0.0"
   }
   ```

10. Instala React usando `create-react-app` en un directorio llamado **cliente**

    ```sh
    npx create-react-app client
    ```

11. Borra el directorio `node_modules` del paquete client

    ```sh
    rm -rf ./client/node_modules
    ```

12. Agrega el paquete **client** a los manifiestos del directorio raíz `package.json` y `lerna.json`

    ```json
    // monorepo/lerna.json
    {
      "lerna": "3.22.1", // Coloca la version de lerna instalada
      "npmClient": "yarn",
      "packages": ["server", "client"], // Antes era solo server (paso 9)
      "useWorkspaces": true,
      "version": "1.0.0"
    }
    ```

    ```json
    // monorepo/package.json
    // ...
      "workspaces": [
        "server",
        "client"
      ],
      "private": true
    // ...
    ```

13. Revisa el puerto en que el servidor express corre (en el caso de este ejemplo corre en **5000**)

14. En tu editor de texto, abre el manifiesto de paquetes (`package.json`) del directorio `cliente` y agrega la propiedad `"proxy"` con el valor del la direccion (host y port) del servidor

    ```json
    // monorepo/client/package.json
    // ...
      "proxy": "http://localhost:5000/"
    // ...
    ```

15. Ahora puedes correr el servidor API y el servidor de desarrollo local de React en dos pestañas distintas del terminal:

    - Para el servidor API

      ```sh
      yarn workspace server start
      ```

    - Para el servidor de desarrollo de React

      ```sh
      yarn workspace client start
      ```

Ahora desde tu client en react puedes hacer peticiones al servidor api tan sólo dando una ruta relativa, por ejemplo:

```js
export const getWeatherData = async (location) => {
  const response = await fetch(`/forecast?city=${location}`);
  // En vez de
  // const response = await fetch(`http:/localhost:5000/forecast?city=${location}`);
  const data = await response.json();
  const { daily: weatherData } = data;
  return weatherData;
};
```

16. 🚀

## Más lecturas

- [Wikipedia Monorepo](https://medium.freecodecamp.org/simplified-explanation-to-mvc-5d307796df30)
- [Monorepos, lifelong learning and ways of working ](https://blog.red-badger.com/monorepos-lifelong-learning-and-ways-of-working-heres-what-our-tech-director-viktor-has-to-say)
