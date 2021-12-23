import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';

const rotues: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotues)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
