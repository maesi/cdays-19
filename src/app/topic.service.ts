import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Topic} from "./types/topic";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  public items: Observable<Topic[]>;
  private itemsCollection: AngularFirestoreCollection<Topic>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Topic>('topic');
    this.items = this.itemsCollection.valueChanges();
  }
}
