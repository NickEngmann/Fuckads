import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ExplainationComponent } from './explaination/explaination.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ExplainationComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
