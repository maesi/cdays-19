import { Component } from '@angular/core';
import {SessionService} from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn: boolean;

  constructor(private sessionService: SessionService) {
    this.isLoggedIn = true;
  }
}
