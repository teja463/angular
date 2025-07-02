import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';
import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor(public themeSvc: ThemeService, protected counterSvc: CounterService) { }

  ngOnInit(): void {
  }

  increment(event: any) {
    console.log(event)
    this.counterChange.emit(++this.counter);
  }

  decrement() {
    if (this.counter - 1 >= 0) {
      this.counterChange.emit(--this.counter);
    }
  }
}
