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

  currentUser: User;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.currentUser = this.sessionService.getUser();
  }

}
