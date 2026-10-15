//Clase animal
class Animal {
    protected nombre: string;
    protected edad: number;
    protected tipoAnimal: string;

    // CONSTRUCTOR
    constructor(nombre: string, edad: number, raza: string, tipoAnimal: string){
        this.nombre = nombre;
        this.edad = edad;
        this.tipoAnimal = tipoAnimal;
    }

    //GETTERS Y SETTERS
    getNombre(): string{
        return this.nombre;
    }
    setNombre(nombre: string): void{
        this.nombre = nombre;
    }
    getEdad(): number{
        return this.edad;
    }
    setEdad(edad: number): void{
        this.edad = edad;
    }

    getTipoAnimal(): string{
        return this.tipoAnimal;
    }
    setTipoAnimal(tipoAnimal: string): void{
        this.tipoAnimal = tipoAnimal;
    }

    //MÉTODOS
    public hacerRuido(){
    }
}

class Perro extends Animal{
    private raza: string;

    //CONSTRUCTOR
    constructor(nombre: string, edad: number, raza: string, tipoAnimal: string){
        super(nombre, edad, raza, tipoAnimal);
        this.raza = raza;
    }

    //GETTERS Y SETTERS
    getRaza(): string{
        return this.raza;
    }

    setRaza(raza: string){
        this.raza = raza;
    }

    //MÉTODO SOBREESCRITO
    public hacerRuido(): void {
        console.log(`${this.nombre} ladra: GUAU GUAU GUAU.`);
    }

    //MÉTODO PROPIO
    public traerPelota(): void {
        console.log(`${this.nombre} está corriendo felizmente a buscar la pelota.`);
    }
}

class Pájaro extends Animal{
    private altitudVuelo: number;

    constructor(nombre: string, edad: number, tipoAnimal: string, altitudVuelo: number){
        super(nombre, edad, "", tipoAnimal);
        this.altitudVuelo = altitudVuelo;
    }

    getAltitudVuelo(): number{
        return this.altitudVuelo;
    }

    setAltitudVuelo(altitudVuelo: number){
        this.altitudVuelo = altitudVuelo;
    }

    public hacerRuido(): void {
        console.log(`${this.nombre} canta: ¡Pío, pío, trino! `);
    }

    public volar(): void {
        console.log(`${this.nombre} ha despegado y puede volar hasta a ${this.altitudVuelo} metros de altura.`);
    }
}

//PRUEBAS
console.log("\n--- PROBANDO LA CLASE PERRO ---");
const miPerro = new Perro("Firulais", 4, "Golden Retriever", "Perro");
console.log(`Nombre: ${miPerro.getNombre()}, Edad: ${miPerro.getEdad()}, Raza: ${miPerro.getRaza()}`);
miPerro.hacerRuido();
miPerro.traerPelota();

console.log("\n--- PROBANDO LA CLASE PÁJARO ---");
const miPajaro = new Pájaro("Piolín", 1, "Pájaro", 100);
console.log(`Nombre: ${miPajaro.getNombre()}, Tipo: ${miPajaro.getTipoAnimal()}, Altura máx: ${miPajaro.getAltitudVuelo()}`);
miPajaro.hacerRuido();
miPajaro.volar();
