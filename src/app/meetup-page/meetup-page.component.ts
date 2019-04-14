import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meetup-page',
  templateUrl: './meetup-page.component.html',
  styleUrls: ['./meetup-page.component.scss']
})
export class MeetupPageComponent implements OnInit {
  meetupId: string;

  constructor(
    private _activatedRoute: ActivatedRoute // <== Зависимость
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      (data) => {
        this.meetupId = data.id;
      }
    );
  }
}
