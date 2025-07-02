import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: Todo[];
  @Output() deleteTodoItem = new EventEmitter<any>();
  @Output() updateTodoItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(id: any) {
    console.log('todo list id', id);
    this.deleteTodoItem.emit(id);
  }

  updateTodo($event: any) {
    console.log('edit obj', $event);
    this.updateTodoItem.emit($event);
  }

}
