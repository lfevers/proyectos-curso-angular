import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(ruta: any, tam: number): string {

    let url:string = "https://image.tmdb.org/t/p/";

    if(tam){
      url = url + 'w' + tam;
    }
    else{
      url = url + 'original';
    }

    if(ruta == null){
      ruta = 'assets/img/no-image.png';
    }
    else{
      ruta = url + ruta;
    }

    return ruta;
  }

}
