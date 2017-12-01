import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var currdeg:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  carousel = $(".carousel");
  currdeg  = 0;
  next(){
    $(".next").on("click", { d: "n" }, this.rotate(1, this.currdeg));
  }
  prev(){
    $(".prev").on("click", { d: "p" }, this.rotate(2, this.currdeg));
  }
  rotate(num, currdeg){
    this.carousel = $(".carousel");
    if(num == 1){
      this.currdeg = currdeg - 60;
    }
    if(num == 2){
      this.currdeg = currdeg + 60;
    }
    this.carousel.css({
      "-webkit-transform": "rotateY("+this.currdeg+"deg)",
      "-moz-transform": "rotateY("+this.currdeg+"deg)",
      "-o-transform": "rotateY("+this.currdeg+"deg)",
      "transform": "rotateY("+this.currdeg+"deg)"
    });
  }
  
  constructor() { }

  ngOnInit() {
  }

}
