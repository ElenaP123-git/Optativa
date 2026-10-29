const fs = require('fs/promises')

// Función que devuelve una Promesa que se resuelve tras 'ms' milisegundos
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function procesarFicheros() {
  try {
    // Leer la configuración
    const datos = await fs.readFile('config.json', 'utf8')
    const config = JSON.parse(datos)

    // Leer el fichero de entrada
    const texto = await fs.readFile(config.entrada, 'utf8')
    const lineas = texto.trim().split('\n').length
    const informe = `Fichero: ${config.entrada}\nLíneas: ${lineas}\n`

    // Pausa de 1 segundo antes de escribir
    console.log('Esperando 1 segundo...')
    await esperar(1000)

    // Escribir el informe
    await fs.writeFile(config.salida, informe)
    console.log('Informe creado en', config.salida)
  } catch (err) {
    console.error('Error:', err.message)
  }
}

procesarFicheros()