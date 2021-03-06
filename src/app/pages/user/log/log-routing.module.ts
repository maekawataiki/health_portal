import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {
    'path': '', component: LogComponent, children: [
      {
        path: 'food',
        loadChildren: () => import('./food/food.module').then(mod => mod.FoodModule)
      },
      {
        path: '',
        redirectTo: 'food',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
