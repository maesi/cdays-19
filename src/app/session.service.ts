import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const localStorageKey = "cdays-username";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private username: string;

  constructor() { 
    this.username = localStorage.getItem(localStorageKey);
  }

  public isLoggedIn(): boolean {
    return this.username !== null;
  }

  public login(username: string, password: string): Observable<boolean> {
    let ok = username === password;
    if (ok) {
      this.username = username;
      localStorage.setItem(localStorageKey, this.username);
    }
    return of(ok);
  }

  public logout(): void {
    localStorage.removeItem(localStorageKey);
    this.username = null;
  }
}
