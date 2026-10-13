function anadirProducto() {
    var producto = prompt("Introduce el producto a añadir:");

    if (producto !== null && producto !== "") {
        var nuevoItem = document.createElement("li");
        nuevoItem.textContent = producto;
        var lista = document.getElementById("listaProductos");
        lista.appendChild(nuevoItem);
    }
}