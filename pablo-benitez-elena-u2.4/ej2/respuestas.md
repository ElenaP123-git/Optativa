Ejercicio 2

1. Al cargar `/` aparecen dos peticiones en la terminal. ¿Cuáles son y por qué?

   Aparecen GET / (que solicita la página HTML principal) y GET /estilos.css (que es solicitada automáticamente por el navegador al interpretar la etiqueta <link> del archivo HTML).

2. Imagina que tienes que servir un vídeo de 500 MB. ¿Qué problema tendría fs.readFile y qué alternativa de las vistas en clase usarías?

   fs.readFile carga el archivo completo en la memoria RAM del servidor antes de enviarlo. Con un archivo de 500 MB, esto saturaría la memoria del servidor. La alternativa puede ser usar Streams con fs.createReadStream(ruta).pipe(res), ya que envía el archivo por bloques de manera fluida y sin consumir mucha memoria.