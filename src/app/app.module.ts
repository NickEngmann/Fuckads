import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    MatButtonModule
  ],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
