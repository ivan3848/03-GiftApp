import { Component } from '@angular/core';
import { GiftService } from 'src/app/gift/services/gift.service';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {
  
  constructor( private giftService: GiftService){}

  public get history(){
    return this.giftService.giftHistory;
  }

}
