 /**
  *data binding  comuinicacion entre (archivo TypeScript) y (archivo HTML). 
  Modelo a Vista:
    • Interpolación. {{}}
    • Property Binding [] = expresion

  Vista a fuente:
   • Event Binding  

  Ambas direcciones:
   • Two-way Binding 
  */

import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno.modelo';


@Component({
  selector: 'app-data-binding',
  templateUrl: './interpolacion.component.html',
  styles: []
})
export class DataBindingComponent implements OnInit {

  alumno1 = new Alumno(1,"Juan","Gutierrez","Madrid");

  getIdAlumno(){
    return this.alumno1.id;
  }

  constructor() { }

  ngOnInit() {
  }

}
