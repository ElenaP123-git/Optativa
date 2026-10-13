
//Pido nombre
var nombre = prompt("Por favor, introduce tu nombre:");

if (nombre) {
    var numeroLetras = nombre.length; //length devuelve el número de caracteres de la cadena

    document.write("<h1>Hola " + nombre + "</h1>");
    document.write("<h4>Tu nombre tiene " + numeroLetras + " letras</h4>");
} else {
    document.write("<h1>No has introducido ningún nombre</h1>");
}