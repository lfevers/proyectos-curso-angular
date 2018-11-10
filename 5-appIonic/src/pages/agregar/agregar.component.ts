import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombre_lista:string;
  nombre_item:string;

  constructor() {  }

  ngOnInit() {}
}
