---
title: Introducción a Arduino y Node.js - HTTP - Parte 2
author: julianduque
date: 2014-08-07T12:00:00.000Z
layout: Post
---
*A continuación presentamos el segundo artículo de la serie **Introducción a Arduino y Node.js**,
el primero lo pueden leer en: [Introducción a Arduino y Node.js - Serial - Parte 1](/posts/introduccion-arduino-nodejs-1)*

En el artículo anterior dimos una introducción a la programación de Arduino y Node.js
en el cual realizamos una comunicación entre dos aplicaciones, una se ejecutaba en el Arduino (C++) y la
otra corría en el computador con Node.js, la comunicación se estableció a través del puerto serial (USB).

En este nuevo artículo aprenderemos a realizar esta comunicación utilizando el protocolo HTTP.
<!-- more -->

Para este caso vamos a reutilizar el montaje del Sensor de Temperatura que utilizamos
en el artículo anterior.

### Sensor de Temperatura

**Componentes necesarios**

* 1 Arduino UNO/Leonardo (o compatible) con cable USB
* 1 Shield Wifi o Ethernet con su respectivo cable
* 1 Sensor de temperatura LM35
* 1 LED Rojo
* 1 LED Verde
* 2 resistencias de 220 Ohms
* Breadboard
* Cables

#### Montaje

![Montaje](http://i.imgur.com/q7AcLuh.png?1)

## Comunicación HTTP Arduino <> Node.js

El objetivo principal es crear un servidor `http` en Node.js el cual recibirá una petición
para validar si la temperatura supera un límite establecido y así tomar la decisión de encender
el LED Verde o el LED Rojo.

### Servidor HTTP en Node.js

A continuación aprenderemos a crear un Servidor `http` básico utilizando Node.js.

El servidor responderá a una URL `/temp` la cual recibirá un parametro llamado `value`
que contendrá el valor de temperatura retornado por el sensor.

El valor será comparado con el límite superior llamado `TEMP_LIMIT` y retornará `|warning|`
si este valor es superado o `|normal|` en caso contrario.

#### server.js
``` javascript
var http = require('http');
var url = require('url');

var TEMP_LIMIT = 28;

// Definimos el servidor HTTP
// La función interna es conocida como `request handler`, y es ejecutada
// cada vez que una peticion `http` llega al servidor
var server = http.createServer(function (req, res) {
  // Obtenemos la `url` solicitada por el cliente, esta `url` contiene
  // los parámetros de la petición, luego necesitamos analizar (parsear) su contenido
  var endpoint = req.url;

  // Verificamos si la URL contiene la ruta `/temp`
  if (endpoint.indexOf('/temp') !== -1) {
    // Analizamos la URL para extraer su contenido
    var parsedUrl = url.parse(endpoint, true);

    // Obtenemos el objeto que contiene los parámetros
    var params = parsedUrl.query || {};

    // Obtenemos la temperatura o `null` si no tenemos ningún valor
    var temp = params.value || null;

    // Realizamos la validación de temperatura y retornamos el resultado al cliente
    if (temp) {

      if (temp > TEMP_LIMIT) {
        res.write('|warning|');
      } else {
        res.write('|normal|');
      }

    } else {
      res.write('Wrong param, please use `value`');
    }

  } else {
    res.write('Wrong endpoint, please use `/temp`');
  }

  res.end();
});

// Ejecutamos nuestro servidor en el puerto 8080
server.listen(8080);
```

Para correr el servidor debemos ejecutar:

```
$ node server.js
```

Las peticiones `http` locales las podremos realizar a la ruta `http://localhost:8080`

```
$ curl http://localhost:8080/temp?value=22
|normal|

$ curl http://localhost:8080/temp?value=29
|warning|
```

Los caracteres `|` los utilizaremos para delimitar el mensaje que necesitamos en el Arduino.

Ya nuestro servidor Node.js está listo para recibir peticiones desde el Arduino, a continuación
aprenderemos a conectar nuestro Arduino a la red y así poder realizar una petición HTTP.

### Cliente Arduino

Para el cliente haremos algunas modificaciones al código del primer artículo, en este caso
cada 5 segundos realizaremos una petición `GET` al servidor Node.js y luego tomaremos
la decisión.

#### client.ino
``` c
// Incluimos las librerias necesarias para trabajar con el Ethernet Shield
// Si estas usando el Wifi Shield debes incluir <WiFi.h> en lugar de <Ethernet.h>
// Mas información en http://arduino.cc/en/Guide/ArduinoWiFiShield
#include <Ethernet.h>
#include <SPI.h>

#define LED_RED 7 // Definimos el pin del LED rojo
#define LED_GREEN 8 // Definimos el pin del LED verde
#define TEMP_SENSOR 0 // Definimos el pin analogo del sensor

// Definimos la MAC Address de nuestro Ethernet Shield
byte mac[] = {0x90, 0xA2, 0xDA, 0x0E, 0x98, 0x91};

// Definimos la Dirección IP del Servidor Node.js
byte server[] = {192, 168, 169, 100};

// Definimos la Dirección IP del Arduino
byte ip[] = {192, 168, 169, 120};

// Instanciamos el cliente Ethernet con el que nos conectaremos al servidor
EthernetClient client;

// Definimos la variable donde almacenaremos la respuesta del servidor.
String response = String(10);
// Definimos el separador del mensaje
char separator = '|';
// Utilizaremos esta variable para verificar si la lectura de la respuesta ha comenzado
boolean started = false;

void setup() {
  Ethernet.begin(mac, ip); // Iniciamos el Ethernet Shield
  Serial.begin(9600); // Utilizaremos el puerto Serial como debug

  pinMode(LED_RED, OUTPUT); // Definimos el pin del LED rojo como salida
  pinMode(LED_GREEN, OUTPUT); // Definimos el pin del LED verde como salida
}

void loop() {
  // Utilizamos la misma lógica de lectura del sensor vista en el artículo
  // anterior.
  int voltage = analogRead(TEMP_SENSOR);
  int temp = (5 * voltage * 100) / 1024;

  // Realizamos la conexión al servidor Node.js en el puerto 8080
  if (client.connect(server, 8080)) {
    // Enviamos la peticion GET utilizando el protocolo HTTP
    client.println("GET /temp?value=" + String(temp) + " HTTP/1.0");
    client.println();

    // A continuación realizaremos la lectura de la respuesta desde el servidor
    // En este caso solo vamos a hacer lectura mientras estemos conectados
    // Luego de leer la respuesta completa desconectamos el cliente
    while (client.connected()) {
      // Solo realizaremos la lectura de la respuesta si el cliente tiene
      // algo para nosotros
      if (client.available()) {
        // Debemos leer caracter por caracter
        char c = client.read();

        // En el siguiente bloque de código utilizaremos el separador `|` para
        // verificar cuando empieza y termina el mensaje que necesitamos
        if (c != separator && started) {
          response += c;
        } else if (c == separator && !started) {
          started = true;
        } else if (c == separator && started) {
          started = false;
          client.stop();
        }
      }
    }

    // Luego de recibir la respuesta del servidor podemos decidir cual LED encender
    if (response == "normal") {
      digitalWrite(LED_GREEN, HIGH);
      digitalWrite(LED_RED, LOW);
    } else if (response == "warning") {
      digitalWrite(LED_GREEN, LOW);
      digitalWrite(LED_RED, HIGH);
    }

    response = ""; // Limpiamos la variable para la siguiente petición
  } else {
    Serial.print("connection failed");
  }

  delay(5000); // Esperamos 5s antes de empezar la siguiente peticion.
}
```

Este ejemplo tiene un mayor nivel de dificultad ya que debemos realizar la petición HTTP a
bajo nivel aunque en la red existen librerias de terceros que implementan un
cliente HTTP con un API mucho mas sencillo, algunas alternativas son:

* [amcewen/HttpClient](https://github.com/amcewen/HttpClient)
* [interactive-matter/HTTPClient](https://github.com/interactive-matter/HTTPClient).

Oficialmente solo el [Arduino Yun](http://arduino.cc/en/Main/ArduinoBoardYun?from=Products.ArduinoYUN) dentro de sus librerias tiene una clase llamada [HttpClient](http://arduino.cc/en/Reference/YunHttpClientConstructor)
que permite realizar peticiones HTTP de una forma mucho mas simple.

Espero que les haya gustado este nuevo artículo, en una próxima ocasión aprenderemos
como realizar esta conexión a través de WebSockets :)

### Más artículos de la serie
#### [Introducción a Arduino y Node.js - Serial - Parte 1](http://medellinjs.org/posts/introduccion-arduino-nodejs-1)
#### Introducción a Arduino y Node.js - WebSockets - Parte 3 (Próximamente)
#### Introducción a Arduino y Node.js - MQTT - Parte 4 (Próximamente)
#### Introducción a Arduino y Node.js - Johnny Five - Parte 5 (Próximamente)
