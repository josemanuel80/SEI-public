# Where In The World Is Carmen Sandiego?

## Preparación

1. Crea una base de datos desde la consola

   ```sh
   createdb world
   ```

2. Conecta a la base de datos **world**

   ```sh
   psql -d world
   ```

3. Importa la base de datos de muestra, las ciudades, países e idiomas del mundo

   ```psql
   \i ./world.sql
   ```

4. Navegar solo en la tabla `country`

`\d country`

## Seleccionar

> Nota: Solo funcionan las comillas simples (`'`). Si recibes un error, asegúrate de utilizar comillas simples.

- Selecciona todo en esta tabla

  ```sql
  SELECT * FROM country;
  ```

- Selecciona ciertas columnas

  ```sql
  SELECT code,name,continent,population FROM country;
  ```

- Selecciona una fila basado en un código de país

  ```SQL
  SELECT code,name,continent,population FROM country WHERE code='ARG';
  ```

- Selecciona cualquier fila que sean similares

  ```SQL
  SELECT code,name,continent,population FROM country WHERE code LIKE 'AR%';
  ```

- Selecciona todos los paises que su población sea de al menos un millón de personas

  ```SQL
  SELECT code,name,continent,population FROM country WHERE population >= 100000000;
  ```

- Selecciona solo paises europeos que su población sea mayor a 40 millones

  ```SQL
  SELECT code,name,continent,population FROM country WHERE continent='Europe' AND population > 40000000;
  ```

- Ordena esos países por población, de mayor a menor

  ```SQL
  SELECT code,name,continent,population FROM country WHERE continent='Europe' AND population > 40000000 ORDER BY population DESC;
  ```

## Where In The World Is Carmen Sandiego?

Usaremos lo que ya hemos aprendido acerca de la búsqueda con comandos SQL y lo aplicaremos para perseguir y capturar a un ladrón escurridizo y de renombre mundial.

Sigue las pistas, **escribe los comandos que utilizaste y las respuestas reales.**

Y averigua hacia dónde se dirige Carmen, para que podamos atraparla.

### La persecución

**Pista #1:** Recientemente nos enteramos de que alguien que encaja con la descripción de Carmen Sandiego ha estado viajando por el sur de Europa. Lo más probable es que esté viajando a algún lugar donde no la noten, así que busque el país menos poblado del sur de Europa y comenzaremos a buscarla allí.

```SQL
-- TU CONSULTA SQL VA AQUÍ
```

**Respuesta:**

**Pista #2:** Ahora que estamos aquí, sabemos que se vio a Carmen asistiendo a clases de idiomas en el idioma oficialmente reconocido de este país. Consulta las bases de datos y averigua qué idioma se habla en este país, para que podamos llamar a un traductor para que trabaje contigo

```SQL
-- TU CONSULTA SQL VA AQUÍ
```

**Respuesta:**

**Pista #3:** Tenemos nuevas noticias sobre las clases a las que asistió Carmen; nuestros espias nos dicen que se mudó a otro país, un país donde la gente habla _sólo_ el idioma que estaba aprendiendo. Descubra qué país cercano no habla más que ese idioma.

```SQL
-- TU CONSULTA SQL VA AQUÍ
```

**Respuesta:**

**Pista #4:** Estamos reservando el primer vuelo, tal vez tengamos la oportunidad de atraparla esta vez. Solo hay dos ciudades a las que podría volar en ese país. Uno de los nombres de ciudad que el del país, pero sería demasiado obvio. Ahora estamos siguiendo nuestro instinto; averigua a qué otra ciudad de ese país podría estar volando.

```SQL
-- TU CONSULTA SQL VA AQUÍ
```

**Respuesta:**

Oh no, she pulled a switch – there are two cities with very similar names, but in totally different parts of the globe! She's headed to South America as we speak; go find a city whose name is _like_ the one we were headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

**Pista #5:** Oh no,¡hay dos ciudades con nombres muy similares, pero en partes totalmente diferentes del mundo! Mientras hablamos ella se dirige a Sudamérica; Busca una ciudad cuyo nombre sea _como_ (`LIKE`) a la que nos dirigíamos, pero que no termine igual. Averigua la ciudad y haz otra búsqueda de país. ¡Deprisa!

```SQL
-- TU CONSULTA SQL VA AQUÍ
```

**Respuesta:**

**Pista #6:** ¡Estamos cerca! ¡Nuestra espia en sudamericana dice que acaba de tomar un taxi en el aeropuerto y se dirige hacia la capital! Busca la capital del país. Envíenos el nombre de donde se dirige y lo seguiremos justo detrás de ti.

```SQL
-- TU CONSULTA SQL VA AQUÍ
```

**Respuesta:**

**Pista #7:** She knows we're on to her – her taxi dropped her off at the international airport, and she beat us to the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the landing dock.

Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but if we can crack it, we can finally put her where she belongs – behind bars.

**Pista #7:** Ella sabe que estamos siguiendola: su taxi la dejó en el aeropuerto internacional y se nos adelantó hasta las puertas de embarque. Tenemos una oportunidad de atraparla, solo tenemos que saber hacia dónde se dirige.

Por suerte para nosotros, se está volviendo arrogante. Nos dejó una nota y estoy seguro de que cree que es muy inteligente, pero si podemos descifrarla, finalmente podemos ponerla donde pertenece: tras las rejas.

```txt
 Nuestra cita de juegos últimamente ha sido inusualmente divertida.
 Como agente, diré que ha sido un placer dejarte atrás.
 Y aunque la comida aquí es excelente y la gente agradable,
 Necesito un poco más de sol en mi vida.
 Así que me voy a una ciudad donde la población era
 De noventa y un mil y ahora, ochenta y cuatro.
```

Contamos contigo. Averigua hacia dónde se dirige, envíanos la información y nos aseguraremos de encontrarnos con ella.

```SQL
-- TU CONSULTA SQL VA AQUÍ
```

**Respuesta:**
