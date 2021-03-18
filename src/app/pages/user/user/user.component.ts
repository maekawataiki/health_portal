import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  links = [
    { 'label': 'Dashboard', 'path': '/user/dashboard' },
    { 'label': 'Log', 'path': '/user/log' },
    { 'label': 'Plugins', 'path': '/user/plugin' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
