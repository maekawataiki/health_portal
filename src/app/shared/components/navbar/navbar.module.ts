import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    ColorPickerComponent,
    DarkModeComponent,
    UserMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
