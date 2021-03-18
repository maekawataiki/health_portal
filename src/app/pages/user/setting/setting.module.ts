import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting/setting.component';
import { AccountComponent } from './account/account.component';
import { PreferenceComponent } from './preference/preference.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [SettingComponent, AccountComponent, PreferenceComponent, ProfileComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
