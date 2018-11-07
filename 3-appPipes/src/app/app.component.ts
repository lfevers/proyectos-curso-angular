import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Sergio";
  nombre2 = "sergio bueno gaRCia"
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234656;
  salario = 1234.8;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise((resolve,reject)=>{
      setTimeout ( ()=>resolve('Llego la data!'),3500);
  })

  fecha = new Date();
  fecha2 = '2017-01-01';

  video = "dOAOXQigioA"
}
