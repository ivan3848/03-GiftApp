import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Card } from '../../interfaces/card';
import { Data } from '../../interfaces/gift.interface';

@Component({
  selector: 'gift-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor( private giftService: GiftService){}

  public get giftList(): Data[]{
    return this.giftService.giftList;
  }

  public get carData(): Card[]{
    return this.giftService.cardData;
  }

}
