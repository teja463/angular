import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'upper-case-component',
  templateUrl: './upper-case-component.component.html',
  styleUrls: ['./upper-case-component.component.css']
})
export class UpperCaseComponentComponent implements OnInit, OnChanges {

  @Input() name: string ='default';

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: name', this.name);
    console.log('ngOnChanges: changes', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: name', this.name)
  }

}
