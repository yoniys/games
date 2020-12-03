import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BoardComponent } from './Board-game/board.component';
import { AllGamesComponent } from './comps/all-games/all-games.component';
import { LogInComponent } from './comps/log-in/log-in.component';
import { WarperComponent1 } from './game/warper/warper.component';



const routes: Routes = [
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path:'log-in',component:LogInComponent},
  {path:'all-games',component:AllGamesComponent},
  {path:'pazel-game',component:WarperComponent1},
  {path:'game-bord',component:BoardComponent },
  {path:'admin',component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
