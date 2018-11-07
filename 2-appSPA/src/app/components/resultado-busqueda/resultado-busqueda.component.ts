import { Component, OnInit } from '@angular/core';

import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {ActivatedRoute} from '@angular/router'; //para recibir el parametro de la ruta

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
})
export class ResultadoBusquedaComponent implements OnInit {

  resultadoHeroes:Heroe[] = [];

  constructor( private activatedRoute: ActivatedRoute, private _heroesService:HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{  //para recibir el parametro de la ruta
      this.resultadoHeroes = this._heroesService.buscarHeroes(params.termino);
    });

  }

}
