import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/theme/theme.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

  toggle() {
    this.themeService.toggleDark();
  }

}
