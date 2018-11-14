import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
      }
    `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Masculino",
    acepta: false
  }

  paises = [{
    codigo:"ESP",
    nombre: "España"
  },
  {
    codigo:"US",
    nombre: "Estados Unidos"
  },
  {
    codigo:"EN",
    nombre: "Reino Unido"
  }
];

sexos = ["Hombre", "Mujer", "No definido"];
  constructor() { }

  ngOnInit() {
  }

  guardar( forma:NgForm ){
    console.log("Forma");
    console.log(forma);
    console.log("Forma.value");
    console.log(forma.value);
    console.log("Usuario");
    console.log(this.usuario);
  }

}
