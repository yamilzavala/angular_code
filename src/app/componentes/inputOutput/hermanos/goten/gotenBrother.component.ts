import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goten',
  template: `
    <div class="gotenComp">
      <h3>Goten Comp</h3>
      <p>{{mensajeGoten}}</p>
    </div>
  `,
  styleUrls: ['./gotenBrother.component.css']
})
export class GotenComponent {
  @Input() mensajeGoten: string;

  constructor() { }

}