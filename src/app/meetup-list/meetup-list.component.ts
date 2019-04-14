import { Component, OnInit } from '@angular/core';

import { meetupList } from '../meetup';
import { MeetUpEvent } from '../meetup.interface';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss']
})
export class MeetupListComponent implements OnInit {
  title = 'Meetups list';
  meetups: MeetUpEvent[];

  constructor() {}

  ngOnInit() {
    this.meetups = meetupList;
  }

  deleteMeetup(id: number) {
    this.meetups = this.meetups.filter(m => m.id !== id);
  }
}
