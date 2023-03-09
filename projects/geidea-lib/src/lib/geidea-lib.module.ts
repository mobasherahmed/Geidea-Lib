import { NgModule } from '@angular/core';
import { GeideaLibComponent } from './geidea-lib.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    GeideaLibComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    GeideaLibComponent,
    ButtonComponent
  ]
})
export class GeideaLibModule { }
