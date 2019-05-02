import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {Notifikation, NotifikationTyp} from '../types/notifikation';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifikationen: Notifikation[];
  NotifikationTyp = NotifikationTyp;

  constructor(private storageServie: StorageService) {
    this.notifikationen = this.storageServie.getNotifikationen();
    this.storageServie.resetNotifikationCount();
  }

  ngOnInit() {
  }

}
