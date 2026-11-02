const Semaforo = require('./semaforo')

var miSemaforo = new Semaforo(1000)

miSemaforo.on('cambio', function(color) {
  console.log('El semáforo cambia a: ' + color)
})

miSemaforo.once('rojo', function() {
  console.log('(primer rojo: ¡frena!)')
})

miSemaforo.on('rojo', function(vecesRojo) {
  if (vecesRojo === 2) {
    miSemaforo.parar()
  }
})

miSemaforo.on('parado', function() {
  console.log('Semáforo apagado')
})

// Arrancar el semáforo
miSemaforo.iniciar()