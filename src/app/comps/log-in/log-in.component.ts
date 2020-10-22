import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  exists=false
  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }
  register(name,p){
    this.s.newregister(name,p)
    this.exists=true
    this.s.player_details= {"name": name,"code": p,"wins": 0}
  }

  login(name,p){
    for(let i of this.s.profiles){
      if(name==i.name && p==i.code){
        this.exists=true
        this.s.player_details=i
      }
      console.log(i.name);
      console.log(i.code);
    }
    if(!this.exists){
     alert ("the code or the name are not coreccrt");
    console.log("alert");
  }
  }
  
}
