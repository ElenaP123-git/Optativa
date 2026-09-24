
var precio = 30;
var apuestaDado;
var cantidadApostada;

while (precio > 0 || precio < 120 || apuestaDado == 0) {
    var apuestaDado = parseInt(prompt("Introduce la apuesta del dado (1-6):"));
    var cantidadApostada = parseFloat(prompt("Introduce la cantidad apostada:"));

    var resultadoDado = Math.floor(Math.random() * 6) + 1; //número aleatorio (redondeado) entre 1-6

    if(apuestaDado == resultadoDado) {
    precio = precio + 10;
} else{
    alert("Error, el resultado del dado es: " + resultadoDado);
    precio = precio - cantidadApostada;
}
}

