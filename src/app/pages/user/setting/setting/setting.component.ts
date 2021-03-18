import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  links = [
    { path: 'account', label: 'Account' },
    { path: 'profile', label: 'My Body Profile' },
    { path: 'preference', label: 'Preference' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
