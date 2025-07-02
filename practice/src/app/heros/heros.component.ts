import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from 'src/app/shared/models/Hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroSvc: HeroService) { }

  heros!: Hero[];
  name: string = 'teja';
  
  selectedHero? : Hero;

  ngOnInit(): void {
    this.heroSvc.getHeros().subscribe(data => this.heros = data);
  }

}
