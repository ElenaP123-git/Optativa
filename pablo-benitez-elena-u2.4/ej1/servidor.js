var http = require('http')

var servidor = http.createServer(function(req, res) {
  console.log(req.method + ' ' + req.url)

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>Inicio</h1><ul><li><a href="/sobre-mi">Sobre mí</a></li><li><a href="/aficiones">Aficiones</a></li><li><a href="/hora">Hora actual</a></li></ul>')
  } 
  else if (req.url === '/sobre-mi') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>Sobre mí</h1><p>Estudio el ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM). Me encantan los videojuegos, el diseño de los mismos y el montaje de equipos.</p>')
  } 
  else if (req.url === '/aficiones') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>Aficiones</h1><ul><li>Programación y desarrollo de videojuegos</li><li>Diseño digital e ilustración</li><li>Tecnología y videojuegos</li></ul>')
  } 
  else if (req.url === '/hora') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    var horaActual = new Date().toLocaleTimeString('es-ES')
    res.end('<h1>Hora actual</h1><p>Son las ' + horaActual + '</p>')
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>Error 404</h1><p>La ruta no existe.</p><a href="/">Volver al inicio</a>')
  }
})

servidor.listen(3000, function() {
  console.log('Servidor en http://localhost:3000')
})