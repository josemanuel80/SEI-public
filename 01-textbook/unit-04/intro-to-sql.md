## ![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Intro a SQL

<!-- # SQL Setup, Insert, Update and Delete -->

## Preparación

Vamos a instalar [Postgresql](https://www.postgresql.org/download/) en nuestra computadora:

### macOS

- Instala `postgresql`

  ```sh
  brew install postgresql
  ```

- Para encender el servidor de Postgresql 🔛

  ```sh
  brew services start postgresql
  ```

- Para apagar el servidor de Postgresql 🛑

  ```sh
  brew services stop postgresql
  ```

### Linux y PC (WSL)

- Instala `postgresql`

  ```sh
  sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
  wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
  sudo apt-get update
  sudo apt-get -y install postgresql
  ```

- Para encender el servidor de Postgresql 🔛

  ```sh
  sudo service postgresql start
  ```

- Para apagar el servidor de Postgresql 🛑

  ```sh
  sudo service postgresql stop
  ```

- Crea un usuario llamado `postgres`

  ```sh
  sudo -u postgres -i
  ```

- Tu terminal cambiará
- Entra al terminal de Postgresql

  ```sh
  psql
  ```

- Dentro del terminal de Postgresql, crea un usuario que se llame igual que tu usuario de Linux

```sql
CREATE ROLE <nombre de usuario> WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD '1234';
```

- Sal del terminal de Postgresql

  ```psql
  exit
  ```

## ¿Qué es SQL?

Repasemos: en su forma más simple, una base de datos relacional es un mecanismo para almacenar y recuperar datos en forma tabular. ¡Las hojas de cálculo son una buena analogía!, Pero, ¿cómo interactuamos con nuestra base de datos: insertar datos, actualizar datos, recuperar datos y eliminar datos? ¡Ahí es donde entra SQL!

SQL significa _Structured Query Language_, y es un lenguaje utilizado y adaptado universalmente para interactuar con bases de datos relacionales. Cuando usas un cliente SQL y se conecta a una base de datos relacional que contiene tablas con datos, con comandos SQL puedes hacer lo siguiente:

- Insertar datos
- Consultar o recuperar datos
- Actualización o eliminación de datos
- Creación de nuevas tablas y bases de datos completas.
- Controlar los permisos de quién puede tener acceso a los datos.

Ten en cuenta que todas estas acciones dependen de lo que el administrador de la base de datos establezca para los permisos de usuario: por ejemplo, muchas veces como analista solo tendrás acceso a la recuperación de datos de la empresa; pero como desarrollador, podrías tener acceso a todos estos comandos y estar a cargo de configurar los permisos de la base de datos.

## ¿Por qué es importante SQL?

Bueno, una base de datos es solo un repositorio para almacenar datos y necesita usar sistemas que dicten cómo se almacenarán y como se puede interactuar con los datos usando un cliente. A estos sistemas los llamamos "Sistemas de gestión de bases de datos" y vienen en muchas formas:

- MySQL
- SQLite
- PostgreSQL (¡el que usaremos en clase!)
- MariaDB

Todos estos sistemas de gestión utilizan SQL (o alguna adaptación del mismo) como lenguaje para gestionar los datos en el sistema.

## Conexión y creación de base de datos

¡Hagamos una base de datos! Primero, asegúrate de tener el servidor de PostgreSQL encendido:

### macOS

```sh
brew services start postgresql
```

### Linux y PC (WSL)

```sh
sudo service postgresql start
```

Una vez que lo hagas, abre tu terminal y escribe:

```sh
psql
```

¡Excelente! Has ingresado el equivalente PostgreSQL de Mongo: ahora, puedes ejecutar comandos PSQL o la versión de SQL de PostgreSQL.

Usemos estos comandos, pero antes de que podamos, debemos crear una base de datos. Llamémoslo `bookstore`:

```sql
CREATE DATABASE bookstore;
```

¡El punto y coma es importante (**`;`**)! Asegúrate de terminar siempre tus consultas y comandos SQL con punto y coma.

Ahora usemos esa base de datos que acabamos de crear:

## Creando una tabla

Ahora que tenemos una base de datos, creemos una tabla

```sql
CREATE TABLE books (
  "ISBN" VARCHAR(14) PRIMARY KEY,
  title CHAR(40) NOT NULL,
  author_id INT,
  genre CHAR(20)
);
```

Observa las diferentes partes de estos comandos:

```sql
CREATE TABLE bookstore ( #
```

Esto inicia la creación de nuestra tabla, le dice a PostgreSQL que cree una tabla llamada "bookstore".

```sql
   "ISBN" VARCHAR(14) PRIMARY KEY,
   title CHAR(40) NOT NULL,
```

Luego, cada línea después denota una nueva columna que vamos a crear para esta tabla:

- Cómo se llamará la columna
- El tipo de datos
- Si es una clave principal (`PRIMARY KEY`)
- Si cuando se agregan datos, puede permitir datos sin valores (`NULL`)

En este caso, se debe ingresar el _ISBN_ y _title_, pero _genre_ es opcional.

### ¿Por qué el ISBN está entre comillas?

Por defecto, _psql_ forzará a que todas las columnas sean minúsculas, por lo que estamos forzando el uso de mayúsculas cuando colocamos el nombre entre comillas.

## Creación de tablas e inserción de datos

Podríamos poner el nombre del autor en la tabla de libros, pero para cuando nuestra tienda esté llena, tendremos cientos de "Roald Dahl" y "Oscar Wilde" dando vueltas en nuestra base de datos. Eso es mal diseño. El objetivo es no tener datos repetidos en nuestra base de datos.

Entonces, en cambio, creemos una nueva tabla para autores. Necesitaremos los siguientes campos:

- Una identificación de incremento automático que no puede estar en blanco.
- Un campo de nombre que no puede estar en blanco.
- Un campo opcional para las iniciales del segundo nombre.
- Un campo de apellido que no puede estar en blanco.

### Una identificación de incremento automático (`id`)

En lugar de tener que realizar un seguimiento de los identificadores de autor a medida que ingresan a la base de datos, es mucho mejor si dejamos que Postgres lo haga por nosotros. Podemos hacer esto con el tipo de datos `SERIAL`.

Creemos la nueva tabla juntos en la línea de comando.

```sql
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  firstname CHAR(15) NOT NULL,
  initials CHAR(15),
  lastname CHAR(15) NOT NULL
);
```

> **Nota** En realidad, `SERIAL` no es un tipo de dato, es más como un nombre de método que le dice a la base de datos que desea que el campo sea un número entero que se incrementa automáticamente a partir de 1. Más información aquí: [How to Define an Auto Increment Primary Key in PostgreSQL](https://chartio.com/resources/tutorials/how-to-define-an-auto-increment-primary-key-in-postgresql)

## Insertar datos en nuestra tabla

Vamos a insertar 4 autores en nuestra tabla de autores:

- George R R Martin
- Terry Pratchett
- J R R Tolkien
- Ursula Le Guin

Hagamos el primero juntos:

```sql
INSERT INTO authors (firstname, initials, lastname) VALUES ('George', 'R. R.', 'Martin');
```

## Insertar datos

Bien, ahora continua y agrega los otros autores a la base de datos. Agrégalos uno a la vez para que te acostumbres a la sintaxis.

Si comete un error **antes** de presionar enter, puede cancelar el comando actual con `ctrl + c`.

## Usando un archivo para ingresar datos

Como te has dado cuenta, escribir comandos SQL directamente en la línea de comandos no es ideal. Los errores ortográficos y de sintaxis pueden hacer que todo el proceso sea bastante doloroso. Creemos un archivo `bookstore.sql` donde escribiremos todo nuestro sql.

### Drop table?

El comando `DROP` se puede utilizar para eliminar tablas y bases de datos. La declaración `IF EXISTS` primero verifica si la entidad existe antes de intentar borrarla. En este caso, si las tablas no existen, psql no intentará `DROP`.

### `author_id`?

Para vincular al autor con el libro, necesitamos almacenar una referencia al autor en el registro del libro. Algo breve y único. La identificación del autor es perfecta.

Ahora podemos leer en el archivo desde el shell `psql` usando el siguiente comando:

```psql
\i bookstore.sql
```

## ¿Qué hay en nuestra base de datos?

Entonces, ahora que tenemos estos datos guardados, vamos a necesitar acceder a ellos en algún momento.

La declaración `SELECT` de PostgreSQL se utiliza para obtener los datos de una tabla de base de datos y devuelve datos en forma de tabla de resultados.

Estas tablas de resultados se denominan conjuntos de resultados. Obtengamos algunos datos de nuestras tablas.

```sql
SELECT * FROM authors;
```

```psql
 id |    firstname    |    initials     |    lastname
----+-----------------+-----------------+-----------------
  1 | George          | R. R.           | Martin
  2 | Terry           |                 | Pratchett
  3 | J.              | R. R            | Tolkien
  4 | Ursula          |                 | Le Guin
(4 rows)
```

El `*` en la consulta `SELECT` significa obtener todas las columnas de la tabla.

Si solo queremos recuperar algunas de las columnas, podemos especificarlas así:

```sql
SELECT firstname, lastname FROM authors;
```

```psql
    firstname    |    lastname
-----------------+-----------------
 George          | Martin
 Terry           | Pratchett
 J.              | Tolkien
 Ursula          | Le Guin
(4 rows)
```

### Cada vez más específico

Al igual que JavaScript, para seleccionar datos más específicos usamos operadores de comparación y booleanos.

- Quiero todos los libros que tengan `1` como identificación de autor

```sql
SELECT * FROM books WHERE author_id = 1;
```

```psql

      ISBN      |                  title                   | author_id |        genre
----------------+------------------------------------------+-----------+----------------------
 978-0007447848 | A Storm of Swords 1: Steel & Snow        |         1 | Fantasy
 978-0007447831 | A Clash of Kings                         |         1 | Fantasy
 978-0007447855 | A Storm of Swords 2: Blood & Gold        |         1 | Fantasy
 978-0007582235 | A Feast for Crows                        |         1 | Fantasy
 978-0007548231 | A Game of Thrones                        |         1 | Fantasy
(5 rows)
```

- Los títulos de todos los libros en orden alfabético.

```sql
SELECT title FROM books ORDER BY title;
```

```psql
                  title
------------------------------------------
 A Clash of Kings
 A Feast for Crows

 ...

 The Tombs of Atuan
 The Two Towers
(17 rows)
```

- ¿Qué tal invertido?

```sql
SELECT title FROM books ORDER BY title DESC;
```

```psql
                  title
------------------------------------------
 The Two Towers
 The Tombs of Atuan

 ...

 A Feast for Crows
 A Clash of Kings
(17 rows)
```

- Todos los libros que tienen la palabra **of** en el título

```sql
SELECT * FROM books WHERE title LIKE '% of %';
```

```psql
      ISBN      |                  title                   | author_id |        genre
----------------+------------------------------------------+-----------+----------------------
 978-0007488353 | The Return of the King                   |         3 | Fantasy
 978-0007447848 | A Storm of Swords 1: Steel & Snow        |         1 | Fantasy
 978-1442459915 | The Tombs of Atuan                       |           | Fantasy
 978-0007447831 | A Clash of Kings                         |         1 | Fantasy
 978-0007488315 | The Fellowship of the Ring               |         3 | Fantasy
 978-0007447855 | A Storm of Swords 2: Blood & Gold        |         1 | Fantasy
 978-0007548231 | A Game of Thrones                        |         1 | Fantasy
 978-0552166591 | The Colour of Magic                      |         2 | Fantasy
 978-0141354910 | A Wizard of Earthsea                     |           | Fantasy
(9 rows)
```

## Actualizaciones a nuestra base de datos

Hasta ahora hemos analizado la creación y lectura de datos. Tomemos un momento para actualizar y eliminar algunas cosas.

El comando de actualización es bastante sencillo, pero ten cuidado: **¡no se puede deshacer!** Cuando trabajamos con bases de datos en el mundo real, es _imperativo_ que primero hagamos una copia de seguridad de nuestros datos.

Reunamos a Úrsula con sus libros:

```sql
UPDATE books SET author_id = 4 WHERE author_id IS NULL;
```

Observa la cláusula `WHERE`, es realmente importante. Si la dejamos fuera, ¡se realizan actualizaciones en **todos los registros de la tabla!**

### Borrando

Eliminemos algunas cosas.

```sql
DELETE FROM books WHERE author_id = 1;
```

Es demasiado fácil. ¡Por eso debemos **siempre** hacer una copia de seguridad primero!

¿Qué pasa si queremos eliminar todos los libros de Tolkien, pero no conocemos su "id"? No podemos hacer `JOIN`, pero podemos hacer esto:

```sql
DELETE from BOOKS WHERE author_id = (SELECT id FROM authors WHERE lastname = 'Tolkien');
```

## Comandos comunes de Postgresql

Aquí hay una lista de algunos comandos comunes de Postgresql que puede necesitar:

- `\c` - conectar a una base de datos
- `\l` - listar base de datos
- `\d`
- `\d+`
- `\q`
- `\h` - help
