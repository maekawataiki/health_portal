import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  {
    path: '', component: DeveloperComponent, children: [
      {
        path: '',
        redirectTo: 'docs',
        pathMatch: 'full'
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(mod => mod.DocsModule)
      },
      {
        path: 'plugin',
        loadChildren: () => import('./plugin-custom/plugin-custom.module').then(mod => mod.PluginCustomModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRoutingModule { }
