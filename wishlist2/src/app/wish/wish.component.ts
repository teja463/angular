import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/shared/services/EventService';
import { WishService } from './wish.service';
import { WishItem } from 'src/shared/models/WishItem';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  items: WishItem[] = []

  listFilter = '0';

  constructor(private events: EventService, private wishService: WishService) {
    /* this.events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    }) */
   this.events.onDelete().subscribe((item: any) => {
      console.log('item',item)
      const index = this.items.indexOf(item.payload);
      this.items.splice(index, 1);
   })
  }

  ngOnInit(): void {
    console.log('on ng init');
    this.wishService.getWishes().subscribe((data: any) => {
      console.log('data', data);
      this.items = data;
    }, (err) => {
      console.log('err', err);
    })
  }



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
