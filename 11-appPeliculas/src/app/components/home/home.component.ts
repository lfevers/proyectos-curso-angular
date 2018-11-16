import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  constructor( public _peliculasService:PeliculasService) {
    _peliculasService.origen = 'home';
    _peliculasService.actual = 'home';

    this._peliculasService.getCartelera().subscribe();

    this._peliculasService.getPopulares().subscribe();

    this._peliculasService.getPopularesNinos().subscribe();
  }

  ngOnInit() {

  }


}
