import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Data, SearchGiftResponse } from '../interfaces/gift.interface';

const giftUrl: string = 'https://api.giphy.com/v1/gifs/search';
const apiKey : string = 'K0i5V7JfRHzlF0rQ7VlfgUoulSMD5bN7';

@Injectable({
  providedIn: 'root'
})

export class GiftService {

  private _giftHistory: string[] = [];
  private _giftList: Data[] = [];

  constructor(private http: HttpClient ) { }

  public get giftHistory(){
    return [...this._giftHistory];
  }

  public get giftList(){
    return [...this._giftList];
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
    this.searchGiftInApi(gift);
  }

  public removeGift( gift: string): void{
    this._giftHistory.filter(x => x != gift);
  }

  private searchGiftInApi( gift: string): void{
    
    const params: HttpParams = new HttpParams()
      .set('api_key', apiKey)
      .set('limit', '10')
      .set('q', gift); 
    
    this.http.get<SearchGiftResponse>(giftUrl, { params })
      .subscribe(resp => 
        {
          this._giftList = resp.data;
        });
  }

  private addGiftToHistory( gift: string):void{
    this._giftHistory = this._giftHistory.filter(x => x != gift);
    this._giftHistory = this._giftHistory.slice(0, 10);
  }
}
