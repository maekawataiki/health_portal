import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  goals = [
    { title: 'Healthy Life', img: '/assets/images/healthy.png', selected: false },
    { title: 'Gain Muscle', img: '/assets/images/muscle.png', selected: false },
    { title: 'Weight Loss', img: '/assets/images/vegetable.png', selected: false },
    { title: 'Anti Aging', img: '/assets/images/water.png', selected: false },
    { title: 'Physical Performance', img: '/assets/images/sprint.png', selected: false },
    { title: 'Brain Performance', img: '/assets/images/brain.png', selected: false },
    { title: 'Beauty', img: '/assets/images/healthy.png', selected: false },
    { title: 'Anti Inflamation', img: '/assets/images/muscle.png', selected: false },
    { title: 'Low Carb', img: '/assets/images/vegetable.png', selected: false },
    { title: 'Mental', img: '/assets/images/healthy.png', selected: false },
    { title: 'Woman Health', img: '/assets/images/muscle.png', selected: false },
    { title: 'Mens Health', img: '/assets/images/vegetable.png', selected: false },
  ]

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

}
