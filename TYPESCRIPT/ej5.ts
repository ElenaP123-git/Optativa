// Interfaz
interface DispositivoElectronico{
    // atributos
    nombre: string;
    encendido: boolean;

    // métodos
    encender(): void;
    apagar(): void;
}

class Laptop implements DispositivoElectronico{
    nombre: string;
    encendido: boolean;
    modelo: string;

    constructor(nombre: string, modelo: string){
        this.nombre = nombre;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender(): void{
        this.encendido = true;
        console.log("Dispositivo " + this.nombre + " encendido");
    }

    apagar(): void {
        this.encendido = false;
        console.log("Dispositivo " + this.nombre + " apagado");
    }

    public abrirPrograma(programa: string): void{
        if(this.encendido){
            console.log("Abriendo el programa '" + programa + "' en la laptop " + this.nombre + "...");
        } else{
            // Corregido el doble console.log y cambiado a comillas dobles
            console.log("No se puede abrir '" + programa + "': La laptop " + this.nombre + " está apagada.");
        }
    }

    public getModelo(): string{
        return this.modelo;
    }
}

class Smartphone implements DispositivoElectronico{
    nombre: string;
    encendido: boolean;
    marca: string;

    constructor(nombre: string, marca: string){
        this.nombre = nombre;
        this.encendido = false;
        this.marca = marca;
    }

    encender(): void {
        this.encendido = true;
        console.log("El smartphone '" + this.nombre + "' (" + this.marca + ") se ha encendido.");
    }

    apagar(): void {
        this.encendido = false;
        console.log("El smartphone '" + this.nombre + "' se ha apagado.");
    }
    
    public llamar(numero: string): void{
        if(this.encendido){
            console.log("Llamando al número " + numero + " desde el " + this.nombre + " (" + this.marca + ")...");
        } else{
            console.log("No se puede realizar la llamada: El smartphone " + this.nombre + " está apagado.");
        }
    }

    public getMarca(): string{
        return this.marca;
    }
}

// Pruebas
console.log("\n--- PRUEBAS CON LAPTOP ---");
const miLaptop = new Laptop("MacBook Pro", "M3 Max");
miLaptop.abrirPrograma("Visual Studio Code"); // Debería salir que está apagada
miLaptop.encender();                           // Encendemos
miLaptop.abrirPrograma("Visual Studio Code"); // Ahora sí abre
miLaptop.apagar();                             // Apagamos


console.log("\n--- PRUEBAS CON SMARTPHONE ---");
const miSmartphone = new Smartphone("Galaxy S24", "Samsung");
miSmartphone.llamar("+34600123456");         // Debería salir que está apagado
miSmartphone.encender();                      // Encendemos
miSmartphone.llamar("+34600123456");         // Ahora sí llama
miSmartphone.apagar();                         // Apagamos