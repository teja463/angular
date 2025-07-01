import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/shared/models/Hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
