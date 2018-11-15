import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel",
  }

  nuevo:boolean = false;
  id:string;

  constructor( private _heroesService:HeroesService, private router:Router, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.map(param => param['id']).subscribe(data=>{
      this.id = data;
      if(this.id !== 'nuevo'){
        this._heroesService.getHeroe(this.id).subscribe(_heroe => this.heroe = _heroe);
      }
    });


  }

  ngOnInit() {
  }

  guardar(){
    if(this.id == "nuevo"){
      //insertando
      console.log(this.heroe);
      this._heroesService.nuevoHeroe( this.heroe ).subscribe(data=>{
        this.router.navigate(['/heroe',data.name]);
      },
      error=>console.log(error));
    }
    else{
      //actualizar
      console.log(this.heroe);
      this._heroesService.actualizarHeroe( this.heroe , this.id).subscribe(data=>{
        console.log(data);
      },
      error=>console.log(error));
    }

  }

  agregarNuevo(forma:NgForm){

    this.router.navigate(['heroe','nuevo']);
    forma.reset({
      casa:"Marvel"
    });
  }

}
