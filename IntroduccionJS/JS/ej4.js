
//Título Lenguaje de marcas
document.write("<h1>Lenguaje de marcas</h1>");

//Media
var mediaPractica = prompt("Introduce la media de tus notas:");
var nota = prompt("Introduce la nota de tu examen:");
var notaActitud = prompt("Introduce la nota de actitud:");

//Aprobado o suspenso
var mediaFinal = (parseFloat(mediaPractica) + parseFloat(nota) + parseFloat(notaActitud)) / 3;
if (mediaFinal >= 5) {
    document.write("<h2>Has aprobado con una media de: " + mediaFinal.toFixed(2) + "</h2>");
} else {
    document.write("<h2>Has suspendido la asignatura.</h2>");
}
