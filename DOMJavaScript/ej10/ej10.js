var productos = [
    { id: 1, nombre: 'Patata', precio: 1, imagen: 'patata.jpg' },    // Cambia la extensión si es .png
    { id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla.jpg' }, // Cambia la extensión si es .jpeg
    { id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin.jpg' },
    { id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas.jpg' }
];

window.onload = function() {
    var contenedor = document.getElementById("contenedorProductos");

    for (var i = 0; i < productos.length; i++) {
        var prod = productos[i];

        // Tarjeta es el contenedor para los productos
        var tarjeta = document.createElement("div");
        tarjeta.className = "producto"; 

        // Imagen
        var img = document.createElement("img");
        img.src = "img/" + prod.imagen;

        // Texto
        var titulo = document.createElement("h3");
        titulo.textContent = prod.nombre;

        var precio = document.createElement("p");
        precio.textContent = prod.precio + "€";

        // Botón Disponible 
        var boton = document.createElement("button");
        boton.textContent = "Disponible";
        boton.className = "disabled";

        
        boton.onclick = function() {
            if (this.className === "disabled") {
                this.className = "enabled";
            } else {
                this.className = "disabled";
            }
        };

        // Meter todo en la tarjeta y la tarjeta en el contenedor
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    }
};