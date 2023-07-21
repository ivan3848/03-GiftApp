import { Component, Input } from '@angular/core';
import { Data } from '../../interfaces/gift.interface';

@Component({
  selector: 'gift-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public gift: Data = 
  {
    url: '',
    title: ''
  };
}
