import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'log',
        loadChildren: () => import('./log/log.module').then(mod => mod.LogModule)
      },
      {
        path: 'plugin',
        loadChildren: () => import('../../shared/pages/plugin/plugin.module').then(mod => mod.PluginModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then(mod => mod.SettingModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
