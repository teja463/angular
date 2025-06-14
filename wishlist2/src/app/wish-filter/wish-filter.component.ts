import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  listFilter: string = '0';
  
  ngOnInit(): void {
    this.changeFilter(this.listFilter);
  }


  changeFilter(value: string){
    this.filterChange.emit(value);
    console.log('filter changed', value)
  }
}
