
/*
//window.onload es una función que se ejecuta cuando la página web ha terminado de cargarse completamente
window.onload = function() {
    // Asignar ciudad y gastos
    document.getElementById("ciudad").textContent = "Sevilla";
    document.getElementById("gastos").textContent = "3€";

    // Obtener fecha actual
    var hoy = new Date();
    var fechaFormateada = hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear(); //es + 1 porque los meses en JavaScript van de 0 a 11
    
    document.getElementById("fecha").textContent = fechaFormateada;
}; */

//Con prompts
window.onload = function() {
    var ciudadUsuario = prompt("Introduce la ciudad:");
    var gastosUsuario = prompt("Introduce los gastos de envío (€):");

    document.getElementById("ciudad").textContent = ciudadUsuario;
    document.getElementById("gastos").textContent = gastosUsuario + "€";

    var hoy = new Date();
    var fechaFormateada = hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();
    
    document.getElementById("fecha").textContent = fechaFormateada;
};