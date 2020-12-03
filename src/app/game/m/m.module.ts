import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from '../board/board.component';
import { StateComponent } from '../state/state.component';
import { TileComponent } from '../tile/tile.component';
import { WarperComponent1 } from '../warper/warper.component';
import * as Hammer from 'hammerjs';

import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}


@NgModule({
  declarations: [
    BoardComponent,
    TileComponent,
    StateComponent,
    WarperComponent1
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HammerModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
  ],
  bootstrap: [WarperComponent1]
})
export class MModule { }
