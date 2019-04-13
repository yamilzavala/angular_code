import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gohan',
  template: `
    <div class="gohanComp">
      <h3>Gohan Comp</h3>
      <p>Gohan ahora puede usar el <p>
      <h1>{{kamehamehaGohan}}</h1>
    </div>

  `,
  styleUrls: ['./gohanInput.component.css']
})
export class GohanInputComponent {

  // Se recibe desde el padre. Ahora se puede utilizar en este componente
  // Cualquier cambio en esta variable en 'app-goku', se reflejará acá
  @Input() kamehamehaGohan: string;

  constructor() { }

}