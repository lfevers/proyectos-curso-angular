import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSel:any;

  constructor( public _yts:YoutubeService) {
    this._yts.getVideos().subscribe(videos=>{
      this.videos = videos;
      console.log(this.videos);
    });
  }

  ngOnInit() {
  }

  verVideo(video:any){
    this.videoSel = video;
  }

  cerrarModal(){
    this.videoSel = null;
    $('#videoModal').modal('hide');
  }

  cargarMas(){
    this._yts.getVideos().subscribe(videos=>{
      this.videos.push.apply(this.videos, videos); //este push apply te hace push de un array entero sobre otro sin tener que ir uno por uno
    });
  }

}
