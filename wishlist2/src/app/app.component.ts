import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}
