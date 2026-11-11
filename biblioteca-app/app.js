const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// iddleware de registro de peticiones (Hora, Método y URL)
app.use(function(req, res, next) {
  var fecha = new Date()
  var hora = fecha.toTimeString().split(' ')[0]
  console.log(hora + ' ' + req.method + ' ' + req.url)
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

const libros = [
  { titulo: 'El Quijote', autor: 'Miguel de Cervantes', anio: 1605, disponible: true },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1967, disponible: false },
  { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', anio: 2001, disponible: true },
  { titulo: 'Clean Code', autor: 'Robert C. Martin', anio: 2008, disponible: false },
  { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', anio: 2007, disponible: true }
]

// Ruta de Inicio
app.get('/', function(req, res) {
  res.render('index', { titulo: 'Inicio' })
})

app.get('/horario', function(req, res) {
  var horarios = [
    { dia: 'Lunes', horas: '8:30-14:30' },
    { dia: 'Martes', horas: '8:30-14:30' },
    { dia: 'Miércoles', horas: '8:30-14:30' },
    { dia: 'Jueves', horas: '8:30-14:30 y 16:00 - 19:00' },
    { dia: 'Viernes', horas: '8:30-13:30' }
  ]
  res.render('horario', { titulo: 'Horario', horarios: horarios })
})

// Ruta para ver todos los libros
app.get('/libros', function(req, res) {
  res.render('libros', { 
    titulo: 'Catálogo de Libros', 
    libros: libros, 
    subtitulo: 'Todos los libros' 
  })
})

// Ruta para ver solo los libros disponibles
app.get('/libros/disponibles', function(req, res) {
  var librosDisponibles = libros.filter(function(libro) {
    return libro.disponible
  })
  res.render('libros', { 
    titulo: 'Libros disponibles', 
    libros: librosDisponibles, 
    subtitulo: 'Libros disponibles' 
  })
})

app.use(function(req, res) {
  res.status(404).render('404', { titulo: 'Página no encontrada' })
})

app.listen(PORT, function() {
  console.log('Servidor en http://localhost:' + PORT)
})