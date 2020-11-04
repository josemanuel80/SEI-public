![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# MongoDB

## Que es MongoDB

MongoDB es una de las nuevas razas de bases de datos conocidas como bases de datos NoSQL. Las bases de datos NoSQL se utilizan mucho en tiempo real, big data y aplicaciones de redes sociales y generalmente se llaman NoSQL porque hacen las cosas de manera un poco diferente a las bases de datos SQL tradicionales. Veremos las bases de datos SQL más adelante en el curso.

Ya lo sabes, existen "controladores" de software que permiten que MongoDB se utilice con una multitud de lenguajes de programación y marcos, incluidos Node y Ruby on Rails. Hablaremos de ello en las aplicaciones Express más tarde hoy.

Para este módulo, usamos Mongo directamente. Entonces, ¿cómo es una base de datos de Mongo?

### Formato de datos

- Una base de datos MongoDB consta de _documentos_.
- Un _documento_ en MongoDB se compone de pares _field_ y _value_.
  Echemos un vistazo a cómo puede verse un _documento_ de MongoDB:

```js
{
    _id: ObjectId("5099803df3f4948bd2f98391"),
    name: { first: "Alan", last: "Turing" },
    birth: new Date('Jun 23, 1912'),
    death: new Date('Jun 07, 1954'),
    contribs: [ "Turing machine", "Turing test", "Turingery" ],
    views: 1250000
}
```

**¿A qué te recuerda esta estructura de datos?** JSON!

Un _documento_ de MongoDB es muy parecido a JSON, excepto que se almacena en la base de datos en un formato conocido como _BSON_ (piensa - _Binary JSON_).

_BSON_ básicamente amplía _JSON_ con tipos de datos adicionales, como **ObjectID** y **Date** que se muestran arriba.

### Sin esquema

Los documentos de una colección de MongoDB pueden tener tipos y números de campos completamente diferentes entre sí. No tenemos que definir un esquema para insertar datos en una colección de Mongo, aunque veremos los esquemas en una lección posterior.

#### El documento _\_id_

El _\_id_ es un campo especial que representa la _clave principal_ del documento y siempre aparecerá como el primer campo. Debe ser único.

Podemos establecer explícitamente el _\_id_ así:

```js
{
  _id: 2,
  name: "Suzy"
}
```

or this...

```js
{
  _id: "ABC",
  name: "Suzy"
}
```

Sin embargo, es más común permitir que MongoDB lo cree implícitamente para nosotros usando su tipo de datos _ObjectID_.

### Instalación

### macOS

```sh
brew tap mongodb/brew
brew install mongodb-community@4.4
```

### Linux (WSL)

```sh
sudo apt-get update
sudo apt-get install mongodb
```

> Nota: si tienes problemas con la instalacion en Linux on WSL, sigue estos [pasos](https://dev.to/zenika/setup-mongodb-on-wsl-ubuntu-18-04-167)

## Encienda el motor

`mongod` es el nombre del proceso del motor de base de datos real. La instalación de MongoDB no establece que mongoDB se inicie automáticamente. Una fuente común de errores al comenzar a trabajar con MongoDB es olvidarse de iniciar el motor de la base de datos.

Para iniciar el motor de la base de datos, escribe `mongod` en la terminal con el argumento `--dbpath` para indicar la ruta donde escribira los datos

```sh
mongod --dbpath ./db/data
```

Presiona `control-c` para detener el motor.

## Crear una base de datos e insertar documentos

MongoDB se instala con una aplicación cliente, un shell basado en JavaScript, que nos permite interactuar con MongoDB directamente.

Inicia la aplicación en la terminal escribiendo `mongo` en otra pestaña del terminal.

La aplicación se cargará y el mensaje cambiará a `>`.

Enumera los comandos disponibles del shell: `> help`.

Muestra la lista de bases de datos: `> show dbs`.

Muestra el nombre de la base de datos actualmente activa: `> db`.

Cambia a una base de datos diferente: `> use [nombre de la base de datos para cambiar a]`.

Cambiemos a la base de datos `local`:`> use local`.

Mostrar las colecciones de la base de datos actual `> show collections`.

### Creando una nueva base de datos

Para crear una nueva base de datos en Mongo Shell, simplemente tenemos que _user_ la base de datos. Creemos una base de datos llamada _myDB_:

```
> use myDB
```

### Inserting Data into a Collection

Así es como podemos crear e insertar un documento en una colección llamada _personas_:

```js
> db.people.insert({
    name: "Fred", // Don't type the dots, they are from the
    age: 21     // shell, indicating multi-line mode
})
```

¡Usar una colección por primera vez la crea!

### Agregar muchos documentos nuevos

En un momento practicaremos la consulta de nuestra base de datos, pero obtengamos más datos allí. Aquí hay algunos documentos más para poner en la colección _people_. Simplemente podemos proporcionar un _array_ al método _insert_ y creará un documento para cada objeto en la matriz.

```js
db.people.insert([
  {
    name: 'Alex',
    age: 20,
  },
  {
    name: 'Pedro',
    age: 42,
  },
  {
    name: 'Gabriel',
    age: 33,
  },
  {
    name: 'Callum',
    age: 53,
  },
  {
    name: 'Mike',
    age: 12,
  },
]);
```

> Nota: asegúrate de escribir el cierre del método _insertar_.

### Consulta de documentos

Para listar todos los documentos en una colección, usamos el método _find_ en la colección sin ningún argumento:

```
> db.people.find()
```

Nuevamente, a diferencia de las filas en una base de datos relacional, ¡nuestros documentos no tienen que tener los mismos campos!

#### Consultas más específicas

También podemos usar el método `find()` para consultar la colección pasando un argumento - un objeto JS que contiene criterios para consultar.

```js
> db.people.find( {name: "Emma"} )

```

Hay un puñado de variables de criterios especiales que también podemos usar. Así es como podemos usar el operador de consulta `$gt` de MongoDB para devolver todos los documentos de _personas_ con una antigüedad mayor a 20:

```js
> db.people.find( {age: { $gt: 20 } } )
```

MongoDB viene con una gran cantidad de [operadores de consulta integrados](http://docs.mongodb.org/manual/reference/operator/query/#query-selectors) que podemos usar para escribir consultas complejas.

**¿Cómo escribiríamos una consulta para recuperar personas menores o iguales a los 20 años?**

Además de seleccionar qué datos se devuelven, podemos modificar la forma en que se devuelven esos datos limitando la cantidad de documentos devueltos, clasificando los documentos y proyectando qué campos se devuelven.

Esto ordena nuestra consulta de edad y ordena por _name_:

```
> db.people.find( {age: { $gt: 20 } } ).sort( {name: 1} )
```

El `1` indica un orden ascendente.

[Esta documentación](http://docs.mongodb.org/manual/core/read-operations-introduction/) proporciona más detalles sobre la lectura de datos.

### Actualización de datos

En MongoDB, usamos el método de colecciones `update()` especificando el _criterio de actualización_ (como hicimos con `find()`), y usamos la acción ` $set` para establecer el nuevo valor.

```js
> db.people.update( { name: "Emma" }, { $set: { age: 99 } })
```

Por defecto, `update()` solo modificará un único documento. Sin embargo, con la opción `multi`, podemos actualizar todos los documentos que coinciden con la consulta.

```js
> db.people.update( { name: { $lt: "M" } }, { $inc: { age: 10 } }, { multi: true } )
```

Usamos el operador de actualización `$inc` para aumentar el valor existente.

Aquí está la [lista de operadores de actualización](http://docs.mongodb.org/manual/reference/operator/update/) disponible.

### Eliminar datos

Usamos el método `remove()` para los datos de las colecciones.

Si deseas eliminar completamente una colección, incluidos todos sus índices, utiliza `[nombre de la colección].drop()`.

Llama a `remove({})` en la colección para eliminar todos los documentos de una colección. Nota: todos los documentos coincidirán con el criterio de "vacío".

De lo contrario, especifique un criterio para eliminar todos los documentos que lo coincidan:

```js
> db.people.remove( { age: { $lt: 50 } } )
```

## Modelado de datos en MongoDB

Hay dos formas de modelar datos relacionados en MongoDB:

- a través de **incrustación**
- a través de **referencia** (enlace)

Ambos enfoques se pueden utilizar simultáneamente en el mismo documento.

### Documentos incrustados

En MongoDB, por diseño, es común **incrustar** datos en un documento principal.

Usamos **incrustación** cuando los datos solo existen dentro del contexto del documento principal. Piense en una sola publicación de blog que tenga varios comentarios. Esos comentarios solo existen en esa publicación de blog en particular; no se comparten entre varias publicaciones de blog, por lo que los incorporamos.

Para demostrar la **incrustación**, agregaremos otra persona a nuestra colección _personas_, pero esta vez queremos incluir información de contacto. Una persona puede tener varias formas de comunicarse con ella, por lo que integraremos una serie de opciones de contacto dentro del documento del usuario.

## Modelando data

Repasemos este comando ingresándolo juntos:

```js
> db.people.insert({
    name: "Manny",
    age: 33,
    contacts: [
      {
        type: "email",
        contact: "manny@domain.com"
      },
      {
        type: "mobile",
        contact: "(555) 555-5555"
      }
    ]})
```

**¿Qué imagina que podría ser una desventaja de incrustar datos?**

Si el crecimiento de los datos incrustados no está ligado, se podría exceder el tamaño máximo de documento de MongoDB de 16 megabytes.

El enfoque anterior de incrustar documentos _contact_ proporciona una gran flexibilidad en cuanto a qué tipos y cuántos contactos puede tener una persona. Sin embargo, esta flexibilidad complica ligeramente la consulta.

#### Documentos de referencia

Podemos modelar las relaciones de datos utilizando un enfoque de **referencias** donde los datos se almacenan en documentos separados. Estos documentos, debido al hecho de que contienen diferentes tipos de datos, probablemente se almacenen en colecciones separadas.

Puede ser útil pensar en este enfoque como _enlace_ documentos entre sí al incluir una referencia al campo _\_id_ del documento relacionado.

Creemos una nueva colección `bankAccounts`:

```js
> use bankAccounts
```

> Nota: Utiliza la idea de que la persona puede tener una _cuenta conjunta_, que es propiedad de más de una persona.

En aras de la _consistencia de los datos_, mantener los datos de la cuenta en su propio documento sería una mejor decisión de diseño. En términos más claros, no sería una buena idea almacenar el saldo de una cuenta bancaria en más de un lugar.

En nuestra aplicación, hemos decidido que todas las cuentas bancarias se recuperarán a través de una persona. Esta decisión nos permite incluir una referencia en el documento personal únicamente.

Implementar el escenario anterior es tan simple como asignar el _\_id_ de un documento _bankAccount_ a un nuevo campo en nuestro documento personal:

Primero creemos una cuenta bancaria:

```js
> db.bankAccounts.insert({
  balance: 2000,
})
```

Ahora obtengamos el _id_ de esa cuenta:

```js
> db.bankAccounts.findOne({})
{ "_id" : ObjectId("56426f481779b50ee5267752"), "balance" : 2000 }
```

Ahora insertemos una persona y hagamos referencia a su cuenta bancaria:

```js
> db.people.insert({
    name: "Miguel",
    age: 46,
    bankAccount: ObjectId("56426f481779b50ee5267752")
})
```

Nuevamente, debido a que no hay "combinaciones" en MongoDB, recuperar la información de la cuenta bancaria de una persona requeriría una consulta separada en la colección _bankAccounts_.

```js
> db.bankAccounts.find({ "_id": db.people.findOne({ name: "Miguel" }).bankAccount })
{ "_id" : ObjectId("56426f481779b50ee5267752"), "balance" : 2000 }
```

## Mejores prácticas de modelado de datos

MongoDB fue diseñado desde cero con el desarrollo de aplicaciones en mente. Más específicamente, lo que se puede y no se puede hacer con respecto a los datos se aplica en su aplicación, no en la base de datos en sí.

A continuación, se indican algunas cosas a tener en cuenta:

- Por razones de rendimiento y simplicidad, apóyese en la _incrustación_ en lugar de la _referencia_.
- Prefiera el enfoque _referencia_ cuando la cantidad de datos secundarios no está vinculada.
- Prefiera el enfoque _referencia_ cuando varios documentos principales acceden al mismo documento secundario y el documento de ese niño cambia con frecuencia.
- La obtención de documentos _referenciados_ requiere múltiples consultas por parte de su aplicación.
- En el enfoque de _referencias_, según las necesidades de su aplicación, puede optar por mantener enlaces al \__id_ del documento relacionado en cualquiera de los documentos o en ambos.

Para obtener más detalles sobre el modelado de datos en MongoDB, comience con [esta sección de la documentación de mongoDB](http://docs.mongodb.org/manual/core/data-modeling-introduction/) o este [video de YouTube de una hora de duración](https://www.youtube.com/watch?v=PIWVFUtBV1Q)
