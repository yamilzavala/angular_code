/**
 * Este servicio seria el output. Guarda el mje a emitir a otro componente
 */

import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  @Output() mensajeService: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }
}
