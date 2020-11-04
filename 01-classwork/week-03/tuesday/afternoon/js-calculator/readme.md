![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Javascript Calculadora

## Instrucciones

Crea una calculadora que tome entrada del navegador. La calculadora debe mostrar los resultados utilizando una alerta. No necesitas utilizar funciones para completar esta tarea.

La calculadora debe hacer las operaciones aritméticas básicas.

### Calculadora Básica

1. Debe tomar entrada del usuario utilizando avisos (prompt).
2. Debe ser capaz de +, -, / y \*
3. Deber ser capaz de mostrar el resultado utilizando una alerta (alert).
4. Debe utilizar un lazo!
5. Debe manejar flotantes

### Calculadora Avanzada

Implementar la calculadora avanzada:

7. Funcionalidad para 'potencias'
8. Funcionalidad para ‘raíz cuadrada'

<br>

## Tareas Extras

Agrega estas configuraciones adicionales a la calculadora.

### Calculadora de Hipoteca:

Calcula el pago mensual cuando se dan los otros variables como entrada.
Necesitas el `capital`, `tasa de interés anual` y el `numero de pagos`.

- [Hipoteca Enlace 1](http://www.wikihow.com/Calculate-Mortgage-Payments)
- [Hipoteca Enlace 2](http://www.wikihow.com/Sample/Mortgage-Payment)

**Ejemplo:** €100,000.00 por - 30 años (360 meses) a 6% producirá un pago de menos de €600.00 (€599.55 para ser exacto`

### Calculadora de IMC:

Calcula el índice de masa corporal (IMC) cuando se dan el peso y altura - el usuario debe poder escoger entre el sistema imperial o métrico.

- [IMC Enlace 1](https://es.wikipedia.org/wiki/Índice_de_masa_corporal)
- [IMC Enlace 2](https://es.wikihow.com/calcular-el-IMC)

### Calculadora de Viaje:

Esta función debe pedir al usuario para cuatro entradas; distancia, eficiencia de combustible (millas por galón/mpg), precio por galón, velocidad y te dará el tiempo y precio de tu viaje.

**Ejemplo Producción:** “Tu viaje tardará 3.5 horas y costará €255.33.”"

**Nota:** Por cada MPH mas de 60 MPH, reduce las MPG por 2 MPG (es decir, un coche que normalmente consigue 30 mpg solo consigue 28 mpg si su velocidad es 61 mph. Es verdad que esto se vuelve tonto a alta velocidad donde MPG va a cero or se vuelve negativo - ¿como vas a manejar esto?
<br>

## Consejos

- Asegurate de formular un plan antes de empezar a utilizar pseudocódigo.
- Prueba tu código a medida que avanzas, lucha contra el impulso de escribir muchas lineas de código todo a la vez, asegurate que cada una funcione como esperas antes de seguir.
- Chequea con registro de consola (console.log) que los valores son los que esperas mientras programas. Puedes comprobar el tipo de dato con `typeof`
- **¡Cuidado con lazos!** Si te encuentras en un lazo infinito, cierra inmediatamente la ventana del navegador. Si tu navegador es no responsivo selecciona Force Quit... del menu de Apple, selecciona Chrome/Firefox, haz clic en 'Force Quit’. En Windows, abre Task Manager pulsando CTRL+ALT+DELETE, selecciona Chrome/Firefox y haz clic en ‘End Task’.

#### Prompt() & Alert()

El método `Window.prompt()` muestra un cuadro de diálogo con un mensaje opcional que solicita al usuario que ingrese algo de texto.

El método `Window.alert()` muestra un cuadro de diálogo de alerta con el contenido opcional especificado y un botón de ‘Aceptar’.

```
var respuesta = prompt(“¿Que es 5 multiplicado por 2?");

if (respuesta == 10) {
  alert(“¡Guau! ¡Correcto!”);
} else {
  alert(“¡Incorrecto!")
}
```

<br>
