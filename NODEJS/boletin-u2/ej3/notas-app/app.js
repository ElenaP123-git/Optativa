const fs = require('fs/promises')
const pc = require('picocolors')
const { media, aprobados, mejor } = require('./notas')

async function gestionarNotas() {
  try {
    const contenido = await fs.readFile('notas.json', 'utf8')
    const alumnos = JSON.parse(contenido)

    console.log('--- RESUMEN DE CLASE ---')
    
     alumnos.forEach(alumno => {
      const texto = `${alumno.nombre}: ${alumno.nota}`
      if (alumno.nota >= 5) {
        console.log(pc.green(texto))
      } else {
        console.log(pc.red(texto))
      }
    })
    
    const notaMedia = media(alumnos)
    console.log(`Nota media: ${notaMedia.toFixed(2)}`)

    const listaAprobados = aprobados(alumnos)
    console.log(`Número de aprobados: ${listaAprobados.length}`)

    const mejorAlumno = mejor(alumnos)
    if (mejorAlumno) {
      console.log(`Mejor alumno: ${mejorAlumno.nombre} (${mejorAlumno.nota})`)
    }
  } catch (err) {
    console.error('Error al procesar las notas:', err.message)
  }
}

gestionarNotas()