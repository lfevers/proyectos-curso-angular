import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  constructor( private _router:ActivatedRoute) {

    _router.params.subscribe( parametros =>{
      console.log("Ruta padre: ")
      console.log(parametros);
    })
  }

  ngOnInit() {
  }

}
