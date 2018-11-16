import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  constructor(  private activatedRoute:ActivatedRoute, public _peliculasService:PeliculasService, private router:Router  ) {
    _peliculasService.actual = 'pelicula';
    this.activatedRoute.params.map( parametros => parametros['id'] ).subscribe (id =>{
      console.log("recibo el id: " + id);
      _peliculasService.getPelicula(id).subscribe();

    })

  }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate([this._peliculasService.origen]);
  }

}
