import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-warper',
  templateUrl: './warper.component.html',
  styleUrls: ['./warper.component.css']
})
export class WarperComponent implements OnInit {
 empty=""

  constructor(public s:S1Service) {
   
   }

  ngOnInit(): void {
  }

}
