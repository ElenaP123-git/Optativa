
//Pido nombre y modelo ordenador
var nombreMarca = prompt("Introduce el nombre de tu ordenador:");
var modelo = prompt("Introduce el modelo de tu ordenador:");
var precio = 1000;

if(nombreMarca =="MSI" && modelo == "PRESTIGE") {
    precio * 0.95;
}
else if (nombreMarca == "HP" && modelo == "Pavilion") {
    precio * 0.90;
}

document.write("<h1>El precio de tu ordenador " + nombreMarca + " " + modelo + " es: " + precio + "</h1>");