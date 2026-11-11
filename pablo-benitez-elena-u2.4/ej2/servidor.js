var http = require('http')
var fs = require('fs')
var path = require('path')

const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8'
}

var servidor = http.createServer(function(req, res) {
  console.log(req.method + ' ' + req.url)

  var rutaFichero
  var codigoEstado = 200

  if (req.url === '/') {
    rutaFichero = path.join(__dirname, 'paginas', 'index.html')
  } else if (req.url === '/contacto') {
    rutaFichero = path.join(__dirname, 'paginas', 'contacto.html')
  } else if (req.url === '/estilos.css') {
    rutaFichero = path.join(__dirname, 'paginas', 'estilos.css')
  } else {
    rutaFichero = path.join(__dirname, 'paginas', '404.html')
    codigoEstado = 404
  }

  fs.readFile(rutaFichero, function(err, datos) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
      return res.end('Error 500: Error interno al leer el fichero')
    }

    var extension = path.extname(rutaFichero)
    var contentType = tipos[extension] || 'text/plain; charset=utf-8'

    res.writeHead(codigoEstado, { 'Content-Type': contentType })
    res.end(datos)
  })
})

servidor.listen(3000, function() {
  console.log('Servidor en http://localhost:3000')
})