import { Component, OnInit } from '@angular/core';
import {Lista, ListaItem} from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

import {ListaDeseosService} from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombre_lista:string = "";
  nombre_item:string = "";

  items:ListaItem[] = [];

  constructor( public _alertCtrl:AlertController, public _navCtrl:NavController, public _listaDeseos:ListaDeseosService) {  }

  ngOnInit() {}

  agregar(){
    if(this.nombre_item.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombre_item;
    this.items.push(item);
    this.nombre_item = "";

  }

  borrarItem(index:number){
    this.items.splice(index,1);
  }

  guardarLista(){
    if (this.nombre_lista.length == 0) {
      let alert = this._alertCtrl.create({
        title: 'Nombre de la lista!',
        subTitle: 'El nombre de la lista es necesario.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista(this.nombre_lista);
    lista.items = this.items;

    this._listaDeseos.agregarLista(lista);

    this._navCtrl.pop();
  }
}
