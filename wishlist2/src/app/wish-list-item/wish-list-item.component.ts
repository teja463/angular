import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {

  @Input() wish!: WishItem;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
