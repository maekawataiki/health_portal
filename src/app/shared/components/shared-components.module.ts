import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { WaveComponent } from './wave/wave.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { WaveStrokeComponent } from './wave-stroke/wave-stroke.component';
import { PluginListComponent } from './plugin-list/plugin-list.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    CardComponent, 
    WaveComponent, 
    WaveStrokeComponent, 
    FooterComponent, 
    PluginListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    NavbarModule
  ],
  exports: [
    CardComponent,
    WaveComponent,
    WaveStrokeComponent,
    FooterComponent,
    PluginListComponent,
    NavbarModule
  ]
})
export class SharedComponentsModule { }
