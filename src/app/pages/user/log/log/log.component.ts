import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  links = [
    { path: 'food', label: 'Food' },
    { path: 'food', label: 'Activities' },
    // { path: 'food', label: 'Weight' },
    { path: 'food', label: 'Sleep' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
