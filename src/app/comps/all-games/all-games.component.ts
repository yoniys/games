import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  img="../../../assets/img/b7-1.gif"
  constructor(public s:S1Service) { }

  ngOnInit(): void {
    
    
  }
  first_time(){this.img="../../../assets/img/box.gif"
  setTimeout(()=>{ this.img="../../../assets/img/puzzle.jpg";this.notfirst()}, 1000);
  }

  notfirst(){this.s.first_time=false}
  choose(game){
    this.s.choose_game=game
  }
}
