//Pedir la lista de nombres separados por coma
var entrada = prompt("Introduce una lista de nombres separados por comas (ej: María, Juan, Pedro):");

if (entrada) {
    var lista = entrada.split(",");

    for (var i in lista) {
        // .trim() elimina espacios en blanco alrededor de cada nombre
        var nombre = lista[i].trim();
        
        // Escribir el saludo en la página HTML
        document.write("<h1>Hola " + nombre + "</h1>");
    }
} else {
    document.write("<h1>No se ha introducido ninguna lista de nombres.</h1>");
}