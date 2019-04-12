import { Component, OnInit } from '@angular/core';
import {IPeople} from 'src/app/interfaces/IPeople';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styles: []
})
export class NgTemplateComponent implements OnInit {

  people: IPeople[] = [
   // {id:1, name: 'Dani'},
   // {id:2, name: 'Jhon'}
  ];

  constructor() { }

  ngOnInit() {
  }

}


