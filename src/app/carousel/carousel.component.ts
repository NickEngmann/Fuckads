import { Component, OnInit, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  id = 0;
  carouselArray = ["USA", "UK", "Australia", "Germany", "France", "Brazil"];
  currdeg = 0;
  
  constructor(
    private carouselservice: CarouselService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
  }
  
  pickDate(date: any): void {
    this.onDatePicked.emit(date);
  }
  
  changeLayout(): void {
    this.pickDate("swag");
  }
  
  next(): void {
    if (this.id == 5) {
      this.id = 0;
    } else {
      this.id++;
    }
    this.currdeg = this.currdeg - 60;
    this.updateCarouselRotation();
    this.carouselservice.update(this.id);
  }
  
  prev(): void {
    if (this.id == 0) {
      this.id = 5;
    } else {
      this.id--;
    }
    this.currdeg = this.currdeg + 60;
    this.updateCarouselRotation();
    this.carouselservice.update(this.id);
  }
  
  private updateCarouselRotation(): void {
    const carousel = this.elRef.nativeElement.querySelector('.carousel');
    if (carousel) {
      this.renderer.setStyle(carousel, 'transform', `rotateY(${this.currdeg}deg)`);
      this.renderer.setStyle(carousel, '-webkit-transform', `rotateY(${this.currdeg}deg)`);
      this.renderer.setStyle(carousel, '-moz-transform', `rotateY(${this.currdeg}deg)`);
      this.renderer.setStyle(carousel, '-o-transform', `rotateY(${this.currdeg}deg)`);
    }
  }
}
