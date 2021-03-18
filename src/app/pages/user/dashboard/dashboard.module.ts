import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
