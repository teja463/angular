import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { SharedModule } from "../shared/components/shared.module";


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
