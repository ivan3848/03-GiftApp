import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations:
  [
    HomePageComponent,
    SearchBarComponent
  ],
  exports:
  [
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})

export class GiftModule { }
