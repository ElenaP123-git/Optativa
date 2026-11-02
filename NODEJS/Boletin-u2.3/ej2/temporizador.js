// Capturar los segundos del argumento de la terminal
var segundosTotales = parseInt(process.argv[2])

var mensaje = process.argv.slice(3).join(' ')
if (mensaje === '') {
  mensaje = '¡Tiempo!'
}

if (isNaN(segundosTotales) || segundosTotales <= 0 || !Number.isInteger(Number(process.argv[2]))) {
  console.error('Error: Debes indicar un número entero de segundos mayor que 0.')
  console.error('Uso correcto: node temporizador.js <segundos> <mensaje>')
  process.exit(1)
}

var segundosRestantes = segundosTotales

// Iniciar el cronómetro 
console.time('Duración total')

var mitadMilisegundos = (segundosTotales * 1000) / 2
setTimeout(function() {
  console.log('¡Ya vas por la mitad!')
}, mitadMilisegundos)

// setInterval para mostrar los segundos que quedan cada segundo
var intervalo = setInterval(function() {
  console.log('Quedan ' + segundosRestantes + ' s')
  segundosRestantes--

  // Al llegar a 0 o menos, para el intervalo, mostramos el mensaje y el tiempo transcurrido
  if (segundosRestantes < 0) {
    clearInterval(intervalo)
    console.log(mensaje)
    console.timeEnd('Duración total')
  }
}, 1000)