/**
 *   Vista a fuente:
         • Event Binding  
     
     Uso:    
         • evento=”nombreMetodo()”;    
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html'  
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Se llama pasa el evento desde la vista. Eso dispara una accion desde el modelo
  texto = 'Originalmente el texto se carga asi...';

  modificarTexto(){
      this.texto = 'Al pulsar el botón el texto se muestra así';
  }

}
