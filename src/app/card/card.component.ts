import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() protected key: string;
  @Input() protected image: string;
  @Input() protected label: string;
  @Input() protected description: string;

  constructor() { }
}
