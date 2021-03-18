import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.initTheme();
  }

}
