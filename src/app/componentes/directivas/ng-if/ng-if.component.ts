/**
 *  Con esta directiva condicionamos que un elemento html se muestre o no en
    función de que se cumpla la expresión que define, normalmente una propiedad
    o método. Su sintaxis básica es.
    
    USO: *ngIf=”expresión/propiedad/metodo”
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styles: []
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre: string;;

}
