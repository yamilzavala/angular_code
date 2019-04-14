/**
 * Consume el servicio
 * Se suscribe al servicio: "_appService.mensajeService.subscribe"
 * Guarda las suscripciones en un array: "this.arrayEvenets.push(this._appService...."
 * Elimina las suscripciones al no usarse mas: "event.unsubscribe()...."
 */

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../../body/services/app.service';

@Component({
  selector: 'app-goten',
  template: `
    <div class="gotenComp">
      <h3>Goten Comp</h3>
      <p>{{mensajeGoten}}</p>
    </div>
  `,
  styleUrls: ['./gotenBrother.component.css']
})
export class GotenComponent implements OnInit, OnDestroy
 {
  
  // @Input() mensajeGoten: string;
  public mensajeGoten: string;
  public arrayEvenets: Array<any> = new Array<any>();

  constructor(private _appService: AppService) {
    this.inicializarMje();
   }

  ngOnInit(): void {
    // this.inicializarMje();    
  }
  
  //todas las modicicaiones del sercio se guardan en "escuchandoMensaje"
  inicializarMje(): void {
    this.arrayEvenets.push(this._appService.mensajeService.subscribe((escuchandoMensaje: string) => this.mensajeGoten = escuchandoMensaje));
  }

  ngOnDestroy(): void {
    this.arrayEvenets.forEach(event => event.unsubscribe());
  }
}