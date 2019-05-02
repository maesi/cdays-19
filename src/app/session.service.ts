import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {User} from "./types/user";

const localStorageKey = "cdays-user";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private itemsCollection: AngularFirestoreCollection<User>;

  private $currentUserSubject: BehaviorSubject<User | null>;
  private $currentUser: Observable<User>;


  private username: string;


  constructor(private afs: AngularFirestore) {
    this.$currentUserSubject = new BehaviorSubject<User | null>(null);
    this.$currentUser = this.$currentUserSubject.asObservable();
    let userAsString = localStorage.getItem(localStorageKey);
    if (userAsString !== null) {
      let user = JSON.parse(userAsString);
      this.login(user.username, user.passwort);
    }
  }

  public get currentUser(): Observable<User> {
    return this.$currentUser;
  }


  public isLoggedIn(): boolean {
    return this.$currentUserSubject.getValue() !== null;
  }

  public login(username: string, password: string): void {
    this.afs.collection<User>('user', ref => ref.where('username', '==', username)
                                                .where('passwort', '==', password))
        .valueChanges()
        .subscribe(users => {
          if (users.length === 1) {
            this.updateUser(users[0]);
          }
        });
  }

  public logout(): void {
    this.updateUser(null);
  }

  private updateUser(user: User): void {
    if (user === null) {
      localStorage.removeItem(localStorageKey);
    } else {
      localStorage.setItem(localStorageKey, JSON.stringify(user));
    }
    this.$currentUserSubject.next(user);
  }
}
