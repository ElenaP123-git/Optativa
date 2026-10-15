// CLASE EMPLOYEE
class Employee{
    private nombre: string;
    private apellido: string;
    private edad: number;
    private fechaInicioTrabajo: Date | null;
    private fechaFinTrabajo: Date;
    private profesion: string;

    // CONSTRUCTOR
    constructor(nombre: string, apellido: string, edad: number, fechaInicioTrabajo: Date | null, fechaFinTrabajo: Date, profesion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicioTrabajo = fechaInicioTrabajo;
        this.fechaFinTrabajo = fechaFinTrabajo;
        this.profesion = profesion;
    }

    //GETTERS Y SETTERS
    getNombre(): string{
        return this.nombre;
    }

    setNombre(nombre: string): void{
        this.nombre = nombre;
    }

    getApellido(): string{
        return this.apellido;
    }

    setApellido(apellido: string): void{
        this.apellido = apellido;
    }

    getEdad(): number{
        return this.edad;
    }

    setEdad(edad: number): void{
        this.edad = edad;
    }

    getFechaInicioTrabajo(): Date | null{
        return this.fechaInicioTrabajo;
    }

    setFechaInicioTrabajo(fechaInicioTrabajo: Date | null): void{
        this.fechaInicioTrabajo = fechaInicioTrabajo;
    }

    getFechaFinTrabajo(): Date{
        return this.fechaFinTrabajo;
    }

    setFechaFinTrabajo(fechaFinTrabajo: Date): void{
        this.fechaFinTrabajo = fechaFinTrabajo;
    }

    getProfesion(): string{
        return this.profesion;
    }

    setProfesion(profesion: string): void{
        this.profesion = profesion;
    }   
    
    //TOSTRING
    toString(): string{
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Fecha de inicio de trabajo: ${this.fechaInicioTrabajo}, Fecha de fin de trabajo: ${this.fechaFinTrabajo}, Profesión: ${this.profesion}`;
    }
}

// Crear dos empleados
    const empleado1 = new Employee("Juan", "Pérez", 30, new Date("2020-01-01"), new Date("2023-12-31"), "Ingeniero");
    const empleado2 = new Employee("María", "Gómez", 28, null, new Date("2024-06-30"), "Diseñadora");

//Mostrar por consola (2 opciones)
console.log(empleado1.toString()); //1
console.log(empleado2.toString());

const listaEmpleados: Employee[] = [empleado1, empleado2]; //2
for (const empleado of listaEmpleados) {
    console.log(empleado.toString());
}
