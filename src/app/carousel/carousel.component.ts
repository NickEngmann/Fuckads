import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarouselService } from './carousel.service';
declare var jquery:any;
declare var $ :any;
declare var currdeg:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  id = 0;
  carouselArray = ["USA", "UK", "Australia", "Germany", "France", "Brazil"]
  carousel = $(".carousel");
  currdeg  = 0;
  constructor(private carouselservice: CarouselService) {

  }

  ngOnInit() {
  }
  pickDate(date: any): void {
    this.onDatePicked.emit(date);
  }
  changeLayout(){
    this.pickDate("swag")
  }
  next(){
    $(".next").on("click", { d: "n" }, this.rotate(1, this.currdeg));
    if(this.id == 5){
      this.id = 0
    }
    else{
      this.id++
    }
    this.carouselservice.update(this.id)
  }
  prev(){
    $(".prev").on("click", { d: "p" }, this.rotate(2, this.currdeg));
    if(this.id == 0){
      this.id = 5;
    }
    else{
      this.id--;
    }
    this.carouselservice.update(this.id)
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

}
