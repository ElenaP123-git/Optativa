
---EJERCICIO1:
a) ¿En qué orden se mostrarán las letras A, B, C y D? Razona la respuesta utilizando la pila de llamadas, la cola de callbacks y el event loop.

 A, D, B, C
 Porque:
 1. console.log('A') se ejecuta de forma síncrona en la pila de llamadas (imprime A).
 2. setTimeout y fs.readFile son asíncronos: mandan sus funciones al sistema y a la cola de callbacks para más tarde.
 3. fs.readFileSync es síncrono y bloqueante: detiene el hilo principal leyendo el archivo por completo.
 4. console.log('D', ...) se ejecuta inmediatamente después de terminar la lectura bloqueante (imprime D true).
 5. Una vez vacía la pila de llamadas principal, el Event Loop procesa los callbacks pendientes de setTimeout y fs.readFile (imprimiendo B y C).

b) Ejecútalo y comprueba tu respuesta. ¿Qué instrucción es bloqueante? ¿Cuáles son no bloqueantes? Explica la diferencia.

fs.readFileSync(__filename, 'utf8') es BLOQUEANTE (congela el hilo principal hasta leer el archivo)
setTimeout y fs.readFile son NO BLOQUEANTES (delegan la tarea y dejan que el programa siga avanzando)

c) Cambia __filename por 'no-existe.txt' en la llamada a readFile y añade al callback la gestión del error con el parámetro err (convención «error primero»). ¿Qué muestra ahora? ¿Se detiene el programa?

Muestra:
A
D true
B
Error al leer: ENOENT: no such file or directory, open 'C:\Users\Usuario\Documents\Mis-asignaturas\Optativa\Optativa\NODEJS\boletin-u2\no-existe.txt'

El programa no se cae porque el error se captura en el callback

d) Añade al final console.log(process.version) y console.log(document.title). ¿Qué ocurre con cada una? Relaciónalo con las diferencias entre JavaScript en el navegador y en Node.js.

process.version funciona bien porque el objeto Process es nativo de Node.js y document.title da error porque el objeto document pertenece al DOM del navegador, no existe en Node.


--- EJERCICIO2:
a) Explica por qué este código es un ejemplo de callback hell. ¿Por qué cada readFile/writeFile tiene que ir dentro del anterior?

Porque las funciones de retrollamada forman una estructura visual en forma de flecha hacia la derecha muy difícil de leer.
Tienen que ir uno dentro del anterior porque como las operaciones de lectura y escritura son asíncronas y cada paso depende obligatoriamente de los datos del paso anterior (primero leemos la configuración para saber qué archivo procesar, luego leemos ese archivo para contar las líneas, y finalmente escribimos el informe), necesitamos meter la siguiente acción dentro del callback para asegurar que los datos ya están disponibles.

b) Reescríbelo en procesar-then.js usando fs/promises con .then() y un único .catch().

Se creó el fichero informe.txt 
Fichero: alumnos.txt
Líneas: 5


c) Reescríbelo en procesar-async.js con una función async, await y try/catch.

ya :)

d) Borra (o renombra) alumnos.txt y ejecuta las tres versiones. ¿En cuántos sitios hay que
gestionar el error en cada una?

Error: ENOENT: no such file or directory, open 'C:\Users\Usuario\Documents\Mis-asignaturas\Optativa\Optativa\NODEJS\boletin-u2\ej2\alumnos.txt'

El error se tiene o se puede gestionar con callback en un if(err) dentro de cada uno, en un .then() (procesar-then.js) en un .catch() al final de la cadena de promesas y con un async/await (procesar-async.js) utilizando try/catch.

e) (Ampliación) Crea una función esperar(ms) que devuelva una promesa (new Promise) y úsala
para que el programa espere 1 segundo antes de escribir el informe.

ya :)