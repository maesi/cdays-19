import { Component, OnInit, AfterViewInit } from '@angular/core';
import {cardStack} from './card-stack';
import { Card } from '../types/card';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.scss']
})
export class CardStackComponent implements OnInit, AfterViewInit {

  public cards: Card[];

  constructor() { }

  ngOnInit() {
    this.cards = [
      {
        id: "123",
        image: "https://image.ibb.co/gQsq07/Adventure_and_Outdoor.png",
        label: "Adventure <br/> and Outdoor",
        description: "10 Destinations"
      },
      {
        id: "234",
        image: "https://image.ibb.co/fXPg7n/Beach_and_Chill.png",
        label: "Beach <br/> and Chill",
        description: "12 Destinations"
      },
      {
        id: "345",
        image: "ttps://image.ibb.co/c9gTnn/Romantic_Gateways.png",
        label: "Romantic <br/> Gateways",
        description: "15 Destinations"
      },
      {
        id: "456",
        image: "https://image.ibb.co/jY88nn/city_breaks.png",
        label: "City <br/> Breaks",
        description: "32 Destinations"
      }
    ];
  }
  
  ngAfterViewInit(): void {
    cardStack();
  }

}
