import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input() text!: string;
  @Input() bgColor: string = "dodgerblue";
  @Input() textColor: string = "white";

  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  clickMe($event: any) {
    this.btnClick.emit($event);
  }
}
