import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() links;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
