/**
 * Este componente consume el servicio e inicializa la variable output del servicio que se mandara a otro componente
 * Se emite el mje que se ingreso en el input
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../../../body/services/app.service';

@Component({
  selector: 'app-gohan-brother',
  template: `
    <div class="gohanComp">
        <div class="row">
          <h3 class="pl-3 titulo">Gohan Comp</h3>
        </div>
        Escribe el mensaje para goten
        <input #msg name="msg" type="text"class="form-control">
        <button type="button" class="mt-2 btn btn-success" (click)="enviarMensaje(msg.value)">
            Enviar mensaje
        </button>
    </div>
  `,
  styleUrls: ['./gohanBrother.component.css']
})
export class GohanBrotherComponent {
 // @Output() mensajeDesdeGohan = new EventEmitter<string>();
  constructor(private _appService: AppService) { }
  
  enviarMensaje(mensajeDesdeGohan: string){
    // this.mensajeDesdeGohan.emit(mensaje);
    this._appService.mensajeService.emit(mensajeDesdeGohan);
  }

}