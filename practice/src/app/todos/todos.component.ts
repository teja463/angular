import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/Todo';
import { TodoService } from './todo.service';
import { ThemeService } from '../shared/services/theme.service';
import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  


  constructor(private todoService: TodoService, protected themeSvc: ThemeService, protected counterSvc: CounterService) { }

  todos: Todo[] = [];
  todoText: string = '';

 

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
      this.todos = this.todos.filter(todo => todo.id !== event);
    }, err => console.log('delete todo error', err))
  }

  addTodo() {
    this.todoService.addTodo(this.todoText).subscribe((data: any) => {
      this.todos.push(data);
      this.todoText = '';
    }, err => console.log('add todo error', err))
  }

  updateTodo(event: any) {
    this.todoService.updateTodo(event).subscribe((data: any) => {
      const t = this.todos.find(t => t.id === data.id)
      if (t) {
        t.text = data?.text;
      }
    }, err => console.log('update todo error', err))
  }
}
