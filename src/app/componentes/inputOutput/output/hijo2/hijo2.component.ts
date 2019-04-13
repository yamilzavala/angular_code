import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']  
})
export class Hijo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mensaje: any;

  //Evento que se manda al padre
  @Output() mensajeMarcado = new EventEmitter();

  //Array que es inicializado con valores del padre
  @Input() avisosHijo: string[]; 

  leido: boolean = false;

  //funcion que cambia de true a false
  marcar(event) {
    this.leido = !this.avisosHijo;
  }

  detectar(event) {
    this.mensaje = this.avisosHijo;
    this.mensajeMarcado.emit(this.mensaje);
    }

}
