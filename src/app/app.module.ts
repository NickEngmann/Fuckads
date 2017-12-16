import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ExplainationComponent } from './explaination/explaination.component';
import { FormComponent } from './form/form.component';
import { LandingComponent } from './landing/landing.component';
import {CarouselService} from './carousel/carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ExplainationComponent,
    FormComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
