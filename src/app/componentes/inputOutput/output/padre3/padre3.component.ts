import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre3',
  templateUrl: './padre3.component.html',
  styles: []
})
export class Padre3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  texto: string;

  //metodo que maneja el evento enviado desde el hijo
  mostrarMensaje(e){
    this.texto = e;
    alert(e);
  }

}
