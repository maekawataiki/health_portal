import { Component, OnInit } from '@angular/core';
import { FoodRecord, foodTimes } from 'src/app/shared/types/record.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foodTimes: { time: string, foodRecords: FoodRecord[] }[];

  constructor() { }

  ngOnInit() {
    this.foodTimes = foodTimes.map(time => { return { time: time, foodRecords: [] } });
    this.addFood({ food: "アボカド　生", amount: "100 gram", time: "Breakfast" });
  }

  addFood(event: any) {
    console.log(event);
    let time = this.foodTimes.find(time => time.time === event.time);
    if (time) {
      time.foodRecords.push({ food: event.food, amount: event.amount })
    }
  }

  listChanged(){
    console.log("listchanged");
  }

}
