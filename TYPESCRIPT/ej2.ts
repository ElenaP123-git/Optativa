
//Función contarPalabras
function contarPalabras(texto: string) : number{
    const palabras = texto.trim().split(/\s+/); // trim elimina los espacios en blanco al inicio y al final del texto, y split(/\s+/) divide el texto en palabras usando cualquier cantidad de espacios como separador
    const cantidad = palabras.length; 
    return cantidad;
}

//Funcion getAvenger
function getAvenger(nombre: string, poder?:string, arma = "arco"): string{
    if (poder) {
        return `El superheroe es ${nombre}, su poder es ${poder} y su arma es ${arma}.`; //dos formas de concatenar strings
    } else{
        return "El superheroe es " + nombre + " y su arma es " + arma + ".";
    }
}

console.log("Cantidad de palabras:" + contarPalabras("Hola, ¿cómo estás?")); 
console.log("Avenger:" + getAvenger("Hawkeye", "puntería"));