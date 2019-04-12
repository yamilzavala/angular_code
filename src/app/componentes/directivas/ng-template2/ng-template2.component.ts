import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template2',
  templateUrl: './ng-template2.component.html',
  styles: []
})
export class NgTemplate2Component implements OnInit {

  //se inicializa con el valor pasado por el input
  capital: string;

  constructor() { }

  ngOnInit() {
  }

  //retorna true si capital es madrid. Usa funciones para sacar espacios
  setResultado(){
    return this.capital.toLowerCase().trim() === "madrid" ? true : false;
    }

}
