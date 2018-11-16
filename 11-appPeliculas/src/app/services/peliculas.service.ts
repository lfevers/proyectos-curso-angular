import { Injectable } from '@angular/core';

import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "70f51c2357af6b76b895333a1d489a06";
  private urlMovidedb:string = "https://api.themoviedb.org/3";


  estrenos:any[] = [];
  populares:any[] = [];
  populares_kids:any[] = [];
  pelicula:any = {};
  resultados:any[] = [];

  termino:string = "";
  public origen:string;
  public actual:string;


  constructor( private jsonp:Jsonp) {

  }

  getCartelera(){
    let url = this.urlMovidedb + '/movie/now_playing?api_key=' + this.apikey + '&region=ES&lenguage=es&callback=JSONP_CALLBACK';

    return this.jsonp.get(url).map( res=>{
      this.estrenos = res.json().results;
    });
  }

  getPopulares(){
    let url = this.urlMovidedb + '/movie/popular?api_key='+this.apikey+'&lenguage=es&callback=JSONP_CALLBACK'; //&callback=JSONP_CALLBACK IMPORTANTE PARA JSONP

    return this.jsonp.get(url).map( res=>{
      this.populares = res.json().results;
    });
  }

  getPopularesNinos(){
    let url = this.urlMovidedb + '/discover/movie?api_key='+this.apikey+'&language=es&sort_by=popularity.desc&certification_country=US&certification.lte=G&include_adult=false&include_video=false&page=1&callback=JSONP_CALLBACK'; //&callback=JSONP_CALLBACK IMPORTANTE PARA JSONP

    return this.jsonp.get(url).map( res=>{
      this.populares_kids = res.json().results;
    });
  }

  getPelicula(id:number){
    let url = this.urlMovidedb + '/movie/'+ id + '?api_key=' + this.apikey+'&language=es&callback=JSONP_CALLBACK'; //&callback=JSONP_CALLBACK IMPORTANTE PARA JSONP

    return this.jsonp.get(url).map( res=>{
      this.pelicula = res.json();
    });
  }

  buscarPeliculas(){
    if(this.termino == ""){
      return null;
    }
    let url = this.urlMovidedb + '/search/movie?api_key=' + this.apikey+'&language=es&query='+this.termino+'&callback=JSONP_CALLBACK'; //&callback=JSONP_CALLBACK IMPORTANTE PARA JSONP

    return this.jsonp.get(url).map( res=>{
      this.resultados = res.json().results;
    });

  }
}
