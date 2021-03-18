import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: Routes = [
  { path: '', component: FoodComponent, pathMatch: 'full' },
  { path: 'detail', component: FoodDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
