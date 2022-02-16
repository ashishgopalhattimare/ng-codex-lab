import { NgModule } from '@angular/core';
import { ButtonModule } from 'dist/button/public-api';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
