EJERCICIO 1:

a) Busca en nodejs.org/api el nivel de estabilidad del módulo querystring y del constructor new
Buffer(). ¿Qué significa cada nivel y qué alternativa propone la documentación?

El módulo que sirve para manejar las cadenas de consulta en las direcciones web (querystring) se encuentra en un nivel de estabilidad de tipo legado. Esto significa que es una herramienta antigua que ya no recibe mejoras ni mantenimiento activo, por lo que la documentación aconseja cambiarla por una opción más moderna y estándar llamada URLSearchParams.

En cuanto a la forma clásica de crear espacios de memoria con new Buffer(), su nivel de estabilidad es cero porque está totalmente obsoleta y desaconsejada. Ya no se debe utilizar por motivos de seguridad, y en su lugar se recomienda usar métodos seguros como Buffer.from().

b) En la firma fs.readdir(path[, options], callback), ¿qué parámetros son obligatorios y
cuáles opcionales? ¿Cómo lo sabes?

Todo lo que aparezca encerrado entre corchetes [ ] es opcional, mientras que lo demás es obligatorio.

En esta función, la ruta de la carpeta y la función que avisa al terminar son obligatorias, mientras que las opciones de configuración que van en medio son opcionales.

EJERCICIO 2:
e) ¿Por qué el programa termina solo después de clearInterval?

El programa se mantiene ejecutándose mientras haya tareas pendientes en su bucle de eventos (event loop), como por ejemplo un temporizador repetitivo (setInterval) que sigue activo. Cuando llamamos a clearInterval, le indicamos a Node que ese temporizador ya ha terminado su trabajo. Al no quedar ninguna otra tarea pendiente en la cola, el programa entiende que ha finalizado y se cierra.
Sin clearInterval, el temporizador se habría quedado activo indefinidamente en segundo plano.

EJERCICIO 3:

b)
TEXTO       CARACTERES      BYTES   
hola        4               4
Epaña       6               7
5€          3               4
:D          2               4

No siempre coinciden los carácteres y los bytes porque los caracteres representan las letras o símbolos que vemos a simple vista, mientras que los bytes son el espacio de memoria que ocupan al guardarse en el ordenador, además los caracteres básicos en inglés ocupan un solo byte, pero las letras con tilde, la eñe, los símbolos especiales como el del euro o los emoticonos necesitan más bytes.

EJERCICIO 4:

e) ¿Por qué aquí no puedes usar directamente lectura.pipe(escritura)? ¿Por qué hace falta
process.exit() al final?

No se puede usar la tubería (pipe) directamente porque este ejercicio nos pide transformar el texto a mayúsculas sobre la marcha y contar los bytes exactos que se van procesando. El método pipe conecta la lectura con la escritura de forma automática, no deja modificar el contenido por el camino.

Hace falta llamar a process.exit() porque las operaciones de lectura y escritura por la terminal mantienen el proceso abierto. 

EJERCICIO 6 (con este ejercicio me ha petado la cabeza):

E) Pruébalo en el navegador. ¿Por qué en la terminal aparece también GET /favicon.ico? ¿Qué
ocurre si arrancas el servidor dos veces a la vez en el mismo puerto?

Aparece porque los navegadores web de forma automática realizan una segunda petición independiente para buscar el icono pequeño (favicon) que se muestra en la pestaña del navegador. Como el navegador pide esa ruta y nuestro servidor la procesa, queda registrada en la terminal.

Si se arranca el servidor produce un error de conflicto en el sistema operativo porque un puerto de red solo puede ser escuchado por una única aplicación al mismo tiempo. El segundo servidor que se intente arrancar fallará y se cerrará automáticamente al ver que el puerto ya está ocupado por el primero.