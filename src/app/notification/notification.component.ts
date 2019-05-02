import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Notifikation} from "../types/notifikation";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public notifikations: Observable<Notifikation[]>;
  private notifikationCollection: AngularFirestoreCollection<Notifikation>;

  constructor(private afs: AngularFirestore) {
    this.notifikationCollection = afs.collection<Notifikation>('notification');
    this.notifikations = this.notifikationCollection.valueChanges();
  }

  ngOnInit() {
  }

}
