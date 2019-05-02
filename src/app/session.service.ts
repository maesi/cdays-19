import { Injectable } from '@angular/core';
import {User} from "./types/user";
import {ActivatedRoute, Router} from '@angular/router';

const localStorageKey = "cdays-user";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user: User;


  constructor(private router: Router, private route: ActivatedRoute) {
    let userAsString = localStorage.getItem(localStorageKey);
    if (userAsString !== null) {
      let user = JSON.parse(userAsString);
      this.login(user.username, user.passwort, null);
    }
  }

  public getUser(): User {
    return this.user;
  }

  public isLoggedIn(): boolean {
    return this.user !== null && this.user !== undefined;
  }

  public login(username: string, password: string, returnUrl: string): void {
    this.updateUser(username === password ? {
      username: username,
      passwort: password,
      avatar: "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
    } : null, returnUrl);
  }

  public logout(): void {
    this.updateUser(null, null);
  }

  private updateUser(user: User, returnUrl: string | null): void {
    this.user = user;
    if (user === null) {
      localStorage.removeItem(localStorageKey);
    } else {
      localStorage.setItem(localStorageKey, JSON.stringify(user));
      if(returnUrl != null) {
        this.router.navigate([returnUrl]);
      }
    }
  }
}
