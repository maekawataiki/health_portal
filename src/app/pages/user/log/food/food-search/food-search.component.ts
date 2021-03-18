import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize, map } from 'rxjs/operators';
import { Food } from 'src/app/shared/types/food.model';
import { FoodService } from '../food.service';
import { foodTimes } from 'src/app/shared/types/record.model';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent implements OnInit {
  @Output() log = new EventEmitter();
  isLoading: boolean = false;
  foodCtrl = new FormControl();
  amountCtrl = new FormControl();
  suggestions: Food[];
  amounts: string[];
  times: string[] = foodTimes;
  time: string = "";
  private units: string[] = ["gram", "tbsp", "tsp"]

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodCtrl.valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap(keyword => this.foodService.getSuggetion(keyword)
          .pipe(finalize(() => this.isLoading = false))
        )
      ).subscribe(suggestions => console.log(suggestions));//this.suggestions = suggestions);
    this.amountCtrl.valueChanges
      .pipe(
        debounceTime(300),
        map(value => value + " "),
        map((value: string) => Number(value.substring(0, value.search(/[\D]/g))) || 1)
      ).subscribe(value => this.amounts = this.units.map(unit => value + " " + unit));
  }

  submit() {
    let food: string = this.foodCtrl.value;
    let amount: string = this.amountCtrl.value;
    let time: string = this.time;
    this.log.emit({ food: food, amount: amount, time: time });
  }

}
