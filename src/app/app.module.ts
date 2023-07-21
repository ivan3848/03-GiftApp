import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GiftModule } from './gift/gift.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations:
  [
    AppComponent
  ],
  imports:
  [
    BrowserModule,
    GiftModule,
    SharedModule
  ],
  providers:
  [
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
