// Capturar el texto que pasan por la terminal
var texto = process.argv[2]

if (!texto) {
  console.log('Por favor, introduce un texto entre comillas.')
  process.exit(1)
}

var caracteres = texto.length

var bytes = Buffer.byteLength(texto, 'utf8')

var bufferContenido = Buffer.from(texto, 'utf8')

console.log('Texto:', texto)
console.log('Caracteres:', caracteres)
console.log('Bytes:', bytes)
console.log('Buffer:', bufferContenido)

// Rellenar un Buffer con el abecedario en mayúsculas 
var abecedarioBuffer = Buffer.alloc(26)
for (var i = 0; i < 26; i++) {
  abecedarioBuffer[i] = 65 + i
}

console.log('Abecedario:', abecedarioBuffer.toString())