import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.scss']
})
export class CreateMeetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Метод обрабатывающий введенные данные в форму
   * @param masha - форма
   */
  submitForm(masha:  NgForm) {
    console.log(masha.value);
    // const meetup: MeetUpEvent = {
    //   id: this._meetupService.getList().length + 1,
    //   ...this.createForm.value,
    //   from_date,
    //   to_date: from_date,
    //   signup_to_date: from_date - 1000 * 60 * 60 * 24,
    //   signup_from_date: from_date - 1000 * 60 * 60 * 24 * 10,
    //   date: this.createForm.get('from_date').value,
    // };
    // this._meetupService.addItem(meetup);
  }
}
