var http = require('http')
const HTML = {'Content-Type': 'text/html; charset=utf-8'}

var servidor = http.createServer(function(req, res) {
  var urlObjeto = new URL(req.url, 'http://localhost:3000')

  // Comprobar si la ruta exacta es /saludo
  if (urlObjeto.pathname === '/saludo') {
    // Obtener el parámetro 'nombre' de la URL
    var nombre = urlObjeto.searchParams.get('nombre') || 'desconocido'

    res.writeHead(200, HTML)
    res.end('<h1>Hola ' + nombre + '</h1>')
  } 
  else {
    // Cualquier otra ruta responde con un error 404
    res.writeHead(404, HTML)
    res.end('<h1>404</h1><p>Página no encontrada</p>')
  }
})

// El servidor se mantiene escuchando para recoger peticiones en el puerto 3000
servidor.listen(3000, function() {
    console.log('Servidor escuchando en http://localhost:3000') })
