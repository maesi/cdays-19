import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public key: string;
  @Input() public image: string;
  @Input() public label: string;
  @Input() public description: string;

  constructor() { }
}
