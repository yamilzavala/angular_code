import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './componentes/DataBinding/property-binding/property-binding.component';
import { DataBindingComponent } from './componentes/DataBinding/interpolacion/interpolacion.component';
import { EventBindingComponent } from './componentes/DataBinding/event-binding/event-binding.component';
import { BotonDinamicoComponent } from './componentes/boton-dinamico/boton-dinamico.component';
import { TwoWayBindingComponent } from './componentes/DataBinding/two-way-binding/two-way-binding.component';
import { NgIfComponent } from './componentes/directivas/ng-if/ng-if.component';
import { NgTemplateComponent } from './componentes/directivas/ng-template/ng-template.component';
import { NgTemplate2Component } from './componentes/directivas/ng-template2/ng-template2.component';
import { NgStyleComponent } from './componentes/directivas/ng-style/ng-style.component';
import { NgClassComponent } from './componentes/directivas/ng-class/ng-class.component';
import { NgForComponent } from './componentes/directivas/ng-for/ng-for.component';




@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    DataBindingComponent,
    EventBindingComponent,
    BotonDinamicoComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgTemplateComponent,
    NgTemplate2Component,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
