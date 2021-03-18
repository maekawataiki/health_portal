import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
        pathMatch: "full"
      },
      {
        path: 'plugin',
        loadChildren: () => import('../../shared/pages/plugin/plugin.module').then(mod => mod.PluginModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
