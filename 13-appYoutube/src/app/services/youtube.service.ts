import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl:string = 'https://www.googleapis.com/youtube/v3';
  private apikey:string = 'AIzaSyDxbANrlP6L-8I2CU1gpzyBX6YPdLNNJKc';
  private playlist:string = 'UUuaPTYj15JSkETGnEseaFFg';

  private nextPageToken:string;


  constructor(public http:Http) { }

  getVideos(){

    let url = this.youtubeUrl +  '/playlistItems';
    let params = new URLSearchParams();
    params.set( 'part', 'snippet' ); //esto esta guay porke te añade la estructura de parametros en plan ?parm=x&param2=y ....
    params.set( 'maxResults', '10');
    params.set( 'playlistId', this.playlist);
    params.set( 'key', this.apikey);

    if(this.nextPageToken){
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, { search: params }).map( res =>{
      console.log(res.json());
      this.nextPageToken = res.json().nextPageToken;

      let videos:any[] = [];
      for(let video of res.json().items){
        videos.push(video.snippet);
      }

      return videos;
    });

  }
}
