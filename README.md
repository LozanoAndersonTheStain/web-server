# Laboratorio número 3: web server

Buenos días, tardes o noches, independientemente de la hora en que lo estés viendo, este es un proyecto para el público.

Este es un laboratorio que ha sido realizado con la intensión de generar una plantilla la cual podamos utilizar en siguientes proyectos, estos pueden ser: personales, grupales e incluso en nuestros trabajos llegado el momento... Esto con la intención de poder adelantar un poco de trabajo y poder ser más eficientes.

En los próximos minutos, se podrá apreciar el cómo se ha realizado el laboratorio y sus características, todo también basado en imágenes.

## Imagen del laboratorio en ejecusión final. 

Así es como queremos que nuestra página, llegue a ser vista por nuestros clientes y puede ser mucho mejor

![terminada](https://user-images.githubusercontent.com/105325885/196001834-d1bd0617-d4bc-4b5c-8969-5d13c07e0104.png)
![terminada2](https://user-images.githubusercontent.com/105325885/196001947-655f94dc-4bd2-4852-aeef-69521aaad276.png)
![terminada3](https://user-images.githubusercontent.com/105325885/196001990-4eb99474-0ca5-4ad1-a99a-227966fba39b.png)

## Pasos para su ejecución:

Al descargar la carpeta debemos hace los siguientes paso para que funcione en su totalidad, tranquil@s no es muy complejo...

Al no tener una alta complejidad solo debemos hacer lo siguiente:

* Utilizamos el comando "npm i o npm install", ambos realizan lo mismo, lo que hacen es instalar todas las librerías y dependencias, estas mismas son las cuales harán que el proyecto funcione correctamente.
* Ahora lo siguiente es utilizar el comando "npm start" este con la finalidad de inicializar el proyecto en el servidor local y poder visualizarlo en el navegador que sea de tu preferencia.
* El siguiente paso es empezar a hacer los cambios que se deseen hacer.

# Se ha creado la carpeta: "Views"

![Captura de pantalla 2022-10-15 134135](https://user-images.githubusercontent.com/105325885/196003005-d77d37f2-c360-4f03-9734-a2fb62ae4c52.png)

En esta carpeta creamos los archivos "bigotudos" como yo los llamo, en fin, en estos archivos son donde se crea toda la estructura de los archivos "HTML", gracias a esto nuestra aplicación o página web podrá funcionar un poco más veloz... Estos son tres elementos, pero tú puedes generar cuantos archivos sean necesarios por ti y con las preferencias que desees.

También le hemos creado un archivo "404" en este se encuentra la pestaña de error, la cual es generada por un error en el "Path" de búsqueda de la página.

## Se ha creado la carpeta "Partials": esta se crea dentro de "Views"

![partials](https://user-images.githubusercontent.com/105325885/196005769-92dc6e09-993c-4d75-9327-8f9fb94ed5cc.png)

En esta hemos generado tres archivos diferentes y como se puede apreciar, cada no ha sido creado para algo diferente, pero porque están aparte de los demás...

Estos están por separado porque los partials son partes del código que se necesita reutilizar en varias partes diferentes de nuestras páginas, pero que sigan teniendo la misma funcionalidad que en la anterior.

Estos solo pueden ser reutilizados como si se importaran de un lado a otro, de esta manera "{{> header}}", "{{> nav}}" o "{{> footer}}", claro esto es independientemente de para que lo vayas a utilizar.
# Heroku

El proyecto ha sido desplegado en Heroku, la cual es una plataforma de servicios de computación en la nube, el cual es capaz de soportar cualquier lenguaje de programación

#### He aquí el link de la página
https://web-server-alz.herokuapp.com

#### Esto ha sido todo por este proyecto... Espero este proyecto te sirva bastante y puedas hacer grandes proyectos
