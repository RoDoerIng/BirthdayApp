import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'question1', component: Question1Component, pathMatch: 'full' },
  { path: 'question2', component: Question2Component, pathMatch: 'full' },
  { path: 'question3', component: Question3Component, pathMatch: 'full' },
  { path: 'question4', component: Question4Component, pathMatch: 'full' },
  { path: 'question5', component: Question5Component, pathMatch: 'full' },
  { path: 'question6', component: Question6Component, pathMatch: 'full' },
  { path: 'question7', component: Question7Component, pathMatch: 'full' },
  { path: 'question8', component: Question8Component, pathMatch: 'full' },
  { path: 'score', component: ScoreComponent, pathMatch: 'full' },
  { path: 'gift', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
