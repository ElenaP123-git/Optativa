var fs = require('fs')

// Preguntar al usuario qué fichero quiere copiar
process.stdout.write('¿Qué fichero quieres copiar? ')

process.stdin.once('data', function(datos) {
  var origen = datos.toString().trim()
  var destino = 'MAYUS-' + origen
  var bytesLeidos = 0

  // Crear el flujo de lectura y escritura
  var lectura = fs.createReadStream(origen, 'utf8')
  var escritura = fs.createWriteStream(destino)

  lectura.on('error', function(err) {
    console.error('Error: El fichero no existe o no se puede leer.')
    process.exit(1)
  })

  // Leer los trozos, pasar a mayúsculas y escribir
  lectura.on('data', function(trozo) {
    var trozoMayus = trozo.toUpperCase()
    bytesLeidos += Buffer.byteLength(trozoMayus, 'utf8')
    escritura.write(trozoMayus)
  })

  escritura.on('finish', function() {
    console.log('Creado ' + destino + ' (' + bytesLeidos + ' bytes)')
    process.exit(0)
  })
})