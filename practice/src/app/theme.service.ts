import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  private _theme: any = 'dark';

  count = 0;
  increase(){
    this.count = ++this.count;
  }
  constructor() { }

  get theme() {
    return this._theme;
  }

  set theme(value) {
    this._theme = value;
  }

  toggleTheme() {
    console.log('toggling theme');
    if (this._theme === 'dark') {
      this._theme = 'light'
    } else {
      this._theme = 'dark'
    }
  }
}
