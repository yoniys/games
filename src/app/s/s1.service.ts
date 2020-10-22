import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class S1Service {
  yourturn=false
  activate = true
  profiles
  arr1
  isPaused = true
  chose_x_or_o = ""
  player_details
  choose_game=''
  constructor(public http: HttpClient) {

    this.httpGet(`http://localhost:8080/tic-tac-data.json`)
      .subscribe((result) => {
        this.arr1 = result
        console.log(this.arr1);
        console.log(this.arr1[0].id);
        // ?id=1
        // ?playr
      })
    this.httpGet(`http://localhost:8080/profile.json`)
      .subscribe((result) => {
        this.profiles = result
        console.log(this.profiles);
        console.log(this.arr1[0].id);
    
      })


  }
  // updeate(id) {
  //   this.httpGet(`http://localhost:8080/tic-tac-data.json?id=${id}&playr=${this.chose_x_or_o}&name=${this.player_details.name}`)
  //   .subscribe((result) => {
  //     this.arr1 = result
  //     console.log(this.arr1);
  //     console.log(this.arr1[0].id);
  //     console.log("updeate working");
  //     this.isPaused = false
  //   })

  // }

  restart() {
    this.httpGet(`http://localhost:8080/tic-tac-data.json?restart=true`)
    .subscribe((result) => {
      this.arr1 = result
      console.log(this.arr1);
      console.log(this.arr1[0].id);
      console.log("restart working");

    })
    this.chose_x_or_o=""
  }

  refresh(){
    this.httpGet(`http://localhost:8080/profile.json`)
    .subscribe((result) => {
      this.profiles = result
      console.log(this.profiles);
      console.log(this.arr1[0].id);
  
    })
  }

  newregister(name, p) {
    this.httpGet(`http://localhost:8080/profile.json?name=${name}&code=${p}`)
    .subscribe((result) => {
      this.profiles = result
      console.log(this.profiles);
      console.log("updet profiles working");

    })
   }

   check_turns(){
     let o=0
     let x=0
    this.httpGet(`http://localhost:8080/tic-tac-data.json`)
    .subscribe((result) => {
      this.arr1 = result
      console.log(this.arr1);
      for(let turns of this.arr1){
        if(turns.playr=="o"){o++}
        if(turns.playr=="x"){x++}
      }
      console.log("o="+o);
      console.log("x="+x);
      
      if(o>=x && this.chose_x_or_o=="x"){this.yourturn=true
      console.log("o>x");
      }
      else if(o<x && this.chose_x_or_o=="o"){this.yourturn=true}
    })
   }


  httpGet(url: string): Observable<any> {

    return this.http.get(url)
  }





}


