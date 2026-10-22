const fs = require('fs/promises')

async function unir () {
  try {
    // Leemos los 3 ficheros a la vez de forma concurrente con Promise.all
    const [a, b, c] = await Promise.all([
      fs.readFile('a.txt', 'utf8'),
      fs.readFile('b.txt', 'utf8'),
      fs.readFile('c.txt', 'utf8')
    ])

    // Unimos el contenido de los tres
    const texto = a + b + c

    // Escribimos el resultado en todo.txt
    await fs.writeFile('todo.txt', texto)
    console.log('todo.txt creado correctamente')

  } catch (err) {
    console.error('Error:', err.message)
  }
}

unir()