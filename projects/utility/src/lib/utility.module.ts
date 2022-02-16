import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    DropdownComponent,
    ButtonComponent
  ]
})
export class UtilityModule { }
