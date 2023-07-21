import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor() { }
  private _giftHistory: string[] = [];

  public get giftHistory(){
    return [...this._giftHistory];
  }

  public searchGift( gift: string): void{
    gift = gift.toLowerCase();
    if(!gift)
    {
      alert("Insert a valid gift name");
      return;
    }
    this.addGiftToHistory(gift);
    this._giftHistory.unshift(gift);
  }

  public removeGift( gift: string): void{
    this._giftHistory.filter(x => x != gift);
  }

  private addGiftToHistory( gift: string):void{
    this._giftHistory = this._giftHistory.filter(x => x != gift);
    this._giftHistory = this._giftHistory.slice(0, 10);
    console.log(this.giftHistory);
  }
}
