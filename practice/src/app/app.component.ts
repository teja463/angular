import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  name: string = 'default parent';
  counter: number = 0;
  greeting: string = 'Guest';
  color= "dodgerblue";

  constructor(protected themeSvc: ThemeService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  logName(event: any) {
    console.log('name changed', event);
  }

  changeGreeting() {
    this.greeting = 'Teja';
  }

  clickHere($event: any) {
    console.log('app click', $event)
  }
}
