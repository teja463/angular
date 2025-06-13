import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit {

  @Output() addWish = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  wishText = '';

  addNewWish() {
    this.addWish.emit(this.wishText);
    this.wishText = '';
  }

}
