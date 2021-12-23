import { Component } from '@angular/core';
import { interval } from 'rxjs';

interface Persona{
  nombre: string,
  genero: string
}

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  persona: Persona = {
    nombre: 'Fernando',
    genero: 'masculino'
  }
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  cambiarPersona(){
    if(this.persona.nombre === 'Fernando' && this.persona.genero === 'masculino'){
      this.persona = {
        nombre: 'Susana',
        genero: 'femenino'
      }
    }else{
      this.persona = {
        nombre: 'Fernando',
        genero: 'masculino'
      }
    }
  }


  //i18nPlural
  clientes = ['Maria', 'Pedro', 'Juan', 'Benito','Alex'];
  clientesMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':`tenemos # clientes esperando`
  }

  borrarCliente(){
    this.clientes.pop();
  }

  restartClientes(){
    this.clientes = ['Maria', 'Pedro', 'Juan', 'Benito','Alex'];
  }


  //KeyValue Pipe
  hombre = {
    nombre: 'Jordi',
    edad: 20,
    direccion: 'Calle callejon 22'
  }


  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Green Lantern',
      vuela: true
    },
  ];


  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  } );
}
