import { Component, OnInit } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';


import {Lista, ListaItem} from '../../app/clases/index';

import {ListaDeseosService} from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;

  constructor( public _navCtrl:NavController, public _navParams:NavParams, public _listaDeseos:ListaDeseosService , public _alertCtrl:AlertController) {

    this.lista = this._navParams.get("lista");
    this.idx = this._navParams.get("idx");

  }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;
    for (let item of this.lista.items) {
        if ( item.completado == false){
          todosMarcados = false;
          break;
        }
    }

    this.lista.terminada = todosMarcados;


    this._listaDeseos.actualizarData();
    console.log(this._listaDeseos.listas);
  }

  borrarLista(){

    const confirm = this._alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Está seguro de desear eliminar la lista?',
      buttons: [ 'Cancelar',
        {
          text: 'Borrar Lista',
          handler: () => {
            //console.log('Agree clicked');
            this._listaDeseos.eliminarLista(this.idx);
            this._navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();


  }
}
