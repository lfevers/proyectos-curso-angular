import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // para cambiar de pagina con el boton
import {PeliculasService} from '../../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  termino:string = "";

  constructor( public _peliculasService:PeliculasService, public router:Router) { }

  ngOnInit() {
  }

  buscar(){
    if(this.termino == ""){
      return;
    }
    this._peliculasService.termino = this.termino;
    this._peliculasService.buscarPeliculas().subscribe();
    this.router.navigate(['buscar']);
    this.termino = "";
  }

}
