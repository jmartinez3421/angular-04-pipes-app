import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    SharedModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class HomeModule { }
