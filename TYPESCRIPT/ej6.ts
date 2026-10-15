//Clase genérica
class Almacen<T> {
    private elementos: T[];

    constructor() {
        this.elementos = [];
    }

    // Método para agregar un elemento al almacén
    public agregarElemento(elemento: T): void {
        this.elementos.push(elemento);
        console.log("Elemento agregado con éxito.");
    }

    // Método para obtener un elemento por su posición (índice)
    public obtenerElemento(indice: number): T | undefined {
        return this.elementos[indice];
    }

    // Método para listar todos los elementos almacenados
    public listarElementos(): void {
        if (this.elementos.length === 0) {
            console.log("El almacén está vacío.");
        } else {
            for (let i = 0; i < this.elementos.length; i++) {
                console.log("Posición " + i + ":", this.elementos[i]);
            }
        }
    }
}


// Almacén de cadenas de texto 
console.log("\n--- ALMACÉN DE TEXTOS ---");
const almacenTextos = new Almacen<string>();

almacenTextos.agregarElemento("Manzana");
almacenTextos.agregarElemento("Plátano");
almacenTextos.agregarElemento("Naranja");

almacenTextos.listarElementos();
console.log("Elemento en la posición 1: " + almacenTextos.obtenerElemento(1));


// Almacén de números 
console.log("\n--- ALMACÉN DE NÚMEROS ---");
const almacenNumeros = new Almacen<number>();

almacenNumeros.agregarElemento(10);
almacenNumeros.agregarElemento(25);
almacenNumeros.agregarElemento(50);

almacenNumeros.listarElementos();


// Almacén de objetos personalizados
// Definimos una interfaz para estructurar los objetos de tipo libro
interface Libro {
    titulo: string;
    autor: string;
    paginas: number;
}

console.log("\n--- ALMACÉN DE OBJETOS (LIBROS) ---");
const almacenLibros = new Almacen<Libro>();

almacenLibros.agregarElemento({ titulo: "El Quijote", autor: "Miguel de Cervantes", paginas: 863 });
almacenLibros.agregarElemento({ titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417 });

almacenLibros.listarElementos();

// Recuperando un objeto específico del almacén
const libroRecuperado = almacenLibros.obtenerElemento(0);
if (libroRecuperado) {
    console.log("Libro recuperado -> Título: " + libroRecuperado.titulo + ", Autor: " + libroRecuperado.autor);
}