import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'upper-case-component',
  templateUrl: './upper-case-component.component.html',
  styleUrls: ['./upper-case-component.component.css']
})
export class UpperCaseComponentComponent implements OnInit {

  @Input() name: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
