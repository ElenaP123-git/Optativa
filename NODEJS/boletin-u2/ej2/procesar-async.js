const fs = require('fs/promises')

async function procesarFicheros() {
  try {
    // Leer configuración
    const datos = await fs.readFile('config.json', 'utf8')
    const config = JSON.parse(datos)

    // Leer el fichero de entrada especificado en la configuración
    const texto = await fs.readFile(config.entrada, 'utf8')
    const lineas = texto.trim().split('\n').length
    const informe = `Fichero: ${config.entrada}\nLíneas: ${lineas}\n`

    // Escribir el informe resultante
    await fs.writeFile(config.salida, informe)
    console.log('Informe creado en', config.salida)
  } catch (err) {
    // Si ocurre cualquier error en el bloque try, se captura aquí de forma unificada
    console.error('Error:', err.message)
  }
}

// Ejecutamos la función principal
procesarFicheros()