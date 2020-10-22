import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-x-or-o',
  templateUrl: './x-or-o.component.html',
  styleUrls: ['./x-or-o.component.css']
})
export class XOrOComponent implements OnInit {
  

  constructor(public s:S1Service) {
    
   }

  ngOnInit(): void {
  }
  playrx(){this.s.chose_x_or_o="x"
this.s.yourturn=true}
  playro(){this.s.chose_x_or_o="o"}
}
