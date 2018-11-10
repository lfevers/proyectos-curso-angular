import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

//Servicios
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {

  artista:any = [];
  pistas:any[] = [];
  artista_externalurl:any = [];

  constructor( private activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params.map( parametros => parametros['id'] ).subscribe (id =>{

      this._spotifyService.getArtista(id).subscribe( data=>this.artista = data );
      this._spotifyService.getArtista(id).subscribe( data=>this.artista_externalurl = data.external_urls.spotify );
      this._spotifyService.getTop(id).subscribe( data=>this.pistas = data );
    })
  }

}
