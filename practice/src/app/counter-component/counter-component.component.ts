import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {

  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counterChange.emit(this.counter);
  }

  decrement() {
    if (this.counter - 1 >= 0) {
      this.counterChange.emit(--this.counter);
    }
  }
}
