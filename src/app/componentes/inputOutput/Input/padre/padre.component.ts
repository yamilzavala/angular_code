/**INPUT
 * 1. Desde el componente padre se crea variable con un tipo de dato 
 * 2. Se inicializa la variable
 * 3. Desde componente hijo.ts se denifine variable del mismo tipo y se usa decorador @Input para indicar que sera inicializada con el valor pasado por el padre
 * 4. Desde padre.html llamo a hijo.html 
 * 5. En hijo.html pongo [Inputhijo] = "variablePadre"
 * 6. En caso de ser un array, usar *ngFor para inicializar (Ejmeplo 2)
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //esta propiedad se mandara al hijo desde la vista del hijo con [InputPropiedadHijo] = "valorPadre"
  //El tipo de la Variable del padre tiene que ser del mismo tipo que la del hijo
  textoPadre: string = 'Este texto se inyecta desde el padre';

  //EJEMPLO 2: CON UN ARRAY PASADO AL HIJO
  //esta propiedad se mandara al hijo desde la vista del hijo con [InputPropiedadHijo2] = "valorPadre2"
  avisosPadre: string[] = ['Aviso 1' , 'Aviso 2' , 'Aviso 3'];

}
