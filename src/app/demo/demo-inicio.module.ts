import { NgModule } from "@angular/core";
import { DemoInicioComponent } from './demo-inicio.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
    declarations:[
        DemoInicioComponent
    ],
    exports:[
        DemoInicioComponent
    ],
    imports: [
        PrimengModule
    ]
})
export class DemoInicioModule{}