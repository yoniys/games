import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  exists = false
  constructor(public s: S1Service, public router: Router) { }

  ngOnInit(): void {
  }
  register(name, p) {
    this.s.player_details = { "Name": name, "code": p, "wins": 0 }
    this.s.newregister(name, p)
    this.router.navigate(['/all-games'])
    
  }

  login(name, p) {
    for (let i of this.s.profiles) {
      if (name == i.Name && p == i.password) {
        this.exists = true
        this.s.player_details = i
       this.s.getUserDatalogin(p)
      }
      
      console.log(i.name);
      console.log(i.code);
    }
    if (this.exists) { this.router.navigate(['/all-games'])}
    else if (!this.exists) {
      alert("the code or the name are not coreccrt");
      console.log("alert");
    }
  }

}
