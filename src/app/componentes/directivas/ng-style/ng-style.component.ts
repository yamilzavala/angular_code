/**
 * USO: [ngStyle]=”{ expresión/propiedad/método }
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: []
})
export class NgStyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }
  
  //si puntuacion es >= 5, retorna verde, sino rojo. Lo usa para dar color al h4
  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red';
    }
}
