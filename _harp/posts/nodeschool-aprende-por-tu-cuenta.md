A la hora de querer aprender una nueva tecnología o conocer las características de algún lenguaje siempre buscamos en internet algún tutorial que nos enseñe sus conceptos, es por eso que hoy les quiero hablar sobre [Node School](http://nodeschool.io/) una iniciativa que busca **enseñar** por medio de **talleres autoguiados** el **aprendizaje** de estos temas.<!-- more -->

**[Node School](http://nodeschool.io/ "Abre en una nueva ventana")** es una comunidad que te ayuda a ganar habilidades en <span class="skimlinks-unlinked">Node.js</span> y JavaScript en un formato interactivo. Todos sus tutoriales son Open Source y comienzan con ejercicios simples que van aumentando su grado de dificultad a medida que avanzas. **Para realizar los módulos de Node School debes tener un conocimiento medio de JavaScript**, de lo contrario te aconsejo que leas un par de tutoriales o realizes el taller de **javascripting **que puedes encontrar dentro de Node School** **. Cuando te sientas cómodo con el lenguaje estarás listo para comenzar.

## Primeros pasos con Node School

![nodeschoolmain](https://cdn-images-1.medium.com/max/800/1*S-xdnAkVDQheLsX_9Z68sA.png)

Para iniciar con los talleres que provee Node School es necesario que tengas instalado en tu computador [Node.JS](https://nodejs.org/) para esto puedes descargar los instaladores desde su página oficial y seguir el asistente (a mi en lo personal me gusta instalar Node por medio de [NVM](https://github.com/creationix/nvm)). Las lecciones se ejecutan en la terminal y funcionan en Linux, Mac y Windows. Vamos a ver entonces como trabajar con estas lecciones.

## Instalar lección o taller

Es recomendable crear un directorio en tu computador con el nombre del taller y acceder a el desde la terminal, luego instalaremos el taller por medio de NPM.

`
mkdir learnyounode
cd learnyounode
sudo npm install -g learnyounode
learnyounode
`

Luego de ejecutar el comando **learnyounode **tendremos en consola un listado de ejercicios para realizar, veamos ahora como trabajar estos ejercicios de la mejor forma.

## Realizando un ejercicio

Cuando seleccionamos un ejercicio en este caso "**Hello World**" tendremos una pantalla similar a la que a continuación se muestra, donde veremos la descripción del ejercicio y algunos tips y recursos para conocer mas acerca del contenido.

![learnyounode](https://cdn-images-1.medium.com/max/800/0*o7v4hrSMxbqmPNba.png)

El ejercicio nos recomienda crear un archivo con extension .js (particularmente me gusta nombrar este archivo con el nombre del ejercicio) en este caso creare un archivo llamado **helloworld.js** donde escribiremos la solución de este. Para verificar que  nuestra solucion al ejercicio es correcta debemos ejecutar el comando **learnyounode verify helloworld.js**   a

`
touch helloworld.js
learnyounode verify helloworld.js
`

Si nuestra solucion es correcta Node School nos lo indicara con una pantalla similar, si falla, nos dirá en que fallamos.

![verifyprogram](https://cdn-images-1.medium.com/max/800/0*orYygx3ZLa1UqfgM.png)

Finalmente si volvemos a ejecutar la instrucción **learnyounode N**ode School nos indicara que el ejercicio anterior lo hemos completado**.**

![nodeschoolmain](https://cdn-images-1.medium.com/max/800/0*bC94-yHxUfrIJCnf.png)

Espero que esta corta guía los pueda ayudar a dar comienzo a su auto-aprendizaje, hasta una próxima.
