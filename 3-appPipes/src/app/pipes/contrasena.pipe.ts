import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    let tam = value.length;

    if(activar){
      value = "";
      for (let i = 0; i < tam; i++) {
          value = value + "*";
      }

    }
    return value;
  }

}
