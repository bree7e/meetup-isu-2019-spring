import { Component } from '@angular/core';
import { meetupList } from './meetup';
import { MeetUpEvent } from './meetup.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ISU-meetup';

  color = 'red';

  today: number = Date.now();
  /** список событий */
  meetupList: MeetUpEvent[] = meetupList;
}
