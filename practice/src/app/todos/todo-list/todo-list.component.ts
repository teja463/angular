import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/shared/models/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  @Input() todos!: Todo[];
  @Output() deleteTodoItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(id: number) {
    console.log('id', id);
    this.deleteTodoItem.emit(id);
  }

}
