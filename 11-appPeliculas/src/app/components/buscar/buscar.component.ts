import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {


  constructor(public _peliculasService:PeliculasService) {
    _peliculasService.origen = 'buscar';
    _peliculasService.actual = 'buscar';
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this._peliculasService.termino == ""){
      return;
    }
    this._peliculasService.buscarPeliculas().subscribe();
  }

}
