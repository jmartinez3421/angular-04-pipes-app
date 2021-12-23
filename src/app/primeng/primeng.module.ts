import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview'
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  exports: [       
    ButtonModule,
    CardModule,
    TabViewModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimengModule { }
