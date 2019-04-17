import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.scss']
})
export class CreateMeetupComponent {

  constructor(private _meetupService: MeetupService) { }

  /**
   * Метод обрабатывающий введенные данные в форму
   * @param form - форма
   */
  submitForm(form: NgForm) {
    const meetup = form.value;
    meetup.id = ++this._meetupService.getList().length;
    this._meetupService.create(meetup);
  }
}
