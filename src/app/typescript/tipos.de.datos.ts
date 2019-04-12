/*
Tipos de datos boolean y formas de asignacion
*/
let esBatman: boolean = true;
let esSuperman: Boolean;
let esAquaman = true;


if(esBatman){
    console.log("Estamos salvados");
}else{
    console.log("oppps!!");
}



/*
Una variable puede ser de un tipo funcion. Una funcion puede considerarse como un tipo de dato
*/
function convertirBolean(){
    return false;
}

esBatman = convertirBolean();

if(esBatman){
    console.log("Estamos salvados");
}else{
    console.log("oppps!!");
}



/**
 * Tipos de datos numericos y como declararlos
 */
let avengers: number = 5;
let villanos: number; //undefined
let otros = 2;

if (avengers > otros) {
    console.log("Estamos vivos");
}else{
    console.log("Estamos muertos");
}



/**
 * Tipos de datos String, se definen de 3 formas: "", '', ´´
 */
let batman: string = "Batmannnn";
let linternaVerde: string = 'linternaVerdeeee';
let volcanNegro: string = `volcanNegrooo`;

console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);

let superHeroes: string = batman + " - " + linternaVerde + " - " + volcanNegro;
console.log(superHeroes);

superHeroes = batman.concat(".",linternaVerde,".", volcanNegro);
console.log(superHeroes);

superHeroes = `Los superheroes son: ${ batman }, ${ linternaVerde } y ${ volcanNegro } `;
console.log(superHeroes);



/**
 * Typos any: pueden ser cualquier tipo e ir mutando su valor a lo largo de la ejecucion
 */
let vengador: any = 1;
let existe;

vengador = "Thor";
console.log(vengador.charAt(0));

vengador = 156;
console.log(vengador.toFixed(2));

vengador = true;
console.log(vengador);

console.log(existe);



/**
 * Tipos de dato array
 */
let arrayMarvel: string [] = ["Thor","Spider-man","Iron-man"];
let arrayNumer: number[] = [1,2,3,4,5];

console.log(arrayMarvel.reverse());

arrayMarvel.push("Capitan America");
console.log(arrayMarvel[0].charAt(1));

/**
 * Tipo de dato objeto
 */
let flash: {nombre:string, edad: number, poderes:string[], getNombre:() => string } = { //formazamos a que reciba solo estos datos
    nombre:"Barry Allen",
    edad: 30,
    poderes: ["Puede correr muy rapido", "Puede viajar por el tiempo"],
    getNombre(){
        return this.nombre;
    }
}

console.log(`Datos de flash: ${flash.edad}, ${flash.nombre}, ${flash.poderes}`);

flash = {
    nombre:"Clark Kent",
    edad: 50,
    poderes: ["Puede volar"],
    getNombre(){
        return this.nombre;
    }
}

console.log(`Datos de flash: ${flash.edad}, ${flash.nombre}, ${flash.poderes}`);

/**
 * Tipos personalizados
 */
type Persona = {
    nombre:string, 
    edad: number, 
    poderes:string[], 
    getNombre:() => string
}

let Banner: Persona = {
    nombre:"Banner",
    edad: 40,
    poderes: ["Super fuerza"],
    getNombre(){
        return this.nombre;
    }
}

console.log(`Datos de Banner: ${Banner.edad}, ${Banner.getNombre()}, ${Banner.poderes}`);

