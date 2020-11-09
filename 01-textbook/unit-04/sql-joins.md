![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# SQL Joins

Hay varios tipos de unión (`JOIN`) que podemos hacer en una base de datos relacional:

- `INNER JOIN`
- `LEFT JOIN`
- `RIGHT JOIN`
- `FULL JOIN`

Antes de analizarlos en detalle, establezcamos un conjunto de datos con el que trabajaremos y las relaciones entre ellos. Para este ejemplo usaremos una librería:

- Un libro pertenece a **un** autor
- Un autor puede tener **muchos** libros

```sql
-- create authors table
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  firstname CHAR(15) NOT NULL,
  initials CHAR(15),
  lastname CHAR(15) NOT NULL
);

-- create books table
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title CHAR(40) NOT NULL,
  author_id INT,
  genre CHAR(20)
);

-- add author data
INSERT INTO authors (firstname, initials, lastname) VALUES
  ('George', 'R. R.', 'Martin'),
  ('Terry', NULL, 'Pratchett'),
  ('J.', 'R. R', 'Tolkien'),
  ('Ursula', NULL, 'Le Guin');

-- add book data
INSERT INTO books (title, author_id, genre) VALUES
  ('Equal Rites', 2, 'Fantasy'),
  ('The Return of the King', 3, 'Fantasy'),
  ('A Storm of Swords 1: Steel & Snow', 1, 'Fantasy'),
  ('Tehanu', NULL, 'Fantasy'),
  ('Sorcery', 2, 'Fantasy'),
  ('The Tombs of Atuan', NULL, 'Fantasy'),
  ('A Clash of Kings', 1, 'Fantasy'),
  ('The Light Fantastic', 2, 'Fantasy'),
  ('The Fellowship of the Ring', 3, 'Fantasy');
```

Notarás que no todos los libros tienen una identificación de autor (`author_id`), esto será importante a medida que analicemos las diferentes combinaciones disponibles.

Cuando hacemos una unión (`JOIN`), usamos la cláusula `ON` de la declaración SQL para indicar cómo establecer la unión. Normalmente, esto significa hacer coincidir un ID en ambas tablas. Podemos unirnos a la tabla de libros y autores a través de la identificación del autor:

```sql
SELECT books.id, title, genre, firstname, initials, lastname FROM books JOIN authors ON books.author_id = authors.id;
```

Which would return the following data:

```
 id |                  title                   |        genre         |    firstname    |    initials     |    lastname
----+------------------------------------------+----------------------+-----------------+-----------------+-----------------
  1 | Equal Rites                              | Fantasy              | Terry           |                 | Pratchett
  2 | The Return of the King                   | Fantasy              | J.              | R. R            | Tolkien
  3 | A Storm of Swords 1: Steel & Snow        | Fantasy              | George          | R. R.           | Martin
  5 | Sorcery                                  | Fantasy              | Terry           |                 | Pratchett
  7 | A Clash of Kings                         | Fantasy              | George          | R. R.           | Martin
  8 | The Light Fantastic                      | Fantasy              | Terry           |                 | Pratchett
  9 | The Fellowship of the Ring               | Fantasy              | J.              | R. R            | Tolkien
```

Al observar los datos devueltos, hemos unido dos tablas. La tabla `books` puede denominarse tabla **left** (porque aparece primero en la instrucción SQL), y la tabla `authors` puede denominarse tabla **derecha**, porque aparece segundo en la instrucción SQL.

Notarás que faltan dos libros y un autor en la tabla. Esto se debe a que los dos libros en cuestión no tienen un `author_id`, por lo que no se puede establecer la combinación para esos libros. Falta el autor porque no hay libros con su `author_id`, por lo que, de nuevo, no se puede establecer la unión.

## `INNER JOIN`

![inner-join](https://media.git.generalassemb.ly/user/15120/files/ee41ef00-0838-11e9-84b7-11e8b67b08bd)

Un `INNER JOIN` es lo mismo que un `JOIN`. Devolverá todos los datos donde se pueda establecer la unión. Solo se devuelven los datos en los que se puede realizar la unión.

## `LEFT JOIN`

![left-join](https://media.git.generalassemb.ly/user/15120/files/ee41ef00-0838-11e9-8bd5-bee03d12bc93)

A `LEFT JOIN` will return all the data from the **left** table (the first one in the SQL statement), and only the data that can be joined to it from the **right** table:

Un `LEFT JOIN` devolverá todos los datos de la tabla **left** (la primera en la declaración SQL), y solo los datos que se pueden unir a ella desde la tabla **right**:

```sql
-- books is the left table, authors the right
SELECT books.id, title, genre, firstname, initials, lastname FROM books LEFT JOIN authors ON books.author_id = authors.id;
```

```
 id |                  title                   |        genre         |    firstname    |    initials     |    lastname
----+------------------------------------------+----------------------+-----------------+-----------------+-----------------
  1 | Equal Rites                              | Fantasy              | Terry           |                 | Pratchett
  2 | The Return of the King                   | Fantasy              | J.              | R. R            | Tolkien
  3 | A Storm of Swords 1: Steel & Snow        | Fantasy              | George          | R. R.           | Martin
  4 | Tehanu                                   | Fantasy              |                 |                 |
  5 | Sorcery                                  | Fantasy              | Terry           |                 | Pratchett
  6 | The Tombs of Atuan                       | Fantasy              |                 |                 |
  7 | A Clash of Kings                         | Fantasy              | George          | R. R.           | Martin
  8 | The Light Fantastic                      | Fantasy              | Terry           |                 | Pratchett
  9 | The Fellowship of the Ring               | Fantasy              | J.              | R. R            | Tolkien
```

Dado que la tabla `books` aparece primero en la instrucción SQL, se convierte en la tabla **left**. Observa que todos los libros están presentes ahora, aunque a dos les falta un autor.

Hagamos que la tabla `authors` sea la tabla de la izquierda y la de `books` la derecha:

```sql
-- authors is now the left table because it appears first in the SQL statement
SELECT books.id, title, genre, firstname, initials, lastname FROM authors LEFT JOIN books ON books.author_id = authors.id;
```

```
 id |                  title                   |        genre         |    firstname    |    initials     |    lastname
----+------------------------------------------+----------------------+-----------------+-----------------+-----------------
  1 | Equal Rites                              | Fantasy              | Terry           |                 | Pratchett
  2 | The Return of the King                   | Fantasy              | J.              | R. R            | Tolkien
  3 | A Storm of Swords 1: Steel & Snow        | Fantasy              | George          | R. R.           | Martin
  5 | Sorcery                                  | Fantasy              | Terry           |                 | Pratchett
  7 | A Clash of Kings                         | Fantasy              | George          | R. R.           | Martin
  8 | The Light Fantastic                      | Fantasy              | Terry           |                 | Pratchett
  9 | The Fellowship of the Ring               | Fantasy              | J.              | R. R            | Tolkien
    |                                          |                      | Ursula          |                 | Le Guin
```

Aunque los datos aparecen en el mismo orden, debido a que la tabla `authors` ahora es la tabla **left**, todos los autores están presentes, pero faltan los dos libros sin un `author_id`.

## `RIGHT JOIN`

![right-join](https://media.git.generalassemb.ly/user/15120/files/ee41ef00-0838-11e9-822a-340e1d32d3ad)

Como su nombre sugiere, un `RIGHT JOIN` es lo mismo que un` LEFT JOIN` excepto que favorece los datos de la tabla **right**:

```sql
-- books is the left table, and authors the right
SELECT books.id, title, genre, firstname, initials, lastname FROM books RIGHT JOIN authors ON books.author_id = authors.id;
```

```
 id |                  title                   |        genre         |    firstname    |    initials     |    lastname
----+------------------------------------------+----------------------+-----------------+-----------------+-----------------
  1 | Equal Rites                              | Fantasy              | Terry           |                 | Pratchett
  2 | The Return of the King                   | Fantasy              | J.              | R. R            | Tolkien
  3 | A Storm of Swords 1: Steel & Snow        | Fantasy              | George          | R. R.           | Martin
  5 | Sorcery                                  | Fantasy              | Terry           |                 | Pratchett
  7 | A Clash of Kings                         | Fantasy              | George          | R. R.           | Martin
  8 | The Light Fantastic                      | Fantasy              | Terry           |                 | Pratchett
  9 | The Fellowship of the Ring               | Fantasy              | J.              | R. R            | Tolkien
    |                                          |                      | Ursula          |                 | Le Guin
```

Aquí, `books` es la tabla **left** y `authors` **right**. Como puede ver, todos los autores están presentes, pero no todos los libros.

## `FULL JOIN`

![full-join](https://media.git.generalassemb.ly/user/15120/files/ee41ef00-0838-11e9-9d35-ea0e17d15e34)

Un `FULL JOIN` o un `FULL OUTER JOIN` asegurará que todos los datos de las tablas **left** y **right** estén presentes, incluso cuando no se pueda establecer una combinación:

```sql
SELECT books.id, title, genre, firstname, initials, lastname FROM books FULL JOIN authors ON books.author_id = authors.id;
```

```
 id |                  title                   |        genre         |    firstname    |    initials     |    lastname
----+------------------------------------------+----------------------+-----------------+-----------------+-----------------
  1 | Equal Rites                              | Fantasy              | Terry           |                 | Pratchett
  2 | The Return of the King                   | Fantasy              | J.              | R. R            | Tolkien
  3 | A Storm of Swords 1: Steel & Snow        | Fantasy              | George          | R. R.           | Martin
  4 | Tehanu                                   | Fantasy              |                 |                 |
  6 | The Tombs of Atuan                       | Fantasy              |                 |                 |
  7 | A Clash of Kings                         | Fantasy              | George          | R. R.           | Martin
  8 | The Light Fantastic                      | Fantasy              | Terry           |                 | Pratchett
  9 | The Fellowship of the Ring               | Fantasy              | J.              | R. R            | Tolkien
  5 | Sorcery                                  | Fantasy              | Terry           |                 | Pratchett
    |                                          |                      | Ursula          |                 | Le Guin
```

All the data is now present.

## Otras lecturas

- [SQL Joins Explained - SQL-Join.com](http://www.sql-join.com/sql-join-types/)
- [SQL | Join (Inner, Left, Right and Full Joins) - Geeks for Geeks](https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/)
