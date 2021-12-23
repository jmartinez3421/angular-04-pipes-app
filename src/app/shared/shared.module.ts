import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
