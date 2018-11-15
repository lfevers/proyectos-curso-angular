import { Injectable } from '@angular/core';

import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "70f51c2357af6b76b895333a1d489a06";
  private urlMovidedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp) {

  }

  getPopulares(){
    let url = this.urlMovidedb + '/discover/movie?sort_by=popularity.desc&api_key='+this.apikey+'&lenguage=es&callback=JSONP_CALLBACK'; //es un ejemplo

    return this.jsonp.get(url).map( res=>res.json());
  }
}
