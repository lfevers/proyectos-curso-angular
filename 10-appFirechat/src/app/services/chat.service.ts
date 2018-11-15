import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Mensaje } from '../interfaces/mensaje.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};
  limite: number = 5;

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( user =>{
      if( !user ){
        return;
      }

      console.log(user);

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;

    });
  }

  login(proveedor:string) {
    if(proveedor == "google"){
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    if(proveedor == "twitter"){
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }


  logout() {
    this.afAuth.auth.signOut();
    this.usuario = {};
  }


  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=> ref.orderBy('fecha','desc').limit(this.limite));

    return this.itemsCollection.valueChanges().map( (mensajes: Mensaje[]) =>{
      console.log( mensajes );
      //this.chats = mensajes;
      this.chats = [];
      for(let mensaje of mensajes){
        this.chats.unshift(mensaje); //esto es para coger el array y gaurdarlo en el orden inverso creo que unshift es como push solo que inserta siempre en el primer lugar
      }
    });

  }

  agregarMensaje(texto:string ){
    let mensaje: Mensaje = { //FALTA EL uid
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add( mensaje );
  }
}
