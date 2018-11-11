import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _elementRef:ElementRef) {

    console.log('DIRECTIVE WORKS!');
    // _elementRef.nativeElement.style.backgroundColor = "yellow";

  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor );
  }

  @HostListener('mouseleave') mouseSale(){
    this.resaltar( null );
  }

  private resaltar(color:string = 'yellow'){
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

}
