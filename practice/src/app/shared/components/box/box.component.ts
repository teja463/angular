import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, OnDestroy {
  
  theme!: string;
  themeSub!: Subscription;
  constructor(private themeSvc: ThemeService) { }

  ngOnInit(): void {
    this.themeSub = this.themeSvc.onThemeChange().subscribe(theme => this.theme = theme)
  }

  ngOnDestroy(): void{
    this.themeSub.unsubscribe();
  }

}
