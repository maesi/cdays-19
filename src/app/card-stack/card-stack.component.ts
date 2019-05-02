import {Component, OnInit} from '@angular/core';
import {cardStack} from './card-stack';
import {Topic} from '../types/topic';
import {TopicService} from "../topic.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent implements OnInit {

  cards: Observable<Topic[]>;

  constructor(private topicService: TopicService) {
  }

  ngOnInit() {
    this.cards = this.topicService.items;
    this.cards
        .subscribe((data) =>
          setTimeout(function () {
            cardStack();
          }, 150)
        );
  }

  like(id: string): void {
    console.log('like' + id);
  }

  dislike(id: string): void {
    console.log('dislike' + id);
  }

}
