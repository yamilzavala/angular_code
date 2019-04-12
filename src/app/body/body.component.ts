
import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
})

export class BodyComponent{

    activar: boolean = true;

    mostrarOcultar(): boolean{
        if(this.activar){
            this.activar = false;
        }else{
            this.activar = true;
        }        
        console.log(this.activar);
        return this.activar;
    }

    frase: typeProperty = {
        mensaje: 'Un poder requiere una gran responsabilidad',
        autor: 'Ben parker'
    }

    personajes: string [] = [ "Spider-man", 'Dr-Octopus','Venom'];

}





interface typeProperty{
  mensaje: string,
  autor: string
}