import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from "firebase";


import {FileItem} from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES:string = 'img';

  constructor( public af:AngularFirestore ) {

  }

 listaUltimasImagenes( numeroImagenes:number):Observable<any[]>{

   return this.af.database.list('');
 }

}
