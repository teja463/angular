import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HerosComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HerosComponent
  ]
})
export class HerosModule { }
