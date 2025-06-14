import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
import { EventService } from 'src/shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private events: EventService) {
    this.events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Python'),
    new WishItem('Debug commits', true)
  ]

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
