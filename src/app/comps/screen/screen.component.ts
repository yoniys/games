import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  playr = "0"

  // place=[1,2,3,4,5,6,7,8,9]
  constructor(public s: S1Service,public http: HttpClient) {

// setInterval(this.updeates,3000)
    // setInterval(this.updeates,3000)
  }
  //  document.querySelectorAll('[data-foo="value"]')

  ngOnInit(): void {
    this.playr = this.s.chose_x_or_o.toString()
  }

  chose(place) {
    this.s.check_turns()
    if (!place.activate && this.s.yourturn) {
      console.log(place.id);
      this.updeate(place.id);
      // this.updeates()
      // setTimeout(this.updeates, 15000);
      // setInterval(this.updeates,3000)
      this.s.yourturn = false
    }
    else {
      console.log("not your turn");
    }
  }

  updeates() {

    console.log(this.s.arr1);
    let a = this.s.arr1

    for (let place of this.s.arr1) {
      if (place.activate) {

        console.log("updeates");

        // document.querySelector(`div[place="${place.id}"]`).innerHTML += (this.playr == "x") ? this.x() : this.o()
        let element = document.querySelector(`div[place="${place.id}"`)
        if (element.childNodes.length < 1) {
          element.innerHTML += (place.playr == "x") ? this.x() : this.o()
        }
        console.log(document.querySelector(`div[place="${place.id}"`));
      }
    }
  }
  updeate(id) {
    this.httpGet(`http://localhost:8080/tic-tac-data.json?id=${id}&playr=${this.s.chose_x_or_o}&name=${this.s.player_details.name}`)
    .subscribe((result) => {
      this.s.arr1 = result
      console.log(this.s.arr1);
      console.log(this.s.arr1[0].id);
      console.log("updeate working");
      this.updeates()
      // this.isPaused = false
    })
this.updeates()
this.check(this.s.arr1,"o")
this.check(this.s.arr1,"x")
  }

  httpGet(url: string): Observable<any> {

    return this.http.get(url)
  }

check(a,b){
   
    if(a[0].playr==b && a[1].playr==b && a[2].playr==b ||
       a[3].playr==b && a[4].playr==b && a[5].playr==b||
       a[6].playr==b && a[7].playr==b && a[8].playr==b||
    
       a[0].playr==b && a[3].playr==b && a[6].playr==b||
       a[1].playr==b && a[4].playr==b && a[7].playr==b||
       a[2].playr==b && a[5].playr==b && a[8].playr==b||
    
       a[0].playr==b && a[4].playr==b && a[8].playr==b||
       a[2].playr==b && a[4].playr==b && a[6].playr==b
       ){
    
       this.s.restart()
      this.s.refresh()

      for(let i of this.s.profiles){
        if(this.s.player_details.name==i.name && this.s.player_details.code==i.code){
          
          this.s.player_details.wins=i.wins
         
          
        }
      }
      console.log(b+" win");
    }
        
      
}

  o() {
    return `<svg  width="5em" height="6em" viewBox="0 0 16 16" class="bi bi-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>`}

  x() {
    return `<svg width="10em" height="10em" viewBox="0 3 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`
  }
}
