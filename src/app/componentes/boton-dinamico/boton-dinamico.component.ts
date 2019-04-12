import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-dinamico',
  templateUrl: './boton-dinamico.component.html',
  styles: []
})
export class BotonDinamicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Se modifica el texto del boton y de un h3 dinamicamente 
   */

  textoBoton = 'Modificar'
  bandera = false;
  texto = 'Originalmente el texto se carga asi...';

  modificarTexto(){
      if(this.bandera){
        this.texto = 'Originalmente el texto se carga asi...';
        this.bandera = false;
        this.textoBoton = 'Modificar';
      }else{
        this.texto = 'Al pulsar el botón el texto se muestra así';
        this.bandera = true;
        this.textoBoton = 'Modificado';
      }      
  }

}
