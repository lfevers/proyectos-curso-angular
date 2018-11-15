import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

//services
import {PeliculasService} from './services/peliculas.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
