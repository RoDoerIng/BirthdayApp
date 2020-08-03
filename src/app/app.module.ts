import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { BatteryComponent } from './battery/battery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    BatteryComponent,
    Question1Component,
    Question2Component,
    Question3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
