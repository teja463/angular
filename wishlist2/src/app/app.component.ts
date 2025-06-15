import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
import { EventService } from 'src/shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private events: EventService, private wishService: WishService) {
    this.events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    console.log('on ng init');
    this.wishService.getWishes().subscribe((data: any) => {
      console.log('data', data);
      this.items = data;
    })
  }

  items: WishItem[] = []

  listFilter = '0';

  get visibleItems(): WishItem[] {
    if (this.listFilter === '0') {
      return this.items;
    }
    if (this.listFilter === '1') {
      return this.items.filter(wish => !wish.isComplete);
    }
    if (this.listFilter === '2') {
      return this.items.filter(wish => wish.isComplete);
    }
    return this.items;
  }

  addNewWish(wish: string) {
    this.items.push(new WishItem(wish));
  }

  print() {
    console.log('items', this.items);
  }
}
