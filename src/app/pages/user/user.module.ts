import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
