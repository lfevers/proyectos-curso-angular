import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';  //ESTO EL NO LO HACE EN EL TUTORIAL PERO HAY QUE AÑADIRLO PARA K FUNCIONE EL [(ngModel)]

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


import {APP_ROUTING} from './app.routes';

//servicios

import {SpotifyService} from './services/spotify.service';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PlaySpotiPipe } from './pipes/play-spoti.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistaComponent,
    DomseguroPipe,
    PlaySpotiPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, //PARA K FUNCIONE EL [(ngModel)]
    APP_ROUTING
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
