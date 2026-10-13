function anadirProducto() {
    var producto = prompt("Introduce el producto a añadir:");

    if (producto !== null && producto !== "") {
        var nuevoItem = document.createElement("li");

        var textoProducto = document.createElement("span");
        textoProducto.textContent = producto + " "; //se pone " " para que haya un espacio entre el texto y los botones

        // Botón SÍ 
        var botonSi = document.createElement("button");
        botonSi.textContent = "SÍ";
        botonSi.onclick = function() { //creo una funcion onclick
            textoProducto.style.color = "green";
            textoProducto.style.fontStyle = "italic"; // Cursiva
            textoProducto.style.fontWeight = "normal"; // Quitamos negrita si la tenía
        };

        // Botón NO
        var botonNo = document.createElement("button");
        botonNo.textContent = "NO";
        botonNo.onclick = function() {
            textoProducto.style.color = "red";
            textoProducto.style.fontWeight = "bold"; // Negrita
            textoProducto.style.fontStyle = "normal"; // Quitamos cursiva si la tenía
        };

        // Se utiliza appendChild para añadir los elementos al <li> en el orden deseado
        nuevoItem.appendChild(textoProducto);
        nuevoItem.appendChild(botonSi);
        nuevoItem.appendChild(botonNo);

        // Añadimos el <li> completo de los items a la lista <ul>
        var lista = document.getElementById("listaProductos");
        lista.appendChild(nuevoItem);
    }
} 