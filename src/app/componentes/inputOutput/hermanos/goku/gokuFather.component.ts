import { Component } from '@angular/core';

@Component({
  selector: 'app-goku-father',
  template: `
  <div class="container">
    <div class="row">
      <h3 class="titulo">Goku Comp</h3>
    </div>
    <div class="row">
      <div class="col-5">
        <app-gohan-brother class="gohanComp" ></app-gohan-brother>
      </div>
      <div class="col-2"></div>
      <div class="col-5">
        <app-goten class="gotenComp"></app-goten>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./gokuFather.component.css']
})
export class GokuFatherComponent {
  //enviarAGoten: string;

  // mensajeParaGoten(mensaje: string){
  //   this.enviarAGoten = mensaje;
  // }

  constructor() { }

}