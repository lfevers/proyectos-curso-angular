import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs'; // sobra el RX que pone el

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent{

  forma:FormGroup;

  usuario:any = {
    nombrecompleto: {
      nombre: "Pepito",
      apellido: "Lospalotes"
    },
    correo: "fernando.herera85@gmail.com",
    //pasatiempos: ["Correr", "Dormir","Comer"]
  }

  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombrecompleto' : new FormGroup ({

                'nombre': new FormControl     ('',[
                                                    Validators.required,
                                                    Validators.minLength(3)
                                                  ]),
                'apellido': new FormControl   ('',[
                                                    Validators.required,
                                                    this.noHerrera
                                                  ]),

      }),
      'correo': new FormControl     ('',[
                                          Validators.required,
                                          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray  ([
                                          new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl   ('', [Validators.required], [ this.existeUsuario ]),
      'password1': new FormControl  ('', [Validators.required]),
      'password2': new FormControl  () // lo dejamos vacio para ver otra forma de añadir validators
    });

    //this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.forma) ]); // esto es otra forma de añadir validadores, como en las lineas de antes

    this.forma.controls['username'].valueChanges.subscribe( data=>{ //esta mierda es para ver los valoresdel formulario como cambian dinamicamente y guardarlos en data
      console.log(data);
    })

    this.forma.controls['username'].statusChanges.subscribe( data=>{ 
      console.log(data);
    })
  }

  noHerrera( control: FormControl ):{ [s:string]:boolean }{
    if(control.value === "herrera"){
      return { noherrera:true } //no queremos que permita escribir herrera, si estamos recibiendo ese parametro devolvemos true
    }

    return null;
  }

  noIgual( control: FormControl ):{ [s:string]:boolean }{
    let forma:any = this;
    if(control.value !== forma.controls['password1'].value){
      return { noigual:true } //no queremos que permita escribir herrera, si estamos recibiendo ese parametro devolvemos true
    }
    return null;
  }

  existeUsuario( control: FormControl ):Promise<any> | Observable<any>{
    let promesa = new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          if(control.value === 'strider'){
            resolve({ existe:true })
          }
          else{
            resolve (null);
          }
        },3000);
      }
    );

    return promesa;

  }


  guardarCambios(){
    console.log(this.forma);
    console.log(this.forma.value);
    // this.forma.reset(this.usuario);
    //
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });

    // this.forma.controls['correo'].setValue("topotamadre@gmail.com");  todo esto k esta comentado son distintas formas de hacrelo, todas validas
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(  //esta cosa rara es para indicarle a ts que esta trabajando a un array en este caso de tipo FormArray
      new FormControl('', Validators.required)
    );
  }

}
