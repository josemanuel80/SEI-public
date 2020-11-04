![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Modelos para por Mongo con Mongoose

## Usando MongoDB con Node

NodeJS y MongoDB funcionan muy bien juntos. Sin embargo, para hacerlo aún más fácil, Mongoose es el ORM (_Object Relational Map_ por sus siglas en inglés) de Node.js más común para manipular datos usando MongoDB.

La funcionalidad CRUD es algo que es necesario en casi todas las aplicaciones, ya que todavía tenemos que crear, leer, actualizar y eliminar datos.

## ¿Qué es un ORM?

ORM u O/RM significa mapeo relacional de objetos, y en pocas palabras es un conjunto de métodos auxiliares que nos permite acceder a los datos de una base de datos sin tener que conocer el lenguaje o la sintaxis específicos de la base de datos.

## ¿Qué es Mongoose?

Mongoose es un ORM para Node y nos brinda los comandos CRUD de MongoDB, así como la capacidad de conectarnos a MongoDB.

## Configurando Mongoose en tu aplicación

Crea un nuevo package.json e instale los paquetes relevantes:

1. `mkdir mongoose-intro`
2. `cd mongoose-intro`
3. `touch server.js` in mongoose-intro directory
4. `yarn init`

Para usar Mongoose en tu aplicación Node:

```sh
yarn add mongoose
```

Con el paquete instalado, usémoslo: abre `app.js` y agrega:

```javascript
import mongoose from 'mongoose';
const databaseURI = 'mongodb://localhost/mongoose-intro';
mongoose.connect(databaseURI);
```

Podemos usar la función `.connect()` de mongoose para conectarnos mongoDB.

En este ejemplo, nos estamos conectando a una base de datos local llamada `mongoose-intro`. Aunque todavía no tenemos una base de datos llamada "mongoose-intro", mongo la creará **pero solo cuando intentemos insertar un documento**.

Ahora puede ejecutar todos los comandos de mongoDB sobre la base de datos `mongoose-intro`.

## Trabajando con modelos

### Definiendo un modelo

Debemos construir un modelo Mongoose antes de poder usar cualquiera de nuestras nuevas operaciones CRUD. Puede pensar en modelos un poco como funciones de constructor de JavaScript. Nuestro esquema de Mongoose es lo que usaremos para definir los atributos de nuestro documento.

Desde nuestra aplicación mongoose-intro:

```bash
mkdir models
touch models/user.js
```

Ahora agreguemos:

```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    dob: Date,
    website: String,
    address: String,
    country: String,
  },
  {
    timestamps: true,
  },
);
```

MongoDB no tiene esquema, es decir: todos los documentos de una colección pueden tener diferentes campos, pero para el propósito de una aplicación web, que a menudo contiene validaciones, es mejor usar un esquema que transmita y valide cada tipo. Además, si intenta guardar datos en una clave que no está declarada en el esquema, los datos no se guardarán.

En la parte inferior del esquema, hemos agregado la marca `timestamps`, que le dice a mongo que registre la hora en que se creó el registro y se actualizó por última vez automáticamente. ¡Muy útil!

Por el momento solo tenemos el esquema, que representa la estructura de los datos que queremos usar. Para guardar algunos datos, necesitaremos convertir este archivo en un modelo de Mongoose y exportarlo:

```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    dob: Date,
    website: String,
    address: String,
    country: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', userSchema);
```

Aquí hay un vistazo a los tipos de datos que podemos usar en los documentos de Mongoose:

- String
- Number
- Date
- Boolean
- Array
- Buffer
- Mixed
- ObjectId

## Creando un nuevo `User`

Ahora podemos usar este modelo de mangosta requiriendo el modelo de usuario en server.js:

```javascript
import User from './models/User';

// create a new user called Pedro
const person = new User({
  firstName: 'Pedro',
  dob: new Date('1978-07-18'),
});

console.log(person);
```

## Interactuar con CRUD de MongoDB

En nuestro archivo `server.js` usemos Mongoose para realizar acciones CRUD en nuestra base de datos:

### Create

Vamos a crear una usuario:

```js
const person = new User({
  firstName: 'Pedro',
  dob: new Date('1978-07-18'),
});

person.save((err, user) => {
  if (err) return console.log(err);

  return console.log(`User was created! ${user}`);
});
```

Debido a nuestra validación por correo electrónico, deberíamos obtener:

```js
{ [ValidationError: User validation failed]
  message: 'User validation failed',
  name: 'ValidationError',
  errors:
   { email:
      { [ValidatorError: Path `email` is required.]
        message: 'Path `email` is required.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'required',
        path: 'email',
        value: undefined } } }
```

Solucionemos esto agregando un correo electrónico a nuestra persona.

```javascript
const person = new User({
  firstName: 'Pedro',
  dob: new Date('1978-07-18'),
  email: 'pedro.martin@ga.co',
});

person.save((err, user) => {
  if (err) return console.log(err);
  return console.log('User was created!', user);
});
```

También podemos hacer lo mismo, usando el método `create` de mongoose:

```javascript
User.create(
  {
    firstName: 'alex',
    lastName: 'wheldon',
    dob: new Date('1990-10-10'),
    email: 'alex.wheldon@ga.co',
  },
  (err, user) => {
    if (err) return console.log(err);
    return console.log('User was created!', user);
  },
);
```

### Read

Dentro de ʻapp.js`, **comenta el código para guardar un nuevo usuario** y debajo agreguemos:

```js
// Get all of the users
User.find((err, users) => {
  if (err) return console.log(err);
  return console.log(users);
});
```

Esto debería darnos a todos los usuarios.

También podemos devolver todos los usuarios que coincidan con ciertos criterios:

```javascript
// Get all users that have the first name alex
User.find({ firstName: 'alex' }, (err, users) => {
  if (err) return console.log(err);
  return console.log(users);
});
```

```javascript
// Get one User
User.findById('572733e9cfef9557890b3b92', (err, user) => {
  if (err) return console.log(err);
  return console.log(user);
});
```

También puede obtener el primer registro que coincida con una búsqueda con los atributos definidos:

```javascript
User.findOne({ firstName: 'Pedro' }, (err, user) => {
  if (err) return console.log(err);
  return console.log(user);
});
```

### Update

Puede actualizar un documento de varias formas. Para cada uno hay pros y contras.

#### 1. `findOneAndUpdate`

```javascript
User.findOneAndUpdate(
  { firstName: 'Pedro' },
  { lastName: 'Martin' },
  (err, user) => {
    if (err) return console.log(err);
    return console.log(user);
  },
);
```

Esto es agradable y simple de implementar, sin embargo, hay dos inconvenientes principales: en primer lugar, se devuelve el documento _original_, en lugar del _actualizado_. Para resolver esto, necesitamos agregar algunas configuraciones adicionales:

```javascript
User.findOneAndUpdate(
  { firstName: 'Pedro' },
  { lastName: 'Martin' },
  { new: true },
  (err, user) => {
    if (err) return console.log(err);
    return console.log(user);
  },
);
```

El tercer argumento `{ new: true }`, le dice a mongoose que envíe de vuelta el documento _actualizado_ en su lugar.

En segundo lugar, `findOneAndUpdate` no ejecutará las validaciones, a menos que agreguemos otra configuración en el tercer argumento:

```javascript
User.findOneAndUpdate(
  { firstName: 'Pedro' },
  { lastName: 'Martin' },
  { new: true, runValidators: true },
  (err, user) => {
    if (err) return console.log(err);
    return console.log(user);
  },
);
```

#### `findByIdAndUpdate`

`findByIdAndUpdate` es casi idéntico a `findOneAndUpdate`, excepto que, obviamente, es necesario enviar la identificación del documento, en lugar de los atributos para que coincidan.

```javascript
User.findByIdAndUpdate(
  '572733e9cfef9557890b3b92',
  { lastName: 'Martin' },
  { new: true },
  (err, user) => {
    if (err) return console.log(err);
    return console.log(user);
  },
);
```

Nuevamente, tenemos que pasar `{new: true}`, pero con `findByIdAndUpdate` las validaciones **nunca** se ejecutarán, ¡independientemente de lo que hagamos!

#### Un proceso de dos etapas

Primero, "buscamos" (`find`) un registro, lo actualizamos y luego lo guardamos:

```javascript
User.findById('572733e9cfef9557890b3b92', (err, user) => {
  if (err) return console.log(err);
  user.lastName = 'Martin';

  user.save((err, user) => {
    if (err) return console.log(err);
    return console.log(user);
  });
});
```

Esto requiere un poco más de codificación, pero garantiza que las validaciones **siempre** se ejecuten y el nuevo registro **siempre** se devuelva.

### Destroy

Mongoose ofrece dos métodos sencillos para eliminar documentos:

- `.findByIdAndRemove()`
- `.findOneAndRemove()`.

```javascript
User.findByIdAndRemove('572733e9cfef9557890b3b92', (err) => {
  if (err) return console.log(err);
  return console.log('Deleted!');
});
```

También puede utilizar el proceso de dos pasos similar a la actualización:

```javascript
User.findById('572733e9cfef9557890b3b92', (err, user) => {
  if (err) return console.log(err);
  user.remove((err) => {
    if (err) return console.log(err);
    return console.log('Deleted!');
  });
});
```

## Métodos personalizados

Al definir un esquema, también puede agregar métodos personalizados y llamar a estos métodos en los modelos. Incluso puede sobrescribir los métodos de documento predeterminados de Mongoose.

Hay dos tipos diferentes de métodos que puede definir en un esquema, "métodos" y "estática". Estos son similares a los métodos de instancia (`métodos`) frente a métodos de clase (`estática`).

### .methods

Escribamos una función `fullName` bajo nuestro esquema:

```javascript
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    dob: Data,
    website: String,
    address: String,
    country: String,
  },
  {
    timestamps: true,
  },
);

userSchema.methods.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};

export default mongoose.model('User', userSchema);
```

La podemos usar en app.js:

```js
User.findOne({}, function (err, user) {
  if (err) return console.log(err);
  console.log(user.fullName());
});
```

¡Ahora ejecuta la aplicación con `node app.js` para ver el resultado!

### .statics

También podemos crear nuestros propios métodos en el modelo en sí (en lugar del registro).

```js
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    dob: Data,
    website: String,
    address: String,
    country: String,
  },
  {
    timestamps: true,
  },
);

userSchema.methods.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};

userSchema.statics.all = function all(callback) {
  return this.find({}, callback);
};

export default mongoose.model('User', userSchema);
```

Aquí hemos creado un nuevo método que encontrará a todos los usuarios. Podemos usarlo así:

```js
User.all((err, users) => {
  if (err) return console.log(err);
  console.log(users);
});
```
