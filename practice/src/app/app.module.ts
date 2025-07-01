import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UpperCaseComponentComponent } from './upper-case-component/upper-case-component.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { TodosModule } from './todos/todos.module';
import { HerosModule } from './heros/heros.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseComponentComponent,
    CounterComponentComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodosModule,
    HerosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
