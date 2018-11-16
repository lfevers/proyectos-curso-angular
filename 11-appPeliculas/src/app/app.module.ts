import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule, HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';  //ESTO EL NO LO HACE EN EL TUTORIAL PERO HAY QUE AÑADIRLO PARA K FUNCIONE EL [(ngModel)]

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

//services
import {PeliculasService} from './services/peliculas.service';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NoImagenPipe } from './pipes/no-imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    PeliculaComponent,
    NoImagenPipe,
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
