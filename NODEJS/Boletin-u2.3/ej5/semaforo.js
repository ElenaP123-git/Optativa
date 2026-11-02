const EventEmitter = require('events')

class Semaforo extends EventEmitter {
  constructor(milisegundos) {
    super()
    this.milisegundos = milisegundos
    this.colorActual = 'verde'
    this.vecesRojo = 0
    this.intervalo = null
  }

  // Arrancar el semáforo
  iniciar() {
    this.intervalo = setInterval(() => {
      // Cambiar de color de forma cíclica
      if (this.colorActual === 'verde') {
        this.colorActual = 'ámbar'
      } else if (this.colorActual === 'ámbar') {
        this.colorActual = 'rojo'
        this.vecesRojo++
      } else if (this.colorActual === 'rojo') {
        this.colorActual = 'verde'
      }

      this.emit('cambio', this.colorActual)

      // Si se pone en rojo, emitir además el evento 'rojo' junto con las veces que ha estado en rojo
      if (this.colorActual === 'rojo') {
        this.emit('rojo', this.vecesRojo)
      }
    }, this.milisegundos)
  }

  parar() {
    clearInterval(this.intervalo)
    this.emit('parado')
  }
}

module.exports = Semaforo