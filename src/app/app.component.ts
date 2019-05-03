import { Component } from '@angular/core';
import {SessionService} from "./session.service";
import {StorageService} from './storage.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn: boolean;
  notifikationCount: number;

  constructor(private sessionService: SessionService, private storageService: StorageService) {
    this.isLoggedIn = true;
    this.storageService.getNotifikationCount().subscribe(value => this.notifikationCount = value);
    document.getElementById('app-root').requestFullscreen();
  }
}
