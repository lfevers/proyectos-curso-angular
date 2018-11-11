import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private _router:ActivatedRoute) {

    _router.parent.params.subscribe( parametros =>{ // poniendo el .parent obtenemos los parametros del padre
      console.log("Ruta Hija Usuario Nuevo: ")
      console.log(parametros);
    })
  }

  ngOnInit() {
  }

}
