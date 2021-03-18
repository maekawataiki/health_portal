import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './food-list/food-list.component';
import { AngularMaterialModule } from '../../../../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FoodListComponent, FoodComponent, FoodDetailComponent, FoodSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FoodRoutingModule,
    AngularMaterialModule,
    DragDropModule
  ]
})
export class FoodModule { }
