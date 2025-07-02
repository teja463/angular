import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  count = 0;
  
  increase() {
    this.count = ++this.count;
  }
}
