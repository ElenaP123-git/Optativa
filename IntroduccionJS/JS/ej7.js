
alert("Adivina!!!");
var intentos = 0;
var acierto = false;

while (intentos < 3 && acierto == false) {
    var pregunta = prompt("¿Quién es el pintor de las Meninas?");
    if(pregunta == "Diego Velázquez" || pregunta == "diego velázquez") {
        alert("¡Correcto!");
        acierto = true;
    } else {
        alert("¡Incorrecto! Inténtalo de nuevo.");
        intentos++;
    }
}
