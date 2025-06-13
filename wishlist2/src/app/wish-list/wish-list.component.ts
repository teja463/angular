import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() wishes : WishItem[] = [];

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

}
