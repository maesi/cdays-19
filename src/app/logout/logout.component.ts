import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService) {

    if (!this.session.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  logout() {
    this.session.logout();
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/']);
  }

}
