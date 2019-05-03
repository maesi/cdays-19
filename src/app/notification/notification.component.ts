import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {Notifikation, NotifikationTyp} from '../types/notifikation';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifikationen: Notifikation[];
  NotifikationTyp = NotifikationTyp;

  constructor(private storageServie: StorageService, private router: Router) {
    this.notifikationen = this.storageServie.getNotifikationen();
  }

  ngOnInit() {
  }

  openNotification(id: number, navigation: any[]): void {
    this.storageServie.readNotifikation(id);
    this.router.navigate(navigation);
  }

}
