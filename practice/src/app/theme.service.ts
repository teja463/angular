import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  private _theme: any = 'dark';

  constructor() { }

  get theme() {
    return this._theme;
  }

  set theme(value) {
    this._theme = value;
  }
}
