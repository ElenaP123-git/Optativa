const fs = require('fs')
const path = require('path')

// Comprobamos si nos pasan una carpeta por la terminal; si no, usamos la actual del script
const rutaCarpeta = process.argv[2] || __dirname

try {
  // Lee el contenido de la carpeta
  const elementos = fs.readdirSync(rutaCarpeta, { withFileTypes: true })
  const conteo = {}

  // Recorre los elementos
  elementos.forEach(function(elemento) {
    if (elemento.isFile()) {
      var extension = path.extname(elemento.name)
      var clave = (extension === '') ? '(sin extensión)' : extension
      
      if (conteo[clave]) {
        conteo[clave]++
      } else {
        conteo[clave] = 1
      }
    }
  })

  // Mostrar en forma de tabla en la consola
  var resultado = Object.keys(conteo).map(function(ext) {
    return {
      Extensión: ext,
      Ficheros: conteo[ext]
    }
  })

  console.table(resultado)

} catch (error) {
  console.error('Ha ocurrido un error al leer la carpeta:', error.message)
}