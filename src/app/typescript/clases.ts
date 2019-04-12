
/**
 * Clases y constructores
 */
class Avenger{
    nombre: string = "Sin nombre";
    equipo: string = "test";
    puedePelear: boolean = false;
    peleasGanadas: number = 0;

    constructor( nombre: string, equipo: string){
     this.nombre = nombre;
     this.equipo = equipo;
 }   
}

let thor: Avenger = new Avenger( "Thor" , "Cap" );
console.log(thor);