import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  name: string ='';
  counter: number = 0;
  greeting: string = 'Guest';

  constructor(){
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  logName(event: any){
    console.log('name changed', event);
  }

  changeGreeting(){
    this.greeting = 'Teja';
  }
}
