import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  
  constructor(public s:S1Service) { }

  ngOnInit(): void {
    
    
  }
  choose(game){
    this.s.choose_game=game
  }
}
