import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes-app';
  
  mostrar: boolean = true;

  get iconoOjo(){
    return (this.mostrar) ? 'pi pi-eye-slash' : 'pi pi-eye';
  }

  get mensaje(){
    return (this.mostrar) ? 'Ocultar P-Card' : 'Mostrar P-Card';
  }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ocultarPCard(){
    this.mostrar = !this.mostrar;
  }
}
