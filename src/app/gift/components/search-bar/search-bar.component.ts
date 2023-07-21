import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'gift-search-bar',
  templateUrl: './search-bar.component.html',
})

export class SearchBarComponent {

  constructor( private giftService: GiftService){}

  @ViewChild('txtSearchGift')
  public searchValue!: ElementRef<HTMLInputElement>;

  public searchGift():void{
      let gift = this.searchValue.nativeElement.value;
      this.giftService.searchGift(gift);
      this.searchValue.nativeElement.value = '';
  }
}
