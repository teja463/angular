import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    TodosComponent,
    HttpClientModule
  ]
})
export class TodosModule { }
