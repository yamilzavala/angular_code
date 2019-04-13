/**
 * ngSwitch: Permite ejecutar casos condicionales sobre elementos del DOM.
 * Esta directiva corresponde a una seria de directivas que cooperan entre si para generar un resultado
 * La directiva ngSwitch es una directiva de atributo, mientras que las directivas ngSwitchCase y ngSwitchDefault corresponden a directivas estructurales.
 * 
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() {
    console.log(this.persona);
   }

  ngOnInit() {
  }

  jugadores: any[] = [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls'}
    ];

  //Ejemplo 2 de uso de ngSwitch y ngSwithCase
  persona:any = [
    {id: 1, nombre:"yamil"},
    {id: 2, nombre:"pablo"},
    {id: 3, nombre:"luis"}
  ];  

  //Ejemplo 3 de uso de ngSwitch y ngSwithCase
  estado:number[] = [1,2,3,4];  

}
