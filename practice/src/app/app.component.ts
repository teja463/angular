import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string ='';
  counter: number = 0;

  logName(event: any){
    console.log('name changed', event);
  }
}
