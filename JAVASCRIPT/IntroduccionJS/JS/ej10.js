var entrada = prompt("Introduce una lista de nombres separados por comas:");

if (entrada) {
    var lista = entrada.split(",");

    for (var i in lista) {
        lista[i] = lista[i].trim();
    }

    // Mostrar el saludo para cada una de las personas
    for (var i in lista) {
        document.write("<h1>Hola " + lista[i] + "</h1>");
    }

    // .length para el tamaño de la lista
    document.write("<p><strong>Número total de personas:</strong> " + lista.length + "</p>");

    // Mostrar la primera persona de la lista
    document.write("<p><strong>Primera persona:</strong> " + lista[0] + "</p>");

    // Mostrar la última persona de la lista
    var ultimaPosicion = lista.length - 1;
    document.write("<p><strong>Última persona:</strong> " + lista[ultimaPosicion] + "</p>");

    // 7. Mostrar por consola el array ordenado A-Z y Z-A
    // .slice() para hacer una copia del array y .sort() para ordenarlo alfabéticamente (si la lista fuera de números así-> numeros.sort((a, b) => a - b);)
    var listaAZ = lista.slice().sort();
    console.log("Array ordenado de la A-Z:", listaAZ);

    var listaZA = lista.slice().sort().reverse();
    console.log("Array ordenado de la Z-A:", listaZA);

} else {
    document.write("<h1>No se ha introducido ninguna lista de nombres.</h1>");
}