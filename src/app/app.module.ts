import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LogInComponent } from './comps/log-in/log-in.component';
import { AllGamesComponent } from './comps/all-games/all-games.component';
import { BoardComponent } from './Board-game/board.component';
import { MModule } from './game/m/m.module';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [BoardComponent,
    AppComponent,
    LogInComponent,
    AllGamesComponent,
    AdminComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
