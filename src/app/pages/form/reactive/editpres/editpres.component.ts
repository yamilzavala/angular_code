import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from 'src/app/services/presupuestos.service';
/**
 * , para recibir los valores de los parámetros en el componente al que nos dirige la ruta tenemos que usar un objeto del sistema de routing llamado "ActivatedRoute". Este objeto nos ofrece diversos detalles sobre la ruta actual, entre ellos los parámetros que contiene.
 */
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements OnInit {
 
  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string;

  constructor(private pf: FormBuilder,
              private presupuestoService: PresupuestosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { //la propiedad del componente "activatedRouter" será la que contenga el objeto que vamos a necesitar para recuperar las rutas.
      
      this.activatedRouter.params //en el objeto de tipo AtivatedRoute tenemos una propiedad llamada "params" que es un observable y que nos sirve para suscribirnos a cambios en los parámetros enviados al componente.
        .subscribe( parametros => {
            this.id = parametros['id'];
            console.log(`parametros['id']: ${parametros['id']}`);            

            this.presupuestoService.getPresupuesto( this.id)
                .subscribe( presupuesto => {
                  this.presupuesto = presupuesto;
                  console.log(`Rta de getPresupuesto: ${presupuesto}`);
                });

            });
        }

  ngOnInit() {
    //se inicializan los valores por defecto y se llama al onChanges() para actualizar iva y total
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [ Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva ,
      total: this.total
      });
      this.onChanges();
  }

  //cambia automatcamente los valores de iva y total, segun los valores ingresados en base y tipo
  onChanges(): void {
    this.presupuestoForm.valueChanges
      .subscribe(valor => {
          this.base = valor.base;
          this.tipo = valor.tipo;
          this.presupuestoForm.value.iva = this.base * this.tipo;
          this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
      });
  }

    //llama a savePresupuesto() para tomar los valores de la vista;
    onSubmit() {
      this.presupuesto = this.savePresupuesto();
      //se manda los valores a modificar(objeto presupuesto) y el id a modificar
      this.presupuestoService.updatePresupuesto( this.presupuesto, this.id )
          .subscribe(newpre => {
              this.router.navigate(['/presupuestos']);
          });
      }

      //toma los valores de la vista
      savePresupuesto() {
        const savePresupuesto = {
        proveedor: this.presupuestoForm.get('proveedor').value,
        fecha: this.presupuestoForm.get('fecha').value,
        concepto: this.presupuestoForm.get('concepto').value,
        base: this.presupuestoForm.get('base').value,
        tipo: this.presupuestoForm.get('tipo').value,
        iva: this.presupuestoForm.get('iva').value,
        total: this.presupuestoForm.get('total').value
        };
        return savePresupuesto;
        }

}
