import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/shared/models/Todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: Todo[] = [];

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data: any) => {
      console.log('data', data);
      this.todos = data;
    }, (err: any) => {
      console.log('err', err);
    })
  }

  deleteTodoItem(event: any) {
    this.todoService.deleteTodo(event).subscribe(() => {
      console.log('todo deleted');
      this.todos = this.todos.filter(todo => todo.id !== event);
    }, err => console.log('delete todo error', err))
    console.log('event', event)
  }
}
