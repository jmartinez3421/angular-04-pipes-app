import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombre: string = 'joRdI marTINez GrAU';
  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
