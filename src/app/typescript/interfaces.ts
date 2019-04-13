/**
 * Interfaces: definidas para forzar tipos de datos a objetos
 */
interface Ixmen {
    nombre: string;
    poder: string;
}

let wolverine: Ixmen = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};

function enviandoAlCuartel(xmen: Ixmen){
    console.log( `Enviando al cuartel a: ${ xmen.nombre }` );
}

enviandoAlCuartel(wolverine);