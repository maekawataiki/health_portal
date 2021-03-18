import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links = [
    { path: '', label: 'Member' },
    { path: '', label: 'Our Mission' },
    { path: '', label: 'Contact Us' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
