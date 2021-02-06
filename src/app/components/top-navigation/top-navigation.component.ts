import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.less']
})
export class TopNavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  goHome() {
    this.router.navigate(['/', 'content-home']);
  }
}
