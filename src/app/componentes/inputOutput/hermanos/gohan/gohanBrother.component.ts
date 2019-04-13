import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gohan-brother',
  template: `
    <div class="gohanComp">
        <div class="row">
          <h3 class="pl-3 titulo">Gohan Comp</h3>
        </div>
        Escribe el mensaje para goten
        <input
          #msg 
          name="msg" 
          type="text"
          class="form-control">
        <button 
          type="button" 
          class="mt-2 btn btn-success" 
          (click)="enviarMensaje(msg.value)">
            Enviar mensaje
        </button>
    </div>

  `,
  styleUrls: ['./gohanBrother.component.css']
})
export class GohanBrotherComponent {
  @Output() mensajeDesdeGohan = new EventEmitter<string>();

  enviarMensaje(mensaje: string){
    this.mensajeDesdeGohan.emit(mensaje);
  }

  constructor() { }
}