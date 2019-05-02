import { Injectable } from '@angular/core';
import {User} from "./types/user";
import {Router} from "@angular/router";

const localStorageKey = "cdays-user";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user: User;


  constructor(private router: Router) {
    let userAsString = localStorage.getItem(localStorageKey);
    if (userAsString !== null) {
      let user = JSON.parse(userAsString);
      this.login(user.username, user.passwort);
    }
  }

  public getUser(): User {
    return this.user;
  }

  public isLoggedIn(): boolean {
    return this.user !== null && this.user !== undefined;
  }

  public login(username: string, password: string): void {
    this.updateUser(username === password ? {
      username: username,
      passwort: password,
      avatar: "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
    } : null);
  }

  public logout(): void {
    this.updateUser(null);
  }

  private updateUser(user: User): void {
    this.user = user;
    if (user === null) {
      localStorage.removeItem(localStorageKey);
    } else {
      localStorage.setItem(localStorageKey, JSON.stringify(user));
      this.router.navigate(['/']);
    }
  }
}
