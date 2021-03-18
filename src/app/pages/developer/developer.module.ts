import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer/developer.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [DeveloperComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
