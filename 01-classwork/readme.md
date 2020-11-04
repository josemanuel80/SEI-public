![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Classwork

## ¿Qué es?

Repositorio para trabajos de clase de SEI-ES 01

Usando este repositorio, distribuiremos `starter-code` para las lecciones. También es un lugar para que lleves un registro de todo el trabajo que realizas en las clases

## Setup

### Paso 1. **Fork** del repositorio

Primero, haz [fork](https://help.github.com/articles/fork-a-repo) este repositorio haciendo clic en el botón de _fork_.

<img width="476" alt="captura de pantalla 2017-03-21 a las 15 34 30" src ="https://cloud.githubusercontent.com/assets/40461/24155532/06443092-0e4c-11e7-8999-9196e91f1216.png ">

Elija bifurcar este repositorio en tu cuenta (solo relevante si es miembro de una organización).

### Paso 2. Clona tu fork

A continuación, clona tu fork en tu computadora copiando el SSH de tu repositorio.

![clon](https://cloud.githubusercontent.com/assets/40461/10177745/b394027e-66f3-11e5-8cc5-20c01c9a7785.png)

Navega a tu directorio de desarrollo:

```sh
cd ~/development
```

Y ejecuta el comando:

```sh
git clone <copiar y pegar>
```

### Paso 3. Configurar el _upstream_

Para que puedas conectar tu fork clonada localmente al repositorio original en GitHub, necesitamos agregar un nuevo `remoto` para este`upstream` (esta es la convención para el nombre del repositorio original).

Vamos a buscar el SSH de ese repositorio original.

<img width="1000" alt ="captura de pantalla 2017-03-21 en 13 38 37" src = "https://cloud.githubusercontent.com/assets/40461/24154496/3ffcdfc6-0e49-11e7-9978-3bf852bd7bd8.png ">

Ahora asegúrese de estar en el fork clonado localmente de su trabajo de clase y escribe:

```sh
git remote add upstream git@git.generalassemb.ly:sei-es/01-classwork.git
```

## Obteniendo código de inicio

Al comienzo de cada lección, el instructor puede cargar algún código de inicio en este repositorio.

La estructura de este código se verá así:

```txt
.
├── README.md
└── w01d01
   └── example-lesson
    └── starter-code
        └── code.txt
```

Para obtener este nuevo código, deberá ejecutar:

```sh
git pull upstream master
```

Ahora puedes trabajar en este directorio `starter-code`.
