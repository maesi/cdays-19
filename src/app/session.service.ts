import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private username: string;

  constructor() { 
    this.username = localStorage.getItem('username');
  }

  public isLoggedIn(): boolean {
    return this.username !== undefined;
  }

  public login(username: string, password: string): Observable<boolean> {
    let ok = username === password;
    if (ok) {
      this.username = username;
      localStorage.setItem('username', this.username);
    }
    return of(ok);
  }

  public logout(): void {
    localStorage.removeItem('username');
    this.username = undefined;
  }
}
