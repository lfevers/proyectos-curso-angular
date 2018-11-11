import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
})
export class ClassComponent implements OnInit {

  alerta:string = "alert-danger";
  loading:boolean = false;


  propiedades:Object = {
    danger:true
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;

    setTimeout( ()=>this.loading = false, 3000 )
  }

}
