## ![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Intro al modelado de datos relacionales

## ¿Qué son las bases de datos?

Una base de datos es un lugar donde la información se almacena en un disco duro, o se distribuye en varios discos duros, en una computadora en algún lugar del mundo.

Al igual que hemos estado creando y almacenando datos, aquí y allá, una base de datos representa una colección de datos individuales almacenados de una manera altamente estructurada y con capacidad de búsqueda; representan un modelo de la realidad, por eso los llamamos modelos en **MVC**.

Dentro de una base de datos, realizamos acciones básicas como crear, leer, actualizar y destruir datos (**CRUD**)

SQL significa Structured Query Language, y es un lenguaje que se usa para administrar y obtener información de las que se consideran bases de datos "relacionales".

Los llamamos "relacionales" porque diferentes modelos, o piezas de datos, se pueden vincular a otros modelos, también conocidos como "relacionados". La base de datos relacional almacena los datos en una "tabla", así que piense en ello como una hoja de cálculo. La tabla contiene todos los datos de un modelo, mientras que las columnas definen qué atributos tiene ese modelo; a menudo llamamos a las columnas "atributos" o "campos". Una fila es una instancia (¡recuerdas la instanciación de objetos con clases en JavaScript!) Como una copia única del plano que es nuestro modelo, a menudo llamado registro.

![relational db](https://cloud.githubusercontent.com/assets/25366/8589355/2646c588-25ca-11e5-9f2d-3d3afe8b7817.png)

## Dibujemos

Digamos que estamos creando una aplicación para una biblioteca y miramos cómo se verían algunas tablas (por ejemplo, ¿qué información o atributos se asociarían con cada tabla?)

- ¿Cómo sería la tabla para un libro?
- ¿Cómo sería la tabla para un autor?
- ¿Cómo sería la tabla de una categoría?

Mira, aquí es cuando empezamos a ver cómo se forman las relaciones. Puedes imaginar que se almacenan datos duplicados de forma natural, especialmente cuando un autor tiene varios libros, por ejemplo. ¡Eso es una pérdida de espacio! Entonces, hablemos sobre cómo podemos conectar estas tablas, de esta manera, no tenemos toneladas de datos duplicados por todas partes.

## Relaciones

> ![crows foot notation cheat sheet](http://www.vivekmchawla.com/content/images/2013/Dec/ERD_Relationship_Symbols_Quick_Reference-1.png)

Las relaciones ocurren cuando comenzamos a ver múltiples datos duplicados o cuando un objeto necesita "conectarse" a otro objeto.

Hay 3 tipos diferentes de relacion:

### One to One (1-1)

La relación uno a uno (1-1) se define como la relación entre dos tablas donde ambas tablas deben asociarse entre sí en función de una sola fila coincidente. Esta relación se puede crear utilizando restricciones de clave externa única-clave principal (_Primary key-Unique foreign key_)

- No se usa con frecuencia, pero es importante saber que es una opción
- Imagina una tabla de biblioteca **tiene una** (`has_one`) ubicación, y una ubicación **pertenece a** (`belongs_to`) una biblioteca específica, esta configuración nos permite buscar únicamente por ubicación y ver la biblioteca conectada
- A menudo, en situaciones como esa, puede hacer que la ubicación sea un atributo de la biblioteca, pero cuando una ubicación tiene, por ejemplo, varios campos (dirección 1, dirección 2, estado, código postal, etc.), podría tener sentido crea otra tabla para direcciones y configura una relación `has_one`

Con la relación uno a uno en SQL, por ejemplo, una persona solo puede tener un pasaporte.

```sql
CREATE TABLE library (
  library_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
);

CREATE TABLE location (
  location_id INT PRIMARY KEY,
  address VARCHAR(255),
  library_id INT UNIQUE REFERENCES library(library_id)
);

```

### One to Many (1-M)

La relación One to Many (1-M) se define como una relación entre dos tablas en la que una fila de una tabla puede tener varias filas coincidentes en otra tabla. Esta relación se puede crear utilizando la relación de clave principal-clave externa.

En la relación One to Many (1-M), por ejemplo, un libro puede tener varios autores.

- el tipo más común de relación de base de datos
- un autor tiene muchos (`has_many`) libros, pero un libro `belongs_to` solo un autor

```sql
CREATE TABLE book (
  book_id INT PRIMARY KEY,
  name VARCHAR(255),
  "ISBN" VARCHAR(255)
);

CREATE TABLE author (
  author_id INT PRIMARY KEY,
  fullname VARCHAR(255),
  book_id INT REFERENCES book(book_id)
);
```

### Many to Many (M-M)

- también muy frecuente
- un libro probablemente "tiene muchas" (`has_many`) categorías, y una categoría también probablemente "tiene muchos" (`has_many`) libros

```sql
CREATE TABLE book_category (
  book_id int NOT NULL,
  category_id int NOT NULL,
  PRIMARY KEY (book_id, category_id),
  FOREIGN KEY (category_id) REFERENCES category(category_id) ON UPDATE CASCADE,
  FOREIGN KEY (book_id) REFERENCES book(book_id) ON UPDATE CASCADE
);
```
