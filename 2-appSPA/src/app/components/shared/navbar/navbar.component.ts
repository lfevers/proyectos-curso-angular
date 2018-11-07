import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'; // para cambiar de pagina con el boton

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(  private router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string){
    this.router.navigate(['/resultadoBusqueda' , termino]);
  }

}
