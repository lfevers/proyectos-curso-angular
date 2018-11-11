import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor( private _router:ActivatedRoute) {

    _router.parent.params.subscribe( parametros =>{ // poniendo el .parent obtenemos los parametros del padre
      console.log("Ruta Hija Usuario Detalle: ")
      console.log(parametros);
    })
  }

  ngOnInit() {
  }

}
