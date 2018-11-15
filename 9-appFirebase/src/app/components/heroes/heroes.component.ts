import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[]=[];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService) {
    this._heroesService.getHeroes().subscribe(data=> {
      console.log(data);
      // this.heroes = data;
      // this.loading = false;
      setTimeout(()=>{   //este timeout lo hacemos para k de tiempo a ver el mensajito de cargando, lo correcto es lo comentado arriba
        this.loading = false;
        this.heroes = data;
      }, 1500);
    });
  }

  ngOnInit() {
  }

  borraHeroe(key$:string){
    this._heroesService.borrarHeroe(key$).subscribe(respuesta =>{
      if(respuesta){
        console.error(respuesta);
      }
      else{
        //todo bien
        delete this.heroes[key$];
      }
    });
  }

}
