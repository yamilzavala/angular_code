//Modulos 
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Services
import { PresupuestosService } from './services/presupuestos.service';
import { ProveedoresService } from './services/proveedores.service';


//Routes
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProveedoresComponent } from './pages/component/proveedores/proveedores.component';
import { InicioComponent } from './pages/component/inicio/inicio.component';
import { PresupuestosComponent } from './pages/component/presupuestos/presupuestos.component';
import { EditpresComponent } from './pages/form/reactive/editpres/editpres.component';
import { AddpressComponent } from './pages/form/reactive/addpres/addpress.component';
import { AddproveeComponent } from './pages/form/templateDriven/addprov/addprovee.component';



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addprovee', component: AddproveeComponent },
  { path: 'addpress', component: AddpressComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'editpres/:id', component: EditpresComponent },
  { path: '**', component: InicioComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpressComponent,
    PresupuestosComponent,
    EditpresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService,
              PresupuestosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
