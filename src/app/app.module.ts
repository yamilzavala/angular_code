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
import { NgSwitchComponent } from './componentes/directivas/ng-switch/ng-switch.component';
import { PadreComponent } from './componentes/inputOutput/Input/padre/padre.component';
import { HijoComponent } from './componentes/inputOutput/Input/hijo/hijo.component';
import { Padre2Component } from './componentes/inputOutput/output/padre2/padre2.component';
import { Hijo2Component } from './componentes/inputOutput/output/hijo2/hijo2.component';
import { Hijo3Component } from './componentes/inputOutput/output/hijo3/hijo3.component';
import { Padre3Component } from './componentes/inputOutput/output/padre3/padre3.component';
import { GokuComponent } from './componentes/inputOutput/output/gokuGohan/goku/goku.component';
import { GohanComponent } from './componentes/inputOutput/output/gokuGohan/gohan/gohan.component';
import { GokuInputComponent } from './componentes/inputOutput/Input/gokuGohan/goku/goku.component';
import { GohanInputComponent } from './componentes/inputOutput/Input/gokuGohan/gohan/gohan.component';
import { GokuFatherComponent } from './componentes/inputOutput/hermanos/goku/gokuFather.component';
import { GohanBrotherComponent } from './componentes/inputOutput/hermanos/gohan/gohanBrother.component';
import { GotenComponent } from './componentes/inputOutput/hermanos/goten/gotenBrother.component';
import { AppService } from './body/services/app.service';






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
    NgForComponent,
    NgSwitchComponent,
    PadreComponent,
    HijoComponent,
    Padre2Component,
    Hijo2Component,
    Hijo3Component,
    Padre3Component,
    GokuInputComponent,
    GohanInputComponent,
    GokuComponent,
    GohanComponent,
    GokuFatherComponent,
    GohanBrotherComponent,
    GotenComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
