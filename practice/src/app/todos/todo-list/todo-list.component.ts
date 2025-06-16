import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/shared/models/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
