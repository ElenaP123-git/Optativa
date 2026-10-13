//1.1 Mostrar título tal como está y luego en mayúsculas
var titulo = document.title;
console.log("Título original: " + tituloOriginal);
console.log("Título en mayúsculas: " + tituloOriginal.toUpperCase());

//1.2 Cambiar nombre a los input
var inputNombre = document.getElementById("nombre");
var inputApellido = document.getElementById("apellido");
var nombre = inputNombre.value = "Elena"; //se pone value para cambiar el valor del input
var apellido = inputApellido.value = "Pablo";

//1.3 Añadir texto a la etiqueta p
var saludo = document.getElementById("saludo");
saludo.textContent = "Hola, " + nombre + " " + apellido + "!"; //el textContent cambia el contenido de la etiqueta p

//1.4 Añadir una etiqueta p justo despues del saludo
var nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "¿Qué tal estás?";
saludo.insertAdjacentElement("afterend", nuevoParrafo); //afterend inserta el nuevo elemento después del elemento seleccionado

//1.5 Cambiar el texto del label apellido a "Apellidos" con querySelector()
var labelApellido = document.querySelector("label[for='apellido']"); //el querySelector selecciona el primer elemento que coincida con el selector CSS
labelApellido.textContent = "Apellidos";