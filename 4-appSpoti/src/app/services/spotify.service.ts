import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http'; //PARA PODER HACER PETICIONES GET HTTP TIENES QUE IMPORTAR ESTO
import 'rxjs/add/operator/map'; // el map este es para k te devuelva la peticion en forma de objeto

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  artistas:any [] = [];
  permiso = "Bearer BQC3eY30lnbvyehQiiwDVqAaMt2HU9rDJs2roSuARkPIJL7uCa5XroZDJBPDs51ewki1VO0vDMKuPGfk75c"

  url_busqueda:string = "https://api.spotify.com/v1/search";
  url_artista:string = "https://api.spotify.com/v1/artists/";

  constructor( private http:Http) { }


  getArtistas ( termino:string ){

    let headers = new Headers();
    headers.append( 'authorization', this.permiso );


    let query = `?q=${ termino }&type=artist`;
    //let query = '?q=' + termino + '&type=artist';
    let url = this.url_busqueda + query;

    return this.http.get(url, {headers}).map( res =>{
      //console.log(res.json().artists.items );
      this.artistas = res.json().artists.items;
      // console.log(this.artistas);
      // return res.json().artists.items;
    })

  }


  getArtista ( id:string ){

    let headers = new Headers();
    headers.append( 'authorization', this.permiso);

    let query = id;
    let url = this.url_artista + query;

    return this.http.get(url, {headers}).map( res =>{
      console.log(res.json());
      return res.json();
    })

  }

  getTop ( id:string ){

    let headers = new Headers();
    headers.append( 'authorization',  this.permiso );

    let query = id + "/top-tracks?country=ES";
    let url = this.url_artista + query;

    return this.http.get(url, {headers}).map( res =>{
      console.log(res.json().tracks);
      return res.json().tracks;
    })

  }
}

//TOKEN : BQA9d9ElhOgy31PoLBzk7vBrzrydfgPj0t1epaoI01Eqi-UCAsupVDIgxznf3ourf4IZ8C73xwTTQakNJzw

// solucion del problema del map https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
