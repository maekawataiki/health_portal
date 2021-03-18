import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss'],
})
export class WaveComponent implements OnInit {
  @Input() reverse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
