import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BoxComponent } from './box/box.component';



@NgModule({
  declarations: [ButtonComponent, BoxComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, BoxComponent]
})
export class SharedModule { }
