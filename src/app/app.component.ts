import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ISU-meetup';

  color = 'red';

  today: number = Date.now();

  meetupList: any[] = [
    { 'id': 1, 'name': 'first lection' },
    { 'id': 2, 'name': 'second lection'},
    { 'id': 3, 'name': 'third lection'}
  ];
}
