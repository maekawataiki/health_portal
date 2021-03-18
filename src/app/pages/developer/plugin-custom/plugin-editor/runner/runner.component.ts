import { Component, OnInit, Input } from '@angular/core';
import { evaluateCode } from 'src/app/shared/scripts/parser';
import { Script } from 'src/app/shared/types/plugin.model';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.scss']
})
export class RunnerComponent implements OnInit {
  @Input() selected: Script;

  resultStyle: object = { height: '60%' };
  result: string = "";

  data = {
    user: {
      height: 170,
      weight: 60,
      sex: 'Male',
      age: 20
    },
    food: {
      PROT: 30,
      CARB: 60,
      FAT: 220
    },
    activity: {
      LIGHT: 3,
      INTENSE: 1
    },
    sleep: {
      REM: 1.5,
      LIGHT: 3,
      DEEP: 1
    }
  }

  constructor() { }

  ngOnInit() {
  }

  run() {
    try {
      this.result = JSON.stringify(evaluateCode(this.selected.code, this.data));
    } catch (e) {
      this.result = 'Error: ' + e;
    }
  }

  onResizeEnd(event: ResizeEvent, style: any): void {
    style.height = `${event.rectangle.bottom - event.rectangle.top}px`;
  }

}
