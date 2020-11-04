![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Implementar una aplicación MERN en Heroku y Netlify

> **Nota**: MERN son las siglas de Mongo, Express, React y Node

Heroku es una plataforma de alojamiento web y una canalización de implementación que utiliza git. Es gratis en su mayor parte, pero tiene bandas de uso, por lo que si su sitio recibe mucho tráfico, es posible que se te cobre.

## Configurando Heroku

1. Primero regístrate en [Heroku](https://heroku.com). Debes establecer su idioma en _Node.js_ y su posición en _student_. No es necesario que proporciones el nombre de la empresa.

2. Ahora deberías [descargar el comando de herramientas de Heroku](https://devcenter.heroku.com/articles/heroku-cli#download-and-install), que es una herramienta de línea de comandos para la implementación. Sigue las instrucciones de instalación con _Homebrew_.

3. Una vez que se ha instalado la CLI, debes iniciar sesión en heroku en la terminal:

   ```sh
   heroku login
   ```

   Se abrirá una ventana del navegador que te permitirá iniciar sesión. Una vez que hayas iniciado sesión a través del navegador, debería ver un mensaje de éxito **en la terminal**.

4. Navega hasta la raíz de tu proyecto MERN. Este debería ser un repositorio de git. Si no es así, debe inicializarlo con `git init`

5. Crea una aplicación Heroku con el siguiente comando:

   ```sh
   heroku create --region=eu project-name
   ```

> **Nota** reemplaza `project-name` con el nombre de tu proyecto. Esto pasará a formar parte de la URL

## Configurar tu aplicación para la implementación

- En tu _workspace_ de **server** instala las siguientes librerias:

  ```sh
  yarn add cors dotenv
  ```

- Agrega un archivo `.env` para almacenar tu número de puerto (y cualquier clave API):

  ```sh
  PORT=5000
  ```

- Asegúrate de que tu archivo `.env` esté cargado usando el paquete `dotenv`:

  ```js
  import dotenv from 'dotenv';
  dotenv.config();
  ```

- Actualiza el número de puerto para usar `process.env.PORT` en `index.js`:

  ```js
  server.listen(process.env.PORT, () =>
    console.log(`Running on port ${process.env.PORT}`),
  );
  ```

- Dile a tu servidor express que utilice el middleware **cors**

  ```js
  import cors from 'cors';
  server.use(cors());
  ```

- Agrega un script `start` a su `package.json`, esto será utilizado por Heroku para iniciar su aplicación:

  ```json
  // ...
  "scripts": {
    "start": "yarn workspace server start"
  }
  // ...
  ```

- Haz _commit_ de tu código

```sh
    git add
    git commit -m "Ready for deployment"
```

- Empuja tu codigo al repositorio remoto de heroku

  ```sh
  git push heroku master
  ```

- Una vez que tu código haya terminado de implementarse, abre tu aplicación con `heroku open`

- Si recibes un error de aplicación, verifique los registros en heroku con `heroku logs --tail`

## Añadiendo una base de datos

> **Nota**: A partir del 10 de noviembre del 2020 el _add-on_ para bases de datos MongoDB dejara de ser gratis y costará USD \$46 en su banda más barata 💸 👀, por esa razón utilizaremos otro proveedor

- Abre una cuenta gratis en [MongoDB Cloud](https://cloud.mongodb.com)
- Agrega tus datos y crea una organizacion/usuario
- Crea un cluster y elige como proveedor Google Cloud en Europa
- Espera (alrededor de 3 mins)
- Cuando el cluster haya sido instanciado ve a **Database Access**
- Crea un usuario y password (guardalos en un archivo aparte)
- Ve a **Custer** y alli haz clic en el botton **connect**
- Permite las conexiones de cualquier IP donde dice **Allow access anywhere**
- Elige el método de conexión **Connect your application**
- Copia la dirección que te dan, ejemplo

```sh
mongodb+srv://admin:<password>@prueba.qm7eq.mongodb.net/<dbname>?retryWrites=true&w=majority
```

- Sustituye los valores que estan en los paréntesis angulares `<password>` y `<dbname>` con los valores apropiados

- Configura variable de entorno para su base de datos local en `.env`:

  ```sh
  PORT=4000
  MONGODB_URI="mongodb+srv://admin:seieselmejor@prueba.qm7eq.mongodb.net/sei-es?retryWrites=true&w=majority"
  ```

> **Nota:** En este caso `password` es `seieselmejor` y el `dbname` `sei-es`

- Actualiza tu código para usar la nueva variable de entorno:

  ```js
  mongoose.connect(process.env.MONGODB_URI);
  ```

### Configurando el cliente

- Crea dos archivos `.env` en tu cliente:

  - `.env.development`
  - `.env.production`

- Crea un variable para React prefijando el nombre de la variable con `REACT_APP_`, y sustituye la dirección URL para peticiones a tu tu API con la dirección obtenida en la implementación de heroku en el archivo `.env.production`

  ```sh
  REACT_APP_SERVER_URL='https://hipster-name.herokuapp.com/forecast'
  ```

- Haz una compilacion de react para producción

  ```sh
  yarn workspace client build
  ```

- Haz el deploy a Netlify

  ```sh
  netlify deploy
  ```

- Elige la ruta de los archivos de compilacion de React `./client/build`
