const fs = require('fs')
console.log('A')
setTimeout(() => console.log('B'), 0)
fs.readFile('no-existe.txt', 'utf8', (err, datos) => {
  if (err) {
    console.error('Error al leer:', err.message)
    return
  }
  console.log('C')
})
const texto = fs.readFileSync(__filename, 'utf8')
console.log('D', texto.length > 0)
console.log(process.version)
console.log(document.title)