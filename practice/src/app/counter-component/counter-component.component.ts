import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';
import { CounterService } from '../shared/services/counter.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();


  constructor(protected counterSvc: CounterService) { }



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
