Ejercicio 1

1. Al recargar, en la terminal aparece a veces GET /favicon.ico. ¿Quién hace esa petición y qué le responde tu servidor?

   La realiza el navegador de forma automática para buscar el icono de la pestaña. Como el servidor no tiene una ruta específica para el favicon, el servidor responde con un código 404 (página no encontrada) y el mensaje de error.

2. Si escribes la hora directamente como valor dentro del objeto de rutas, siempre sale la misma. ¿Por qué ocurre?

   Ocurre porque el objeto de rutas se evalúa y se carga en la memoria RAM una sola vez al arrancar el servidor. Cualquier valor estático definido ahí mantendrá la hora exacta del momento en que se encendió el servidor y no se actualizará al recargar la página web.