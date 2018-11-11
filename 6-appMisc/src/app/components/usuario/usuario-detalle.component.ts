import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private _router:ActivatedRoute) {

    _router.parent.params.subscribe( parametros =>{ // poniendo el .parent obtenemos los parametros del padre
      console.log("Ruta Hija Usuario Editar: ")
      console.log(parametros);
    })
  }

  ngOnInit() {
  }

}
