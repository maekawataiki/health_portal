import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  links = [
    { 'label': 'Docs', 'path': '/developer/docs' },
    { 'label': 'My Plugins', 'path': '/developer/plugin' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
