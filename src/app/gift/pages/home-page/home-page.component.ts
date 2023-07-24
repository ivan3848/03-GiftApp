import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'gift-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor( private giftService: GiftService){}

  private _cardDataList : Card[] = [];

  public get giftList(){
    return this.giftService.giftList;
  }

  public get cardDataList(): Card[]{
    return this._cardDataList;
  }

  public get cardData(): Card[]{
    this.giftList.some(gift => {
      this._cardDataList.push(
        {
          title: gift.title,
          url: gift.images.downsized_medium.url
        });
    });

    console.log(this._cardDataList);
    return this._cardDataList;
  }
}
