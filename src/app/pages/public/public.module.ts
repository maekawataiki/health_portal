import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public/public.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
