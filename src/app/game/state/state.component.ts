import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../board/board.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(
    public boardService: BoardService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  rout(){
    this.router.navigate(['/all-games'])
  }
}
