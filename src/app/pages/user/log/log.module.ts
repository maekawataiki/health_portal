import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log/log.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    LogRoutingModule
  ]
})
export class LogModule { }
