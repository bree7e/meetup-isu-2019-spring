import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetupPageComponent } from './meetup-page/meetup-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MeetupListComponent } from './meetup-list/meetup-list.component';
import { Lection3Component } from './lection3/lection3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'meetup',
    pathMatch: 'full',
  },
  {
    path: 'lection4',
    component: Lection3Component,
  },
  {
    path: 'meetup',
    component: MeetupListComponent,
  },
  {
    path: 'meetup/:id',
    component: MeetupPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
