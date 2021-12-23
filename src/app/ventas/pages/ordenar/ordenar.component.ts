import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{
  mayusc: boolean = true;
  ordenarPor: string = 'sin valor';

  cambiarOrden(orden:string){
    this.ordenarPor = orden;
  }


  toggleMayusc(){
    this.mayusc = !this.mayusc;
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Goku',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Vegeta',
      vuela: true,
      color: Color.azul
    },

  ];
}
