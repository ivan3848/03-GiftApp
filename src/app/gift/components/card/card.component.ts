import { Component, Input } from '@angular/core';
import { Data } from '../../interfaces/gift.interface';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'gift-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input()
  public cardData: Card =
  {
    url: '',
    title: ''
  };
}
