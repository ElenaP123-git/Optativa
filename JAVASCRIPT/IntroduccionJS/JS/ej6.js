
//Pido número
var numero = prompt("Introduce un número:");

//Encabezados por niveles depende del numero
for(i = 0; i < numero; i++) {
    document.write("<h" + (i+1) + ">Encabezado nivel " + (i+1) + "</h" + (i+1) + ">");
    //se pone i+1 porque los encabezados empiezan en 1 y no en 0
}
