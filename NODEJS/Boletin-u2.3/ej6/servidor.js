var http = require('http')
var os = require('os')
var crypto = require('crypto')

// 3000 por defecto
var puerto = process.env.PORT || 3000

var servidor = http.createServer(function(req, res) {
  console.log('Método: ' + req.method + ' | Ruta: ' + req.url)

  // Responder según la ruta pedida y añadir la cabecera Content-Type 
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>Servidor de 2º DAM</h1><p>Te invitamos a probar las rutas <b>/info</b> y <b>/dado</b>.</p>')
  } 
  else if (req.url === '/info') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    var datosSistema = {
      sistemaOperativo: os.platform(),
      cpus: os.cpus().length,
      versionNode: process.version
    }
    res.end(JSON.stringify(datosSistema))
  } 
  else if (req.url === '/dado') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    var numeroAleatorio = crypto.randomInt(1, 7) // Genera un número del 1 al 6
    res.end('<h1>Lanzamiento de dado</h1><p>Has sacado un ' + numeroAleatorio + '</p>')
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>404</h1><p>Página no encontrada</p>')
  }
})

// Arrancar el servidor en el puerto indicado
servidor.listen(puerto, function() {
  console.log('Servidor en http://localhost:' + puerto)
})