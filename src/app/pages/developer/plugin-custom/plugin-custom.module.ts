import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginCustomRoutingModule } from './plugin-custom-routing.module';
import { PluginNewComponent } from './plugin-new/plugin-new.component';
import { PluginEditorComponent } from './plugin-editor/plugin-editor.component';
import { PluginCustomComponent } from './plugin-custom/plugin-custom.component';
import { PluginCustomDetailComponent } from './plugin-custom-detail/plugin-custom-detail.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { ResizableModule } from 'angular-resizable-element';
import { EditerComponent } from './plugin-editor/editer/editer.component';
import { RunnerComponent } from './plugin-editor/runner/runner.component';
import { TreeViewerComponent } from './plugin-editor/runner/tree-viewer/tree-viewer.component';

@NgModule({
  declarations: [
    PluginNewComponent,
    PluginEditorComponent,
    PluginCustomComponent,
    PluginCustomDetailComponent,
    EditerComponent,
    RunnerComponent,
    TreeViewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    PluginCustomRoutingModule,
    SharedComponentsModule,
    MonacoEditorModule,
    ResizableModule
  ]
})
export class PluginCustomModule { }
