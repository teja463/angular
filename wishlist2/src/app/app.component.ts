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
  
  title = 'My whish';

  addNewWish(){
    console.log('add wish');
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
