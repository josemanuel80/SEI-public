![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Model View Controller

Al crear aplicaciones complejas, es importante que estructuramos nuestro código de una manera significativa,

Hay varios enfoques, pero uno común para las aplicaciones RESTful del lado del servidor es MVC.

MVC significa Modelo - Vista - Controlador y tiene como objetivo dividir nuestro código en una de tres responsabilidades:

## Modelo

El modelo se encarga de gestionar los datos. En lugar de asociar la palabra modelo con un modelo de moda, piense en él como un portero o bibliotecario. El modelo asegura que los datos que ingresan a la base de datos sean válidos y también es responsable de recuperar los datos de la base de datos. Es el guardián de los datos.

## Ver

La vista es responsable de renderizar los datos. Tradicionalmente, la capa de vista sería una plantilla HTML y los datos se fusionarían con la plantilla HTML. Podrías pensar en ello como un proceso de combinación de correspondencia en el que se crea una plantilla de correo electrónico con marcadores de posición que se reemplazan con datos reales de una hoja de cálculo antes de enviarse.

Con las API, la capa de vista es JSON y es muy simple.

## Controlador

El controlador es una función que se utiliza para indicarle al modelo que obtenga los datos específicos requeridos y envíe esos datos a la plantilla de vista correcta para generar la respuesta correcta. Puede pensar en el controlador como un empleado de comida rápida que dice en voz alta los pedidos a medida que llegan, luego recoge la comida y la entrega al cliente (el cliente en este caso).

![mvc](https://media.git.generalassemb.ly/user/15120/files/c01a6d80-2dec-11e9-97a7-68ef21ea4d1e)

## Enrutamiento

Sobre la arquitectura MVC se encuentra un enrutador. El enrutador es responsable de inspeccionar la solicitud entrante y dirigirla al controlador correspondiente.

Cada recurso que creamos en nuestra aplicación debe tener su propia vista de modelo y controlador. Entonces, por ejemplo, si nuestra aplicación tiene un recurso _user_ y _cheeses_, crearíamos un modelo, vista y controlador para cada uno.

## Further reading

- [What is MVC, and how is it like a sandwich shop? - Freecodecamp](https://medium.freecodecamp.org/simplified-explanation-to-mvc-5d307796df30)
- [MVC: Model, View, Controller - Codecademy](https://www.codecademy.com/articles/mvc)
