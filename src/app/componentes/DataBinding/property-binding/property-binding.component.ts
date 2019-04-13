import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  /**
   * modelo a vista
   * [propiedad] = propiedad
   * Pasados 3 segundos, se cambia el valor del imput del html... 
   */
  texto = 'Escribe algo';

  constructor() { 
    setTimeout( () => this.texto='Por favor...' , 3000);
  }

  ngOnInit() {
  }

}
