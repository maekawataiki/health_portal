import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluginCustomComponent } from './plugin-custom/plugin-custom.component';
import { PluginCustomDetailComponent } from './plugin-custom-detail/plugin-custom-detail.component';
import { PluginNewComponent } from './plugin-new/plugin-new.component';
import { PluginEditorComponent } from './plugin-editor/plugin-editor.component';

const routes: Routes = [
  { path: '', component: PluginCustomComponent },
  { path: 'detail/:id', component: PluginCustomDetailComponent },
  { path: 'new', component: PluginNewComponent },
  { path: 'edit/:id', component: PluginEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginCustomRoutingModule { }
