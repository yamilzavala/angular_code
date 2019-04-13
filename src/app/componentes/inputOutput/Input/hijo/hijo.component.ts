import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.avisosHijo);
  }

  //mismo tipo que el padre
  @Input() inputHijo: string; 
  @Input() avisosHijo: string[]; //EJEMPLO 2: CON UN ARRAY PASADO AL HIJO

}
