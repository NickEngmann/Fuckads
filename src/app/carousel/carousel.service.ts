import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {
  private id = 0
  constructor() { }
  update(id){
    this.id = id
    console.log(this.id)
    return this.id
  }
  current(){
    return this.id
  }
}
