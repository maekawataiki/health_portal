import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger, { static: true }) trigger: MatMenuTrigger;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.trigger.closeMenu();
  }

}
