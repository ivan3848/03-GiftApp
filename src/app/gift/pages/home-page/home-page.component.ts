import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'gift-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor( private giftService: GiftService){}

}
