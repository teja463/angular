import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/shared/models/Todo';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() deleteTodoItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(id: number) {
    console.log('id', id);
    this.deleteTodoItem.emit(id);
  }
}
