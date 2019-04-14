import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupPageComponent } from './meetup-page/meetup-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MeetupListComponent } from './meetup-list/meetup-list.component';
import { MeetupCardComponent } from './meetup-card/meetup-card.component';
import { Lection3Component } from './lection3/lection3.component';
import { MenuComponent } from './menu/menu.component';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MeetupPageComponent,
    AboutPageComponent,
    MeetupListComponent,
    MeetupCardComponent,
    Lection3Component,
    MenuComponent,
    CreateMeetupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
