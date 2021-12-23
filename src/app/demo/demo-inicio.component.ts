import { Component } from "@angular/core";


@Component({
    selector:'app-demo-inicio',
    templateUrl: 'demo-inicio.component.html'    
})
export class DemoInicioComponent{
    title = 'pipes-app';
  
    mostrar: boolean = true;
  
    get iconoOjo(){
      return (this.mostrar) ? 'pi pi-eye-slash' : 'pi pi-eye';
    }
  
    get mensaje(){
      return (this.mostrar) ? 'Ocultar P-Card' : 'Mostrar P-Card';
    }
  
   ocultarPCard(){
      this.mostrar = !this.mostrar;
    }
}