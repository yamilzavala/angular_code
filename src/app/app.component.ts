import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {

 

  title = 'hola-mundo';
  nombre: string = 'luis';
  imageURL = 'http://farm6.static.flickr.com/5178/5428759578_d6fb2288a4.jpg';
  statusButton : boolean = true;

  save(e){
    console.log(e);
  }

  accionBoton(e){    
      console.log(e);   
  }

  getNombre (){
    return this.nombre;
  }

  persona = {
    nombre: 'marian',
    edad: 31
  }

}
