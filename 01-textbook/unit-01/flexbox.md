![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Flexbox

## ¿Lo que no es?

- Una propiedad de CSS
- Un nuevo paradigma del modelo de caja

## Lo que es

Oficialmente su nombre es

**[Módulo de diseño de caja flexible](https://www.w3.org/TR/css-flexbox-1/)**

_"... En el modelo de diseño flexible, los elementos secundarios de un contenedor flexible se pueden colocar en cualquier dirección y pueden" flexionar "sus tamaños, ya sea creciendo para llenar el espacio no utilizado o encogiéndose para evitar que el padre se desborde."_

> De la recomendación para candidato del W3C, 19 de octubre de 2017

Es como un **modelo de diseño unidimensional** y como un método que ofrece distribución de espacio entre elementos en una interfaz y poderosas capacidades de alineación.

Cuando describimos flexbox como unidimensional, estamos describiendo el hecho de que flexbox se ocupa del diseño en una dimensión a la vez (fila o columna). Esto se puede contrastar con el **modelo bidimensional **de _CSS Grid Layout_, que controla columnas y filas juntas.

## ¿Por qué deberíamos usarlo?

- **[Can I use Flexbox?](https://caniuse.com/#feat=flexbox)**

- No se esperan cambios en el [futuro distante](https://www.w3.org/TR/?title=flex)
- Es el diseño predeterminado en desarrollo nativo

## ¿Cómo funciona?

```css
display: flex;
```

![Ejes de flexbox](https://i.stack.imgur.com/9Oxw7.png)

## Flex container

**flex container**

Un área de un documento distribuida mediante flexbox se denomina **flex container**. Para crear un contenedor flexible, establecemos el valor de la propiedad `display` a flex.

```css
display: flex;
```

Tan pronto como hacemos esto, los hijos directos de ese contenedor se convierten en **flex items**.

- `flex-direction`: cómo se colocan los **flex items** en el **flex container** que definiendo el eje principal (_main ax_) y la dirección

  ```css
  .container {
    display: flex;
    flex-direction: row;
    flex-direction: column;
    flex-direction: row-reverse;
    flex-direction: column-reverse;
  }
  ```

- `flex-wrap`: especifica si los **flex items** se fuerzan en una sola línea o se pueden envolver en varias líneas.

  ```css
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-wrap: nowrap;
    flex-wrap: wrap-reverse;
  }
  ```

- `flex-flow`: es una propiedad abreviada de las propiedades individuales de`flex-direction` y `flex-wrap`.

  ```css
  .container {
    display: flex;
    /* flex-flow: <'flex-direction'> and <'flex-wrap'> */
    flex-flow: row nowrap;
    flex-flow: column wrap;
    flex-flow: column-reverse wrap-reverse;
  }
  ```

* `justify-content`: define cómo el navegador distribuye el espacio entre y alrededor de los elementos de contenido a lo largo del **main-axis** del contenedor.

  ```css
  .container {
    display: flex;
    /* Positional alignment */
    justify-content: center;
    justify-content: start; /* flex-start */
    justify-content: end; /* flex-end */
    justify-content: left;
    justify-content: right;
    /* Distributed alignment */
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
    justify-content: stretch;
  }
  ```

- `align-items`: establece el valor de`align-self` (propiedad del **flex item**) en todos los elementos . Controla la alineación de los elementos en el **cross axis**

  ```css
  .container {
    display: flex;
    /* Basic keywords */
    align-items: normal;
    align-items: stretch;
    /* Positional alignment */
    align-items: center;
    align-items: start; /* flex-start */
    align-items: end; /* flex-end */
    align-items: baseline;
  }
  ```

- `align-content`: handles the remaining space between and around content items along the **cross-axis** with multiple lines.

  ```css
  .container {
    display: flex;
    /* Basic keywords */
    align-content: center;
    align-content: start; /* flex-start */
    align-content: end; /* flex-end */
    /* Baseline alignment */
    align-content: baseline;
    /* Distributed alignment */
    align-content: space-between;
    align-content: space-around;
    align-content: space-evenly;
    align-content: stretch;
  }
  ```

## Flex items

Para tener más control sobre los **flex items**, podemos apuntarlos directamente

- `flex-grow`: especifica qué cantidad de espacio dentro del **Flex container** debe ocupar el elemento. El factor de crecimiento (_grow_) un elemento flexible es relativo al tamaño de los otros hijos en el contenedor flexible.

  ```css
  .container {
    display: flex;
  }

  .item {
    flex-grow: 1;
  }
  ```

- `flex-shrink`: los **flex items** se encogerán para llenar el contenedor de acuerdo con el número de `flex-shrink`, cuando el tamaño predeterminado de los **flex items** sea mayor que **flex container**

  ```css
  .container {
    display: flex;
  }

  .item {
    flex-shrink: 1;
  }
  ```

- `align-self`: alinea los elementos flexibles de la línea flexible actual anulando el valor de `align-items`. Si alguno de los márgenes del **cross-axis** del elemento se establece como automático, se ignora `align-self`.

  ```css
  .container {
    display: flex;
  }

  .item {
    align-self: center; /* Put the item around the center */
    align-self: flex-start; /* Put the flex item at the start */
    align-self: flex-end; /* Put the flex item at the end */
  }
  ```

- `order`: especifica el orden utilizado para colocar un elemento en su **flex container**. Los elementos dentro del mismo contenedor se distribuyen en orden ascendente según sus valores de pedido. Los elementos con el mismo valor de orden se presentan en el orden en que aparecen en el código fuente.

  ```css
  .container {
    display: flex;
  }

  .item {
    order: 1;
    order: -1;
  }
  ```
