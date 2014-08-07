En esta serie de artículos aprenderemos cómo programar un Arduino y cómo podemos integrarlo con Node.js.
<!-- more -->

## Introducción

¡Estamos en el boom del Internet de las cosas! y uno de los principales actores de este boom es el [Arduino][arduino], una plataforma electrónica abierta (Open Hardware) para hacer prototipados de proyectos de una manera fácil e intuitiva, gracias a esto se ha vuelto bastante popular en los círculos de artistas, diseñadores, programadores y entusiastas permitiendoles realizar proyectos y ambientes interactivos con facilidad e incluso utilizar esta plataforma como herramienta de enseñanza para personas de todas las edades.

Otro de los principales actores es [Node.js][nodejs] ya que es una de las plataformas perfectas para realizar aplicaciones en tiempo real, justo lo que se necesita en el Internet de las cosas.

## ¿Cómo programar un Arduino?

Para programar un [Arduino][arduino] necesitamos descargar e instalar el [Arduino IDE](http://arduino.cc/en/Main/Software), esta herramienta nos permitira programar y subir nuestros archivos al dispositivo, el lenguaje de programación utilizado es compatible con `C/C++` (a simple vista no es estrictamente `C/C++` pero al momento de compilar el IDE se encarga de agregar los headers necesarios para que funcione en el dispositivo).

Todo programa de Arduino necesita de 2 mètodos fundamentales `setup` y `loop`.

``` c
void setup() {
  // Aquì realizaremos todo el código de inicializaciòn y configuraciòn
}

void loop() {
  // Como su nombre lo indica este método se ejecutará en un ciclo infinito
  // Aquí se realizará toda la funcionalidad principal de nuestra aplicación
}
```

Si quieres conocer más sobre el Lenguaje de Arduino y sus capacidades visita el [Manual de Referencia][arduino-reference].

Personalmente considero que la mejor forma de aprender es haciendo ¿cierto?, entonces realizaremos nuestro primer proyecto básico con Arduino y luego aprenderemos como integrar este proyecto con [Node.js][nodejs] y así tendríamos nuestra primer solución en tiempo real - *¡Internet de las cosas, allá vamos!*.

### Sensor de Temperatura

Construiremos un sensor de temperatura para nuestro hogar con indicador lumínico.

**Componentes necesarios**

* 1 Arduino UNO/Leonardo (o compatible) con cable USB
* 1 Shield Wifi o Ethernet con su respectivo cable (solo necesario para conectarlo a un servidor Node.js)
* 1 Sensor de temperatura LM35
* 1 LED Rojo
* 1 LED Verde
* 2 resistencias de 220 Ohms
* Breadboard
* Cables

#### Montaje

![Montaje](http://i.imgur.com/q7AcLuh.png?1)

Aquí tenemos un circuito bastante sencillo, los dos LED están conectados a pines digitales del Arduino, en este caso el LED rojo está conectado al pin `7` y el LED verde está conectado al pin `8`. *Ojo, las resistencias son necesarias si no quemaremos los LED*.

Y el sensor de temperatura lo conectamos a una entrada análoga del Arduino, en este caso al pin `A0`.

Luego de realizar todas las conexiones incluyendo la de `+5V` y `GND` conectamos nuestro Arduino al computador a través del puerto USB y abrimos el Arduino IDE.

#### Arduino IDE v1.5.2-BETA

![](http://i.imgur.com/VleqjdB.png)

En el IDE vamos a escribir el siguiente código:

``` c
#define LED_RED 7 // Definimos el pin del LED rojo
#define LED_GREEN 8 // Definimos el pin del LED verde
#define TEMP_SENSOR 0 // Definimos el pin analogo del sensor

int maxTemp = 22; // Este sera nuestro limite de temperatura

void setup() {
  Serial.begin(9600); // Iniciamos el puerto serial
  pinMode(LED_RED, OUTPUT); // Definimos el pin del LED rojo como salida
  pinMode(LED_GREEN, OUTPUT); // Definimos el pin del LED verde como salida
}

void loop() {
  int voltage = analogRead(TEMP_SENSOR); // Leemos el valor actual del pin analogo, este valor
                                         // puede estar entre 0 y 1023 y corresponde a un nivel de voltaje
                                         // que nos entrega el sensor.
                                         
  int temp = (5 * voltage * 100) / 1024; // Realizamos la conversion a grados celsius, esta formula se puede
                                         // encontrar en la hoja de datos del componente.
  
  //
  // En el siguiente bloque vamos a verificar si la temperatura actual supera el maximo definido en maxTemp
  // si es superado debemos encender el LED rojo y apagar el LED verde, de lo contrario dejamos el LED verde 
  // encendido.
  //
  // HIGH enciende el puerto digital, corresponde a un 1 o +5V.
  // LOW apaga el puerto digital, corresponde a un 0.
  //
  if (temp > maxTemp) {
    digitalWrite(LED_GREEN, LOW);
    digitalWrite(LED_RED, HIGH);
  } else {
    digitalWrite(LED_GREEN, HIGH);
    digitalWrite(LED_RED, LOW);
  }
  
  Serial.println(temp); // Imprimimos la temperatura actual en el puerto serial
  
  delay(500); // Esperamos 500ms antes de empezar la siguiente lectura.
}
```

Luego de escribir el código debemos subirlo al Arduino, para eso damos click al botón de `Upload` y garantizamos que el código ha sido subido con éxito.

![Arduino IDE uploading](http://i.imgur.com/Gp2kk8v.png)

Si queremos ver lo que esta pasando en el puerto serial podemos abrir el monitor serial en `Tools > Serial Monitor` o ejecutando `Ctrl + Shift + M`, allí veremos la lectura de temperatura del sensor.

![Monitor Serial](http://i.imgur.com/gW2ecEE.gif)

Y listo, nuestro sensor de temperatura está funcionando a la perfección ¿Que fácil no?

<iframe class="vine-embed" src="https://vine.co/v/M1pBjKLzLqz/embed/simple" width="600" height="600" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>

Ahora viene la grán pregunta...

## ¿Cómo integrar Arduino con Node.js?

En este primer artículo aprenderemos como integrar nuestro proyecto con Node.js através del puerto serial utilizando el módulo [`serialport`][serialport].

Primero debemos instalar el módulo utilizando el gestor de paquetes de Node.js - [npm](https://npmjs.org)

```
 $ npm install serialport
```

Luego creamos un archivo JavaScript con el siguiente código:

#### app.js
``` javascript
// Requerimos el módulo serialport
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

// Instanciamos el objeto de conexión al puerto serial
var sp = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

// Abrimos la conexión al puerto serial
sp.open(function () {

  // Cada que llegue un dato serial lo imprimiremos en la consola
  // En este caso convertimos el dato en Entero y lo mostramos como
  // temperatura en grados celsius.
  sp.on("data", function (data) {
    var temp = parseInt(data, 10) + " ºC";
    console.log(temp);
  });

});
```

Y luego ejecutamos nuestra aplicación con el siguiente comando:

```
$ node app.js
```

*Si utilizas Linux es posible que tengas un problema de permisos para leer el puerto serial, para ejecutar la aplicación utiliza `sudo`*

![Output](http://i.imgur.com/RrjGugN.gif)

<hr>

En los próximos artículos de la serie explicaremos como conectar nuestro Arduino a un servidor [Node.js][nodejs] utilizando HTTP, WebSockets, Mensajes PubSub con MQTT y por último programaremos el Arduino directamente con [Node.js][nodejs] utilizando el framework [Johnny-Five][johnny-five].

#### [Introducción a Arduino y Node.js - HTTP - Parte 2](http://medellinjs.org/posts/introduccion-arduino-nodejs-2)
#### Introducción a Arduino y Node.js - WebSockets - Parte 3 (Próximamente)
#### Introducción a Arduino y Node.js - MQTT - Parte 4 (Próximamente)
#### Introducción a Arduino y Node.js - Johnny Five - Parte 5 (Próximamente)

[arduino]: http://arduino.cc/
[arduino-getting-started]: http://arduino.cc/es/Guide/HomePage
[arduino-reference]: http://arduino.cc/en/Reference/HomePage
[serialport]: https://npmjs.org/serialport
[johnny-five]: https://github.com/rwaldron/johnny-five
[nodejs]: http://nodejs.org/
[serialport]: https://npmjs.org/serialport
