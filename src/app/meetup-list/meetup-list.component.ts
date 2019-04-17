import { Component, OnInit } from '@angular/core';

import { MeetUpEvent } from '../meetup.interface';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss']
})
export class MeetupListComponent implements OnInit {
  title = 'Meetup list';
  meetups: MeetUpEvent[];

  constructor(private _meetupService: MeetupService) {}

  ngOnInit() {
    this.loadList();
  }

  deleteMeetup(id: number) {
    this._meetupService.remove(id);
  }

  loadList(): void {
    this.meetups = this._meetupService.getList();
  }
}
