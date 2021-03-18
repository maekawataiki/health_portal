import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styleUrls: ['./tree-viewer.component.scss']
})
export class TreeViewerComponent implements OnInit {
  @Input() data: object;
  @Output() dataChange = new EventEmitter<object>();

  objectKeys = Object.keys;
  isObj = (val) => (typeof val) === 'object';

  constructor() { }

  ngOnInit() {
  }

  notify() {
    this.dataChange.emit(this.data);
  }

}
