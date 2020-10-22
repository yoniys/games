import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './comps/screen/screen.component';
import { XOrOComponent } from './comps/x-or-o/x-or-o.component';
import { WarperComponent } from './comps/warper/warper.component';
import { LogInComponent } from './comps/log-in/log-in.component';
import { AllGamesComponent } from './comps/all-games/all-games.component';



@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    XOrOComponent,
    WarperComponent,
    LogInComponent,
    AllGamesComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
