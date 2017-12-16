import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '"Why Targeted Ads?"';
  newSession = false;
  initialLanding = true;
  constructor() {
    setTimeout( ()=>{
      this.newSession=true;
    }, 2000);
   }

  ngOnInit() {
  }
  doSomething(date: any):void {
    this.initialLanding = false;
  }
}
