import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginRoutingModule } from './plugin-routing.module';
import { PluginComponent } from './plugin/plugin.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluginDetailComponent } from './plugin-detail/plugin-detail.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
@NgModule({
  declarations: [
    PluginComponent,
    PluginDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PluginRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule,
  ]
})
export class PluginModule { }
