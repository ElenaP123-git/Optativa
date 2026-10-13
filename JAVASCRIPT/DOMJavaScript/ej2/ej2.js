function mostrarEnlace(enlace) {
    document.getElementById("direccion").value = enlace.href;
    return false; // Evita que el enlace se abra
}