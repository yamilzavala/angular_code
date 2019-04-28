import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable, Observer } from 'rxjs';
//import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

 /**
  * la propiedad presURL 
  * con el valor de la url de nuestro base de datos más el nombre del nodo o
  * colección donde queremos almacenar los datos, en nuestro caso presupuestos,
  * seguido de punto JSON.
  */
  //presURL = 'URL_base/nodosColeccion.json';
  presURL = 'https://comprasapp-b20c0.firebaseio.com/presupuestos.json';
  ////url_UpdateDelete = 'URL_base/nodosColeccion'; no va el .json, ya que el id a modificar o eliminar se lo pasamos nosotros
  url_porId = 'https://comprasapp-b20c0.firebaseio.com/presupuestos';

  constructor(private http: HttpClient) { }

  postPresupuesto( presupuesto: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };    
    return this.http.post<any>( this.presURL, presupuesto , httpOptions )
          .pipe(
              map( res => {
                console.log(`Rta del post: ${res}`);
              return res;
              })
          );
  }

  getPresupuestos () {
    return this.http.get<any>( this.presURL );  
  }

  //get de id especifico
  getPresupuesto ( id$: string ) {    
    const url = `${ this.url_porId }/${ id$ }.json`; 
        return  this.http.get<any>( url );       
  }

  updatePresupuesto( valuesToModif: any, key$: string) {
    const url = `${ this.url_porId }/${ key$ }.json`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };                          //url + key (id a modificar) + valoresAmodificar + encabezado
    return this.http.put<any>( url, valuesToModif , httpOptions )
          .pipe(
            map( res => {
              console.log(`Rta del update: ${res}`);
              return res;
          }));
  }

  delPresupuesto ( id$: string ) {
    const url = `${ this.url_porId }/${ id$ }.json`;
      return this.http.delete( url );
      
    }

}
