import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'question1', component: Question1Component, pathMatch: 'full' },
  { path: 'question2', component: Question2Component, pathMatch: 'full' },
  { path: 'question3', component: Question3Component, pathMatch: 'full' },
  { path: 'gift', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
