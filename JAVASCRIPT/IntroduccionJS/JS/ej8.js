var precio = 30;
var apuestaDado;
var cantidadApostada;
var resultadoDado;

while (precio > 0 && precio < 120 && apuestaDado != 0) {

    apuestaDado = parseInt(prompt("Saldo: " + precio + "€\nIntroduce el número del dado (1-6) o 0 para salir:"));

    if (apuestaDado >= 1 && apuestaDado <= 6) {
        cantidadApostada = parseFloat(prompt("¿Cuánto quieres apostar? (Máximo " + precio + "€):"));

        if (cantidadApostada > 0 && cantidadApostada <= precio) {
            resultadoDado = Math.floor(Math.random() * 6) + 1; //número aleatorio entre 1-6

            if (apuestaDado == resultadoDado) {
                precio = precio + 10; 
                alert("¡Acertaste! Salió el " + resultadoDado + ".\nTu saldo sube a: " + precio + "€");
            } else {
                precio = precio - cantidadApostada;
                alert("Fallaste. Salió el " + resultadoDado + ".\nTu saldo baja a: " + precio + "€");
            }

        } else {
            alert("Cantidad no válida.");
        }

    } else if (apuestaDado !== 0) {
        alert("Número de dado no válido. Debe ser del 1 al 6.");
    }
}

// Mensaje de salida cuando el bucle termina
if (apuestaDado == 0) {
    alert("Has salido del juego con " + precio + "€.");
} else if (precio >= 120) {
    alert("¡Enhorabuena! Has alcanzado los " + precio + "€ y has ganado.");
} else if (precio <= 0) {
    alert("Te has quedado sin dinero. Fin del juego.");
}
