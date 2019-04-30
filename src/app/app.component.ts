import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemsCollection: AngularFirestoreCollection<User>;
  items: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<User>('user');
    this.items = this.itemsCollection.valueChanges();
  }


}
