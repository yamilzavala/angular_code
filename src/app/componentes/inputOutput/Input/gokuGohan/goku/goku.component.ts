import { Component } from '@angular/core';

@Component({
  selector: 'app-goku',
  template: `
  <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
            <h1 class="mx-4">Goku Component</h1>
            <input 
              class="mx-2 form-control"
              #gokuInput
              (keyup)="keyUp(gokuInput.value)">
            <div class="col-sm-12">
              <app-gohan [kamehamehaGohan]="kamehamehaGoku"></app-gohan>
            </div>
        </div>
          
      </div>
    </div>
  `,
  styleUrls: ['./gokuInput.component.css']
})
export class GokuInputComponent {

  // Se declara en el componente padre para luego comunicarlo al componente hijo
  kamehamehaGoku: string = '';

  keyUp(mensaje: string) {
    this.kamehamehaGoku = mensaje;
  }

  constructor() { }

}