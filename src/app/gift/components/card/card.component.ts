import { Component, Input } from '@angular/core';
import { Data } from '../../interfaces/gift.interface';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'gift-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input()
  public cardData!: Card;

  public hasLoad: boolean = false;

  public onLoad():void{
    setTimeout(function(){}, 500);
    this.hasLoad = true;
  }
}
