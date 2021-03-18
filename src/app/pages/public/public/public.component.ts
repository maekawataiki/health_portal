import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  links = [
    { 'label': 'Open App', 'path': '/user' },
    { 'label': 'Developer Docs', 'path': '/developer' },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
