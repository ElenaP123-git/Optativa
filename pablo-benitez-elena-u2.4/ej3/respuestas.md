Preguntas - Ejercicio 3

1. Para el servidor, vuelve a lanzarlo y visita /firmas. ¿Qué ha pasado con las firmas y por qué?

   Las firmas se han borrado y la lista aparece vacía ([]). Esto ocurre porque las firmas se almacenaban en la memoria RAM del servidor dentro de un array de JavaScript. Al reiniciar el proceso de Node.js, toda la memoria volátil se limpia.

2. ¿Por qué let cuerpo = '' tiene que declararse dentro de la función que atiende cada petición y no al principio del fichero?

   Si se declarara de forma global al inicio del archivo, los datos de las peticiones de diferentes usuarios se mezclarían y corromperían al recibirse los fragmentos.

3. Si el formulario tuviera required en todos sus campos, ¿haría falta validar igualmente en el servidor? Razona la respuesta.

   Sí. Las validaciones de HTML (required) solo protegen en el navegador del cliente, pero un usuario malintencionado puede enviar peticiones HTTP POST directamente mediante herramientas como Postman o cURL saltándose por completo el navegador.

4. Firma con el nombre <h1 style="color:red">Hola</h1>. ¿Qué aparece en la página de agradecimiento? ¿Por qué es un problema de seguridad?

   Aparecerá un título grande de color rojo con la palabra "Hola" en lugar de mostrarse el texto plano. Asli el servidor renderiza código HTML o JavaScript  introducido por un usuario, lo que permitiría ejecutar scripts maliciosos en los navegadores de otros usuarios.