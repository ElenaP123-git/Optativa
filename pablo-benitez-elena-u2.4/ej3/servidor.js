var http = require('http')
var fs = require('fs')
var path = require('path')

var firmas = []

var servidor = http.createServer(function(req, res) {
  console.log(req.method + ' ' + req.url)

  var urlObjeto = new URL(req.url, 'http://localhost:3000')
  var pathname = urlObjeto.pathname

  if (req.method === 'GET' && pathname === '/') {
    var rutaForm = path.join(__dirname, 'recursos', 'formulario.html')
    fs.readFile(rutaForm, function(err, datos) {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
        return res.end('Error al leer el formulario')
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(datos)
    })
  } 
  else if (req.method === 'POST' && pathname === '/firmar') {
    var cuerpo = ''
    req.on('data', function(chunk) {
      cuerpo = cuerpo + chunk
    })
    req.on('end', function() {
      var params = new URLSearchParams(cuerpo)
      var nombre = params.get('nombre') ? params.get('nombre').trim() : ''
      var mensaje = params.get('mensaje') ? params.get('mensaje').trim() : ''

      // Validación de campos requeridos y longitud máxima
      if (!nombre || !mensaje || mensaje.length > 200) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' })
        return res.end('<h1>Error 400 - Petición incorrecta</h1><p>El nombre y el mensaje son obligatorios, y el mensaje no puede superar los 200 caracteres.</p><a href="/">Volver al formulario</a>')
      }

      var nuevaFirma = {
        nombre: nombre,
        mensaje: mensaje,
        fecha: new Date().toISOString()
      }
      firmas.push(nuevaFirma)

      res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end('<h1>¡Gracias por firmar, ' + nombre + '!</h1><a href="/">Volver al inicio</a>')
    })
  } 
  else if (req.method === 'GET' && pathname === '/firmas') {
    var filtroNombre = urlObjeto.searchParams.get('nombre')
    var resultado = firmas

    if (filtroNombre) {
      resultado = firmas.filter(function(f) {
        return f.nombre.toLowerCase() === filtroNombre.toLowerCase()
      })
    }

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify(resultado, null, 2))
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('<h1>Error 404</h1><p>La ruta solicitada no existe.</p>')
  }
})

servidor.listen(3000, function() {
  console.log('Servidor en http://localhost:3000')
})