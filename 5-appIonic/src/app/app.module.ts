import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PendientesComponent} from '../pages/pendientes/pendientes.component';
import { TerminadosComponent} from '../pages/terminados/terminados.component';
import { AgregarComponent} from '../pages/agregar/agregar.component';
import { DetalleComponent} from '../pages/detalle/detalle.component';

//Servicios
import {ListaDeseosService} from './services/lista-deseos.service';

//Pipes
import {PlacholderPipe} from './pipes/placeholder.pipe';
import {PendientesPipe} from './pipes/pendientes.pipe';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PlacholderPipe,
    PendientesPipe,
    TerminadosComponent,
    PendientesComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TerminadosComponent,
    PendientesComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    ListaDeseosService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
