import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { AccountComponent } from './account/account.component';
import { PreferenceComponent } from './preference/preference.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {
    path: '', component: SettingComponent, children: [
      { path: 'account', component: AccountComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/edit', component: ProfileEditComponent },
      { path: 'preference', component: PreferenceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
