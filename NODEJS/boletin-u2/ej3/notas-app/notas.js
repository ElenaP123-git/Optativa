// media de las notas (con reduce)
function media(lista) {
  if (lista.length === 0) return 0
  const suma = lista.reduce((acumulador, alumno) => acumulador + alumno.nota, 0)
  return suma / lista.length
}

// alumnos con nota mayor o igual a 5 (con filter)
function aprobados(lista) {
  return lista.filter(alumno => alumno.nota >= 5)
}

// alumno con la nota más alta (con reduce)
function mejor(lista) {
  if (lista.length === 0) return null
  return lista.reduce((max, alumno) => (alumno.nota > max.nota ? alumno : max))
}

module.exports = {
  media,
  aprobados,
  mejor
}