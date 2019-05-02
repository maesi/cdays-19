import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Topic} from "../types/topic";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public topics: Observable<Topic[]>;
  private topicCollection: AngularFirestoreCollection<Topic>;

  constructor(private afs: AngularFirestore) {
    this.topicCollection = afs.collection<Topic>('topic');
    this.topics = this.topicCollection.valueChanges();
  }

  ngOnInit() {
  }

}
