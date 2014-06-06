En este tutorial dividido en varias secciones, aprenderemos sobre aplicaciones móviles híbridas con [Phonegap](http://phonegap.com/).
<!-- more -->

##Construyendo aplicaciones móviles con Phonegap - Parte 1 instalando, generando y ejecutando un aplicativo
En esta parte del tutorial veremos como instalar, construir, empaquetar y ejecutar una aplicación móvil básica usando este _framework_  que utiliza HTML, CSS y por supuesto JavaScript.

###Introducción
![Phonegap](https://dl.dropboxusercontent.com/u/212845/Charla%20Phonegap/Build-Diagram-2.png "Phonegap")

PhoneGap es un _framework_ de desarrollo orientado a dispositivos móviles que permite construir aplicaciones de fácil portabilidad a diversas plataformas usando HTML, CSS y Javascript, en pocas palabras [Phonegap](http://phonegap.com/) permite empaquetar un aplicativo web como un aplicativo móvil, que puede ser instalado localmente en un dispositivo soportado e incluso puede ser distribuido por las múltiples tiendas de aplicaciones de las plataformas incluidas en el _framework_.

##Cordova o Phonegap?
Nitobi, la compañía que inició el proyecto [Phonegap](http://phonegap.com/), fue adquirida luego por Adobe, cuando esto sucedió, Nitobi donó el proyecto a la fundación Apache, como Phonegap era marca registrada y fue adquirida por Adobe, la fundación Apache renombro el proyecto a [Apache Cordova](http://cordova.apache.org/), sin embargo Adobe tomó la decisión de mantener [Phonegap](http://phonegap.com/) sin costo alguno y luego hizo de Phonegap una distribución de Apache Cordova, esto significa que [Phonegap](http://phonegap.com/) es igual que [Apache Cordova](http://cordova.apache.org/), más un par de funcionalidades extra.

##Plataformas soportadas

Actualmente se soportan oficialmente 10 plataformas:

* Amazon Fire OS
* Android
* Blackberry 10
* Firefox OS
* IOS
* Ubuntu
* Windows Phone 7
* Windows Phone 8
* Windows 8
* Tizen

Algunas plataformas como WebOS, Bada y Symbian, fueron soportadas en versiones anteriores del _framework_, pero se descontinuaron debido a que dichos sistemas operativos son considerados _legacy_, pero en caso de necesidad extrema, es posible con una versión anterior construir un aplicativo para las mismas.

##Cómo funciona?
Toda aplicación del _framework_ trabaja sobre un componente nativo llamado _web view_, Este componente carga un documento HTML y este documento por lo general incluye un archivo JavaScript que es el API de [Phonegap](http://phonegap.com/), el cual tiene acceso a controlar el _hardware_ del dispositivo, este API se comunica con un componente nativo que actúa como un _middleware_ entre JavaScript y el sistema operativo del dispositivo, de una forma más gráfica:


![middleware](https://dl.dropboxusercontent.com/u/212845/Charla%20Phonegap/HTML5WrapperLarge.png "Middleware")

##Instalando Phonegap
Para instalar [Phonegap](http://phonegap.com/) necesitamos tener un entorno funcional de [NodeJS](http://nodejs.org/), así que solo tenemos que ejecutar:

```sudo npm install -g phonegap```

Posterior a esto dispondremos del comando phonegap y podemos probarlo ejecutando:

```phonegap --version```

Si la instalación se ejecutó correctamente esto debe imprimir la versión del __framework__ instalada

##Creando el proyecto
Disponiendo ya del comando phonegap, para crear el proyecto basta con ejecutar:

```phonegap -d create MedJSMobile com.medjs.app MedellinJS```

Este comando creará un directorio MedJSMobile, y dentro tendremos nuestro proyecto que usará el ID "com.medjs.app" y tendrá el nombre de MedellinJS.

Dentro del directorio generado por ahora nos enfocaremos en el subdirectorio __www__, al interior de este encontraremos la estructura de un proyecto web, tenemos el archivo __index.html__,los directorios __css__,__img__ y __js__ para hojas de estilo, imágenes y archivos JavaScript en su orden respectivo. Hay algunos otros pero por ahora nos concentraremos en estos.

Lo que tenemos al comienzo es un aplicativo bastante básico que simplemente escucha por el evento __deviceready__, este sucede cuando el dispositivo donde se ejecuta el aplicativo está listo para trabajar, el callback cambia un mensaje en la pantalla cuando el evento ocurre (Este código se encuentra el archivo __index.js__ dentro del directorio __js__).

##Ejecutando el aplicativo

Existen diversas formas de ejecutar el aplicativo, algunas más simples que otras, estas son las diferentes opciones:

###Ejecución en un emulador local

Para ello debemos tener un entorno de desarrollo de la plataforma donde quiero probar el aplicativo, la configuración de dicho entorno varía bastante de acuerdo al entorno deseado y el sistema operativo de mi máquina local, afortunadamente [Phonegap](http://phonegap.com/) cubre los diferentes procesos en su [documentación](http://docs.phonegap.com/en/3.4.0/guide_platforms_index.md.html#Platform%20Guides).

Luego de realizar la configuración para la plataforma deseada podemos ejecutar:

 ```phonegap local run android```

Este comando construye el paquete y lo instala en el emulador de la plataforma seleccionada y previamente configurada en la maquina local, en el caso del ejemplo __Android__.

###Ejecución en un dispositivo conectado por USB

El dispositivo debe estar previamente configurado según la [documentación de Phonegap](http://docs.phonegap.com/en/3.4.0/guide_platforms_index.md.html#Platform%20Guides) para cada plataforma, luego solo basta con ejecutar:

```phonegap run android --device```

Este comando construye el paquete para el aplicativo, lo instala en el dispositivo y por último lo ejecuta. En caso de no encontrar dispositivo alguno que cumpla con los requisitos buscará un emulador local de la plataforma seleccionada como __fallback__

![Phonegap initial app](https://dl.dropboxusercontent.com/u/212845/Charla%20Phonegap/phonegap-initial-app.png "phonegap initial app")

###Compilando en la nube y probando en un dispositivo sin conexión por cable

Este método permite obviar la configuración de un entorno de desarrollo local, así que en teoría podríamos desarrollar un aplicativo solo teniendo el __CLI__ de [Phonegap](http://phonegap.com/) instalado y una cuenta registrada en el servicio [Phonegap Build](https://build.phonegap.com), este es un servicio muy útil que nos permite la construcción remota de paquetes instalables para las plataformas __IOS__,__Android__ y __Windows Phone__, Este servicio está disponible con diversos planes siendo el más básico libre de costo alguno, para más información ver los [planes](https://build.phonegap.com/plans).

Para compilar el paquete ejecutamos:

```phonegap remote run android```

Si es la primera vez que lo ejecutamos, deberemos autenticarnos con la cuenta de [Phonegap Build](https://build.phonegap.com), luego este comando subirá nuestro código, creando la aplicación en la nube. Allí se compilará el paquete, luego imprimirá un código __QR__ en la consola para que procedamos a escanear este con el dispositivo y podamos instalar el aplicativo compilado.

###Sirviendo el aplicativo por la red local sin compilarlo

Este es el método más revolucionario de todos, recientemente fue lanzado el [Phonegap Developer App](http://app.phonegap.com/), un aplicativo que se instala en el dispositivo móvil y que permite ejecutar nuestro código directamente en el dispositivo sin que sea previamente compilado, empaquetado ni instalado.

El proceso es bastante simple, en la máquina local ejecuto:

```phonegap serve```

Esto creará un servidor en la máquina local que por defecto correrá en el puerto 3000, luego de instalar el [Phonegap Developer App](http://app.phonegap.com/) en el dispositivo, procedemos a ejecutarlo y lo apuntamos a la dirección IP y puerto del servidor en nuestra máquina local.

![Phonegap developer app](https://dl.dropboxusercontent.com/u/212845/Charla%20Phonegap/phonegap-dev-app.png "phonegap developer app")

Lo interesante de este método es la velocidad, ya que todo cambio que ejecute en mi código se enviará en tiempo real al dispositivo, eliminando los tediosos tiempos de espera para probar los cambios que es algo muy común en el desarrollo para móviles. Adicionalmente puedo probar la aplicación en múltiples dispositivos simultáneamente conectados al servidor y puedo ver en la consola de este toda la actividad en las terminales, siendo esto una gran ayuda para hacer __debugging__.

Si requiero refrescar manualmente el aplicativo, basta con hacer __touch__ con cuatro dedos y si quiero regresar a la pantalla de conexión del aplicativo lo puedo hacer con tres dedos.

__Aquí finalizamos la primera parte, en la segunda veremos algunos frameworks para construir interfaces gráficas para aplicativos móviles.__