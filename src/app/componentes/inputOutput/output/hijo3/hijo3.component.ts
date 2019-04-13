/**
 * 1. Desde hijo.ts se declara variable de tipo @Output y se la inicializa como un objeto con EvenEmitter: @Output() eventChild = new EventEmitter(); 
 *    Se crea variable de cualquier tipo a ser enviada por el output: textChild: string = "mje enviado desde hijo"
 *    Se crea metodo para emitir el output:  enviar(event) 
 *    Desde hijo.html, se debe crear un objeto para llamar al evento; puede ser un click en un boton por ejemplo: <button (click)=enviar($event);....  
 * 
 * 3. Desde el padre.ts se crea metodo que maneja el output enviado: mostrarMensaje(e){
 * 3. Desde padre.html se llama hijo.html. (eventChild)="mostrarMensaje($event). Donde eventChild es el nombre del evento output y donde mostrarMensaje es el metodo desde el padre, que maneja el output devuelto
 * 4. 
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo3',
  templateUrl: './hijo3.component.html',
  styles: []
})
export class Hijo3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //texto a enviar
  textChild: string = "mje enviado desde hijo";

  //Evento
  @Output() eventChild = new EventEmitter();

  //envio de evento
  enviar(event){
    this.eventChild.emit(this.textChild);
  }
}
