

[Yeoman](http://yeoman.io/) es un conjunto de herramientas construidas sobre Node.js cuyo fin es el de implementar buenas prácticas de desarrollo y simplificar las tareas repetitivas que están involucradas en la realización de cualquier proyecto.
<!-- more -->

![Yeoman](https://dl.dropboxusercontent.com/u/212845/charla_yeoman/yeomanClone.png "Yeoman")

Los tres componentes básicos de [Yeoman](http://yeoman.io/) son:

* Generación de esqueletos más conocida como _scalfolding_  que se logra por medio de los paquetes generadores llamados _generators_, estos son paquetes que contienen la estructura básica de un proyecto, sus dependencias y tareas más comunes, esto me brinda un punto inicial de mi proyecto con toda la configuración requerida y listo para el iniciar el desarrollo.
* Administración de dependencias por medio de [Bower](http://bower.io/), el sistema de paquetes de JavaScript que me permite instalar, desinstalar y actualizar las dependencias de mi proyecto.
* Automatización de tareas por medio de [Grunt](http://gruntjs.com/) o [Gulp](http://gulpjs.com/), dependiendo del que haya incluido mi generador, tareas como: compilar el proyecto, empaquetarlo, comprimirlo, probarlo... pueden ser automatizadas con alguna de estas dos herramientas

###Instalando Yeoman
Para instalar [Yeoman](http://yeoman.io/) debo tener instalado NodeJS y NPM, y basta con ejecutar

```sudo npm install -g yo```

Luego de ejecutar la instalación, tendremos el comando ___yo___ disponible, este comando al ser ejecutado nos presenta un menú con las tareas que puede ejecutar [Yeoman](http://yeoman.io/), tambien puedo ejecutar el comando pasando argumentos y ejecutar una tarea concreta. 

Inicialmente [Yeoman](http://yeoman.io/) no incluye ningún generador, por lo que es necesario instalar los que necesitemos para nuestros proyectos. uno de los más usados es el generador de webapp, para instalarlo podemos seguir el asistente de instalación que presenta el comando ___yo___ o podemos recurrir a NPM, todos los generadores de [Yeoman](http://yeoman.io/) son paquetes de NPM que tienen el prefijo __generator-__, en este caso la instalación sería así:

```sudo npm install -g generator-webapp```

Los generadores oficiales de [Yeoman](http://yeoman.io/) se pueden observar [aquí](http://yeoman.io/official-generators.html), la comunidad ha hecho su parte y más opciones [están disponibles](http://yeoman.io/community-generators.html)

###Creando un nuevo proyecto con Yeoman
Posterior a la instalación del generador, puedo crear el esqueleto de mi proyecto, basta con crear un directorio, ubicarme en el y correr el comando ___yo___, en el menú interactivo ya tendré la opción de usar el generador en este caso el de __webapp__, también puedo usar el comando con el argumento de esta manera:

```yo webapp```

El generador suele incluir un proceso interactivo que me permite modificar opciones del esqueleto a ser creado, debo responder a sus preguntas hasta que inicie el proceso personalizado de acuerdo a mis preferencias.

Cuando la ejecución termine, tendré toda la estructura inicial de mi proyecto creada: 

* En el directorio __app__ almacenaré todo el código de mi aplicativo
* Las dependencias instaladas en __app/bower_components_  
* Las tareas incluidas listas para ser ejecutadas dentro del archivo __Gruntfile.js__.

Una de las tareas más apreciadas incluidas en la mayoría de los generadores, es la del servidor embebido que me permite visualizar el proyecto mientras lo desarrollo, por lo general la orden es:

```grunt serve```

Como se puede observar, ya estoy listo para comenzar el desarrollo de mi proyecto y he ahorrado una considerable cantidad de tiempo en configuración y creación del proyecto inicial.

Si deseas ampliar más la información, te recomiendo la presentación usada en la charla http://slid.es/edsadr/yeoman .

