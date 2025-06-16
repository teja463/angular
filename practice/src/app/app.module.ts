import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UpperCaseComponentComponent } from './upper-case-component/upper-case-component.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseComponentComponent,
    CounterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
