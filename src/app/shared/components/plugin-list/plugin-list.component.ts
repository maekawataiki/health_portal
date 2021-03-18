import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plugin-list',
  templateUrl: './plugin-list.component.html',
  styleUrls: ['./plugin-list.component.scss']
})
export class PluginListComponent implements OnInit {
  @Input() link: string;
  @Input() link_param: string;
  @Input() plugins: Plugin[];

  constructor() { }

  ngOnInit() {
  }

}
