import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Todo } from 'src/shared/models/Todo';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit, OnChanges {


  @Input() todo!: Todo;
  @Output() deleteTodoItem = new EventEmitter<any>();
  @Output() updateTodoItem = new EventEmitter<any>();

  editMode: boolean = false;
  editText = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.editText = this.todo?.text;
  }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.editText = this.todo?.text;
  }

  deleteTodo(id: number) {
    console.log('todo list item id', id);
    this.deleteTodoItem.emit(id);
  }

  updateTodo(id: number){
    console.log('id to update', id);
    this.updateTodoItem.emit({id, text: this.editText});
    this.editMode = !this.editMode;
  }
}
