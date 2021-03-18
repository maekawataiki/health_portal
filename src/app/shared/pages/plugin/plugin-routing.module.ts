import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluginComponent } from './plugin/plugin.component';
import { PluginDetailComponent } from './plugin-detail/plugin-detail.component';

const routes: Routes = [
  { path: '', component: PluginComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: PluginDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginRoutingModule { }
