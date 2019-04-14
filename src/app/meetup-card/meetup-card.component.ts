import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MeetUpEvent } from '../meetup.interface';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss'],
})
export class MeetupCardComponent implements OnInit {
  @Input() meetup: MeetUpEvent;
  @Output() remove = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  deleteMeetup(id: number): void {
    this.remove.emit(id);
  }
}
