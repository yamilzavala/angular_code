/**
 * ngFor=”let objeto/propiedad of objetos/propiedades
 * 
 * En esta sintaxis, se crea dentro del elemento html una variable local con let que
   recorrerá el array definido por of y proveniente del componente. Como buena
   práctica, el nombre de la variable local será singular y el del array plural.
 */
import { Alumno } from 'src/app/modelos/alumno.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styles: []
})
export class NgForComponent implements OnInit {

  cursos: string[];

  constructor() {
    this.cursos = ['Angular', 'HTML', 'CSS'];
   }

  alumnos: Array<Alumno> = [
    {id:1,nombre:'juan',apellido:'Soza',ciudad:'Cordoba'},
    {id:2,nombre:'Mariano',apellido:'Moreno',ciudad:'Buenos Aires'},
  ]; 



  ngOnInit() {
  }

}
