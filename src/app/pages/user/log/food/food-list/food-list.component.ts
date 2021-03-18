import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FoodRecord } from 'src/app/shared/types/record.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ThemeService } from 'src/app/core/theme/theme.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  @Input() foodTimes: { time: string, foodRecords: FoodRecord[] }[];
  @Output() foodTimesChange = new EventEmitter<{ time: string, foodRecords: FoodRecord[] }[]>();

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if (event.previousIndex !== event.currentIndex) this.notify();
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.notify();
    }
  }

  notify() {
    this.foodTimesChange.emit(this.foodTimes);
  }

}
