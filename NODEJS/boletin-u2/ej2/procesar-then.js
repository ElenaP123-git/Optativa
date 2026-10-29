const fs = require('fs/promises')

let configuracion

fs.readFile('config.json', 'utf8')
  .then(datos => {
    configuracion = JSON.parse(datos)
    return fs.readFile(configuracion.entrada, 'utf8')
  })
  .then(texto => {
    const lineas = texto.trim().split('\n').length
    const informe = `Fichero: ${configuracion.entrada}\nLíneas: ${lineas}\n`
    return fs.writeFile(configuracion.salida, informe)
  })
  .then(() => {
    console.log('Informe creado en', configuracion.salida)
  })
  .catch(err => {
    console.error('Error:', err.message)
  })