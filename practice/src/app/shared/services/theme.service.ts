import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme: any = 'dark';
  private subject = new BehaviorSubject<string>(this.theme);
  
  constructor() { }

  
  toggleTheme() {
    console.log('toggling theme');
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.subject.next(this.theme);
  }

  onThemeChange(): Observable<string> {
    return this.subject.asObservable();
  }
}
