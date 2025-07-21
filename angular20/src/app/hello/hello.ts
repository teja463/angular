import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss'
})
export class Hello {

  @Input() name!: string;
}
