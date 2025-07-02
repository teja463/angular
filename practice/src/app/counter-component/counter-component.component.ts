import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';
import { CounterService } from '../shared/services/counter.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit, OnDestroy {

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  theme = ''
  themeSub!: Subscription;
  constructor(public themeSvc: ThemeService, protected counterSvc: CounterService) { }

  ngOnInit(): void {
    this.themeSub = this.themeSvc.onThemeChange().subscribe(theme => this.theme = theme)
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

  ngOnDestroy(): void {
    this.themeSub.unsubscribe();
  }
}
