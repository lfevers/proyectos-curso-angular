import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'playSpoti'
})
export class PlaySpotiPipe implements PipeTransform {

  constructor (private domSanitizer:DomSanitizer){

  }

  transform(uri: string, url: string): any {

    let res = uri.split(":");

    uri = res[2];

    console.log(url + uri);
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + uri );
  }

}
