import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class S1Service {
  first_time=false
  yourturn = false
  activate = true
  profiles
  arr1
  isPaused = true
  player_details
  choose_game = ''
  constructor(public http: HttpClient) {

  if(localStorage.length){
    console.log(localStorage.length);
   this.getUserData(localStorage.getItem('user'))
   console.log(this.player_details);
  }

    this.httpGet(`http://localhost:3000/profils-co/findAll`)
      .subscribe((result) => {
        this.profiles = result
        console.log(this.profiles);
        // console.log(this.arr1[0].id);

      })


  }
  updeate_wins(id, wins) {
   this.http.put(`http://localhost:3000/profils-co/edit/${id}`, { wins: wins + 1 }).subscribe(()=>{
    this.refreshP(id)
    this.first_time=true
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


  refresh() {
    this.httpGet(`http://localhost:8080/profile.json`)
      .subscribe((result) => {
        this.profiles = result
        console.log(this.profiles);
        // console.log(this.arr1[0].id);

      })
  }

 
  refreshP(id) {
    this.http.get(`http://localhost:3000/profils-co/findOne/${id}`)
      .subscribe((result) => {
        this.player_details = result
        console.log(this.player_details);
      })
  }
  public async newregister(name, p) {
    await this.http.post('http://localhost:3000/profils-co/create',
      { Name: name, password: p, wins: 0 }).subscribe((r) => {
       this.player_details=r
       console.log(this.player_details);
       this.getToken(this.player_details.password)

      })
  }
  getToken(password) {
    localStorage.clear()
    localStorage.setItem(`user`, password );
   }
   getTokenlogin(password) {
     this.http.get('http://localhost:3000/profils-co/creattoken').subscribe((r)=>{
       this.player_details.password=r
      this.getToken(this.player_details.password)
     })
   
   }


 

  httpGet(url: string): Observable<any> {

    return this.http.get(url)
  }


  public async getUserData(password) {
    console.log(password);
    await this.http.get(`http://localhost:3000/profils-co/findOne/token/${password}`).subscribe((r) => {
      console.log(r);
      this.player_details = r
      console.log(this.player_details.Name);
      
      
    })
  }
  public async getUserDatalogin(password) {
    console.log(password);
    await this.http.get(`http://localhost:3000/profils-co/findOne/token/login/${password}`).subscribe((r) => {
      console.log(r);
      this.player_details = r
      console.log(this.player_details.Name);
      this.getToken(this.player_details.password)
      
      
    })
  }
  




}


