import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {

  @Input() wishText!: string;
  @Input() isComplete!: boolean;
  @Output() isCompleteChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    console.log('toggle')
    this.isCompleteChange.emit(!this.isComplete);
  }
}
