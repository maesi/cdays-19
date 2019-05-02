import { Component, OnInit } from '@angular/core';
import {SessionService} from "../session.service";
import {Observable} from "rxjs";
import {User} from "../types/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser$: Observable<User>;

  constructor(private sessionService: SessionService) {
    this.currentUser$ = this.sessionService.currentUser;
  }

  ngOnInit() {
  }

}
