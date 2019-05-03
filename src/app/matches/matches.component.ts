import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Topic} from "../types/topic";
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public topics: Topic[];

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.topics = this.storageService.getTopTopics();
  }

}
