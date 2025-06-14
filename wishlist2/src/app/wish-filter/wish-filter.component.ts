import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {

  @Output() filter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  listFilter: String = '0';

  changeFilter(value: string){
    this.filter.emit(value);
    console.log('filter changed', value)
  }
}
