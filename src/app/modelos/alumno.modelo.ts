import {IAlumno} from 'src/app/interfaces/IAlumno';
export class Alumno implements IAlumno{
    id: number;
    nombre: string;
    apellido: string;
    ciudad: string;

    constructor (id:number,nombre:string,apellido:string,ciudad:string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
    }
}