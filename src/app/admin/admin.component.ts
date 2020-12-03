import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s/s1.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
visibul=true
  allUsersData
saveCode
  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }
  enterData(code){
  this.s.http.get(`http://localhost:3000/profils-co/findAll/admin/${code}`).subscribe((data)=>
  {
    this.allUsersData=data
  if(this.allUsersData){this.visibul=false}
  })
  this.saveCode=code  
}
  delete(id){
    this.s.http.delete(`http://localhost:3000/profils-co/remove/${id}`).subscribe()
 console.log(`delete:${id}`);
 this.enterData(this.saveCode)
  }

}
